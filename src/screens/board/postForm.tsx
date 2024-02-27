import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import QuillEditor from "../../components/board/QuillEditor";
import ReactQuill from "react-quill";
import axios from "axios";

import userStore from "../../stores/UserStore";
import { set } from "firebase/database";


const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  text-align: left;
`;

const BoardTitle = styled.div`
  padding: 15px 0px 15px 10px;
  width: 100%;
  color: #3e68ff;
  font-weight: bold;
  font-size: 30px;
  border-bottom: 2px solid #3e68ff;
`;

const Category = styled.div`
  width: 100%;
  padding: 20px 0px 10px 10px;
  font-size: 20px;
  select {
    margin-top: 10px;
    display: block;
    width: 30%;
    border: 1px solid #bababa;
    border-radius: 5px;
    background-color: #fbfbfd;
    padding: 10px;
    font-size: 20px;
    outline: none;
  }
`;

const Title = styled.div`
  width: 100%;
  padding: 20px 0px 10px 10px;
  font-size: 20px;
  input {
    margin-top: 10px;
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #bababa;
    border-radius: 5px;
    background-color: #fbfbfd;
    font-size: 20px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 20px 0px 10px 10px;
  font-size: 20px;
  textarea {
    margin-top: 10px;
    display: block;
    width: 100%;
    height: 500px;
    padding: 10px;
    border: 1px solid #bababa;
    border-radius: 5px;
    background-color: #fbfbfd;
    font-size: 20px;
    resize: none;
  }
`;

const Point = styled.div`
  width: 100%;
  padding: 20px 0px 10px 10px;
  font-size: 20px;
  select {
    margin-top: 10px;
    display: block;
    width: 30%;
    border: 1px solid #bababa;
    border-radius: 5px;
    background-color: #fbfbfd;
    padding: 10px;
    font-size: 20px;
    outline: none;
  }
`;

const Submit = styled.div`
  margin-top: 40px;
  width: 100%;
  padding: 20px 0px 10px 10px;
  display: flex;
  font-size: 20px;
  justify-content: right;
  gap: 20px;
  .cancel {
    width: 100px;
    height: 40px;
    border: 1px solid #bababa;
    border-radius: 5px;
    background-color: #fbfbfd;
    font-size: 20px;
    cursor: pointer;
  }
  .cancel:hover {
    background-color: #bababa;
    color: white;
  }
  .submit {
    width: 100px;
    height: 40px;
    border: 1px solid #bababa;
    border-radius: 5px;
    background-color: #3e68ff;
    font-size: 20px;
    color: white;
    cursor: pointer;
  }
  .submit:hover {
    background-color: #bababa;
    color: white;
  }
`;

const PostForm = () => {
  const navigate = useNavigate();
  const { boardId = "default", postId } = useParams();
  const [bType, setBType] = useState<string>("작성");
  const quillRef = useRef<ReactQuill | null>(null);
  const [exp, setExp] = useState(0);
  const [status, setStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    boardId === "titto" ? "STUDY" : "HUMANITIES"
  );
  const selectedTittoCategory = ["STUDY", "MENTOR", "MENTEE", "UHWOOLLEAM"];
  const selectedQnaCategory = [
    "HUMANITIES",
    "MANAGEMENT",
    "SOCIETY",
    "MEDIA_CONTENT",
    "FUTURE_FUSION",
    "SOFTWARE",
  ];
  interface tittoCategoryMapping {
    STUDY: string;
    MENTOR: string;
    MENTEE: string;
    UHWOOLLEAM: string;
  }
  interface qnaCategoryMapping {
    HUMANITIES: string;
    MANAGEMENT: string;
    SOCIETY: string;
    MEDIA_CONTENT: string;
    FUTURE_FUSION: string;
    SOFTWARE: string;
  }

  const tittoCategoryMapping: tittoCategoryMapping = {
    STUDY: "스터디구해요",
    MENTOR: "멘토찾아요",
    MENTEE: "멘티찾아요",
    UHWOOLLEAM: "어울림찾아요",
  };
  const QnaCategoryMapping: qnaCategoryMapping = {
    HUMANITIES: "인문융합콘텐츠",
    MANAGEMENT: "경영",
    SOCIETY: "사회융합",
    MEDIA_CONTENT: "미디어콘텐츠융합",
    FUTURE_FUSION: "미래융합",
    SOFTWARE: "소프트웨어 융합",
  };
  const [title, setTitles] = useState("");
  const [htmlContent, setContents] = useState("");

  useEffect(() => {
    if (boardId === "titto") {
      if (postId) {
        setBType("수정");
        axios
          .get(`/api/matching-post/get/${postId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            const postData = response.data;
            setSelectedCategory(postData.category);
            setTitles(postData.title);
            setContents(postData.content);
          })
          .catch((error) => {
            console.error("Error fetching post data:", error);
          });
      }
    } else {
      if (postId) {
        setBType("수정");
        axios
          .get(`/api/questions/${postId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            const postData = response.data;

            setSelectedCategory(postData.department);
            setTitles(postData.title);
            setContents(postData.content);
            setExp(postData.sendExperience);
            setStatus(postData.status);
          })
          .catch((error) => {
            console.error("Error fetching post data:", error);
          });
      }
    }
  }, [postId]);

  const handleSubmit = async () => {
    if (boardId === "qna") {
      const apiUrl = postId

        ? `/api/questions/update/${postId}`
        : "/api/questions/create";
      const requestBody = {
        department: selectedCategory,
        title: title,
        content: htmlContent,
        status: "UNSOLVED",
        sendExperience: exp,
        imgList: [],
      };

      if (postId) {
        try {
          console.log(title, htmlContent, selectedCategory);
          const response = await axios.put(
            `http://titto.duckdns.org/questions/${postId}`,
            {
              title: title,
              content: htmlContent,
              department: selectedCategory,
            },

            {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                Accept: `application/json;charset=UTF-8`,
              },
            }
          );
          console.log("Success:", response.data);
          navigate(`/board/lists/${boardId}/1`);
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        axios
          .post(apiUrl, requestBody, {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => {
            navigate(`/board/lists/${boardId}/1`);
          })
          .catch((err) => {
            if (err.response.status === 400) {
              alert("내공이 부족합니다!.");
            }
          });
      }
    } else {
      const apiUrl = postId
        ? `/api/matching-post/update/${postId}`
        : "/api/matching-post/create";

      const requestBody = {
        category: selectedCategory,
        title: title,
        content: htmlContent,
        status: "RECRUITING",
      };
      if (postId) {
        try {
          const response = await axios.put(apiUrl, requestBody, {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          navigate(`/board/lists/${boardId}/1`);
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        try {
          const response = await axios.post(apiUrl, requestBody, {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });

          navigate(`/board/lists/${boardId}/1`);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };
  return (
    <Wrapper>
      <BoardTitle>글 {bType} </BoardTitle>

      <Category>
        카테고리 <span style={{ color: "red" }}>*</span>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {boardId === "titto"
            ? selectedTittoCategory.map((category) => (
                <option key={category} value={category}>
                  {tittoCategoryMapping[category as keyof tittoCategoryMapping]}
                </option>
              ))
            : selectedQnaCategory.map((category) => (
                <option key={category} value={category}>
                  {QnaCategoryMapping[category as keyof qnaCategoryMapping]}
                </option>
              ))}
        </select>
      </Category>

      <Title>
        제목 <span style={{ color: "red" }}>* </span>
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => {
            setTitles(e.target.value);
          }}
        />
      </Title>
      {boardId === "qna" ? (
        <Point>
          내공 <span style={{ color: "red" }}>*</span>
          <select
            onChange={(e) => {
              setExp(Number(e.target.value));
            }}
          >
            {Array.from({ length: 11 }, (_, i) => i * 10).map((num) => {
              return (
                <option key={num} value={num}>
                  {num}
                </option>
              );
            })}
          </select>
        </Point>
      ) : (
        <></>
      )}
      <Content>
        내용 <span style={{ color: "red" }}>*</span>
        <br />
        <QuillEditor
          quillRef={quillRef}
          htmlContent={htmlContent}
          setHtmlContent={setContents}
        />
      </Content>
      <Submit>
        <button
          className="cancel"
          onClick={() => {
            history.back();
          }}
        >
          취소
        </button>
        <button className="submit" onClick={handleSubmit}>
          {postId ? "수정" : "작성"}
        </button>
      </Submit>
    </Wrapper>
  );
};

export default PostForm;
