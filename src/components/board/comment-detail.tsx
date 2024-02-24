import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { UserInfo } from "../../screens/board/postView";
import ReactQuill from "react-quill";
import { values } from "mobx";

export type CommentInfo = {
  profile: string;
  lv: number;
  id: string;
  reviewId: number;
  reviewAuthor: string;
  content: string;
  updateDate: string;
  modify?: boolean; //기본 false
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  border: 2px solid #bababa;
  border-radius: 5px;
  padding: 10px;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  .profileBox {
    display: flex;
    text-align: left;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .userdiv {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      .nick {
        font-size: 20px;
        font-weight: bold;
      }
      .lv {
        font-size: 15px;
        color: #ccc;
      }
    }
  }

  button {
    width: fit-content;
    text-align: center;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: white;
    border: 2px solid #bababa;
    color: #bababa;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    margin-right: 5px;
    line-height: 10px; /* 버튼의 높이를 조절 */
  }
`;

const DetailWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ModifyWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;
  button {
    margin-top: 10px;
    width: 100px;
    height: 40px;
    border: 1px solid #bababa;
    font-weight: bold;
    border-radius: 5px;
    background-color: #3e68ff;
    color: white;
    cursor: pointer;
  }
`;

const CommentDetail = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<CommentInfo[]>([]);
  const [detail, setDetail] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  const [isModify, setIsModify] = useState<boolean>(false);
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
      },
    };
  }, []);

  const [userMyfo, setMyInfo] = useState<UserInfo>({
    name: "",
    profileImg: "",
    lv: 1,
    id: "",
    email: "",
  }); // 로그인 유저 정보

  useEffect(() => {
    fetchComments();
    loadUserData();
  }, [postId, accessToken]);

  const loadUserData = () => {
    axios
      .get(`http://titto.duckdns.org/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        const userData = response.data;
        setMyInfo({
          name: userData.nickname,
          profileImg: userData.profileImg,
          lv: 1,
          id: userData.id,
          email: userData.email,
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `http://titto.duckdns.org/matching-board-review/get/${postId}`,
        {
          headers: {
            accept: "application/json;charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data.length > 0) {
        setComments(response.data);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleDeleteComment = (reviewIdToDelete: number) => {
    const confirmDelete = window.confirm("댓글을 삭제하시겠습니까?");
    if (confirmDelete) {
      axios
        .delete(
          `http://titto.duckdns.org/matching-board-review/delete/${reviewIdToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json;charset=UTF-8",
            },
          }
        )
        .then((response) => {
          console.log("댓글이 성공적으로 삭제되었습니다.");

          setComments((prevComments) =>
            prevComments.filter(
              (comment) => comment.reviewId !== reviewIdToDelete
            )
          );
          window.location.reload(); // 일단..
        })
        .catch((error) => {
          console.error("댓글 삭제 중 에러가 발생했습니다:", error);
        });
    }
  };

  const handleReviewModify = async (
    reviewId: number,
    postId: number,
    content: string
  ) => {
    await axios
      .put(
        `http://titto.duckdns.org/matching-board-review/update/${reviewId}`,
        {
          postId: postId,
          reviewId: reviewId,
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json;charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log("댓글 수정 성공:", response.data);
        setIsModify(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("댓글 수정 중 에러가 발생했습니다:", error);
      });
  };

  return (
    <>
      {comments.map((comment) => (
        <Wrapper key={comment.reviewId}>
          <ProfileWrapper>
            <div className="profileBox">
              <img src={comment.profile} alt="User-Profile" />
              <div className="userdiv">
                <div className="nick">{comment.reviewAuthor}</div>
                <div className="lv">
                  LV.{comment.lv} |{" "}
                  {new Date(comment.updateDate).toLocaleString("ko-KR")}
                </div>
              </div>
            </div>
            <div>
              {userMyfo.name === comment.reviewAuthor && ( // 로그인한 유저와 댓글 작성자가 같을 경우 수정/삭제 버튼 표시
                <div>
                  <button
                    onClick={() => {
                      comment.modify = !comment.modify;
                      setIsModify(!isModify);
                    }}
                  >
                    수정
                  </button>
                  <button onClick={() => handleDeleteComment(comment.reviewId)}>
                    삭제
                  </button>
                </div>
              )}
            </div>
          </ProfileWrapper>
          {comment.modify ? (
            <ModifyWrapper>
              <ReactQuill
                modules={modules}
                value={comment.content}
                onChange={(content) => {
                  comment.content = content;
                }}
              ></ReactQuill>
              <button
                onClick={() => {
                  handleReviewModify(
                    comment.reviewId,
                    parseInt(postId),
                    comment.content
                  );
                }}
              >
                수정하기
              </button>
            </ModifyWrapper>
          ) : (
            <DetailWrapper>
              <div
                className="detail"
                dangerouslySetInnerHTML={{ __html: comment.content }}
              ></div>
            </DetailWrapper>
          )}
        </Wrapper>
      ))}
    </>
  );
};

export default CommentDetail;
