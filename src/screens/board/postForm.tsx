import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import QuillEditor from "../../components/board/QuillEditor";
import ReactQuill from "react-quill";
import axios from "axios";

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
  const [selectedCategory, setSelectedCategory] = useState<string>(
    boardId === "titto" ? "STUDY" : ""
  );
  const selectedTittoCategory = ["STUDY", "MENTOR", "MENTEE", "UHWOOLLEAM"];
  interface CategoryMapping {
    STUDY: string;
    MENTOR: string;
    MENTEE: string;
    UHWOOLLEAM: string;
  }

  const categoryMapping: CategoryMapping = {
    STUDY: "스터디구해요",
    MENTOR: "멘토찾아요",
    MENTEE: "멘티찾아요",
    UHWOOLLEAM: "어울림찾아요",
  };
  const selectedQnaCategory = [
    "인문융합콘텐츠",
    "경영",
    "사회융합",
    "미디어콘텐츠융합",
    "미래융합",
    "소프트웨어 융합",
    "전체보기",
  ];
  // const [point, setPoint] = useState(0);
  const [title, setTitles] = useState("제목");
  const [authorProfile, setProfiles] = useState("");
  const [htmlContent, setContents] = useState("");

  useEffect(() => {
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
          console.log("postData:", postData);
          setSelectedCategory(postData.category);
          setTitles(postData.title);
          setContents(postData.content);
        })
        .catch((error) => {
          console.error("Error fetching post data:", error);
        });
    }
  }, [postId]);

  const handleSubmit = async () => {
    const apiUrl = postId
      ? `http://titto.duckdns.org/matching-post/update/${postId}`
      : "http://titto.duckdns.org/matching-post/create";

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
        console.log("Success:", response.data);
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

        console.log("Success:", response.data);
        navigate(`/board/lists/${boardId}/1`);
      } catch (error) {
        console.error("Error:", error);
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
                  {categoryMapping[category as keyof CategoryMapping]}
                </option>
              ))
            : selectedQnaCategory.map((category) => (
                <option key={category} value={category}>
                  {categoryMapping[category as keyof CategoryMapping]}
                </option>
              ))}
        </select>
      </Category>

      <Title>
        제목 <span style={{ color: "red" }}>* </span>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitles(e.target.value);
          }}
        />
      </Title>
      {boardId === "qna" ? (
        <Point>
          내공 <span style={{ color: "red" }}>*</span>
          <select>
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
