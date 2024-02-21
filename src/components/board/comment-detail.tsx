import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

type CommentInfo = {
  profileImg: string;
  lv: number;
  id: string;
  reviewId: number;
  reviewAuthor: string;
  content: string;
  updateDate: string;
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

const CommentDetail = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<CommentInfo[]>([]);
  const accessToken = localStorage.getItem("accessToken");

  // 화면 강제 갱신을 위한 상태 추가
  const [, updateState] = useState();
  const forceUpdate = () => updateState(undefined);

  useEffect(() => {
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

    fetchComments();
  }, [postId, accessToken]);

  const handleDeleteComment = (reviewIdToDelete: number) => {
    // 확인 팝업 표시
    const confirmDelete = window.confirm("댓글을 삭제하시겠습니까?");

    // 사용자가 확인을 눌렀을 때만 삭제 요청을 보냄
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
          // 삭제된 댓글을 상태에서 제거
          setComments((prevComments) =>
            prevComments.filter(
              (comment) => comment.reviewId !== reviewIdToDelete
            )
          );
          // 화면 강제 갱신
          forceUpdate();
        })
        .catch((error) => {
          console.error("댓글 삭제 중 에러가 발생했습니다:", error);
        });
    }
  };

  return (
    <>
      {comments.map((comment) => (
        <Wrapper key={comment.reviewId}>
          <ProfileWrapper>
            <div className="profileBox">
              <img src={comment.profileImg} alt="User-Profile" />
              <div className="userdiv">
                <div className="nick">{comment.reviewAuthor}</div>
                <div className="lv">
                  LV.{comment.lv} |{" "}
                  {new Date(comment.updateDate).toLocaleString("ko-KR")}
                </div>
              </div>
            </div>
            <div>
              <button>수정</button>
              <button onClick={() => handleDeleteComment(comment.reviewId)}>
                삭제
              </button>
            </div>
          </ProfileWrapper>
          <DetailWrapper>
            <div
              className="detail"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            ></div>
          </DetailWrapper>
        </Wrapper>
      ))}
    </>
  );
};

export default CommentDetail;
