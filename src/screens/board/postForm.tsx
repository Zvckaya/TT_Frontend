import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

const Submit = styled.div`
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

const BoardType = (boardId: string): string => {
  switch (boardId) {
    case "titto":
      return "티토";
    case "qna":
      return "질문";
    default:
      return "!!!";
  }
};

const CategorySelect = (lists: string[]) => {
  return lists.map((list, index) => {
    return <option key={index}>{list}</option>;
  });
};

const PostForm = () => {
  const { boardId = "default" } = useParams();
  const [bType, setBType] = useState<string>("");
  const tittoCategory = ["멘토구해요", "멘티구해요", "어울려요"];
  const qnaCategory = [
    "인문융합콘텐츠",
    "경영",
    "사회융합",
    "미디어콘텐츠융합",
    "미래융합",
    "소프트웨어 융합",
    "전체보기",
  ];

  useEffect(() => {
    setBType(BoardType(boardId));
  }, [boardId]);

  return (
    <Wrapper>
      <BoardTitle>{bType} 게시판</BoardTitle>
      <Category>
        카테고리 <span style={{ color: "red" }}>*</span>
        <select>
          {CategorySelect(boardId === "titto" ? tittoCategory : qnaCategory)}
        </select>
      </Category>
      <Title>
        제목 <span style={{ color: "red" }}>*</span>
        <input type="text" />
      </Title>
      <Content>
        내용 <span style={{ color: "red" }}>*</span>
        <textarea />
      </Content>
      <Submit>
        <button className="cancel">취소</button>
        <button className="submit">작성</button>
      </Submit>
    </Wrapper>
  );
};

export default PostForm;
