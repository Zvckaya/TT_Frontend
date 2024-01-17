import React, { useEffect, useState, useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import QuilllEditor from "../../components/board/QuillEditor";

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
  const { boardId = "default", postId } = useParams();
  const [bType, setBType] = useState<string>("");
  const quillRef = useRef<ReactQuill | null>(null);
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
  const [point, setPoint] = useState(0);

  console.log(postId);
  const [title, setTitles] = useState("");
  const [htmlContent, setContents] = useState("");

  const HandleSubmit = async () => {
    // 여기에서 api로 결정
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
      },
    };
  }, []);

  const imageHandler = () => {
    if (quillRef.current) {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();
    }
  };

  useEffect(() => {
    setBType(BoardType(boardId));
  }, [boardId]);

  useEffect(() => {
    console.log(htmlContent);
  }, [htmlContent]);

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
        제목 <span style={{ color: "red" }}>* </span>
        <input
          type="text"
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
              return <option key={num}>{num}</option>;
            })}
          </select>
        </Point>
      ) : (
        <></>
      )}
      <Content>
        내용 <span style={{ color: "red" }}>*</span>
        <br />
        <QuilllEditor
          quillRef={quillRef}
          htmlContent={htmlContent}
          setHtmlContent={setContents}
        />
      </Content>
      <Submit>
        <button className="cancel">취소</button>
        <button className="submit" onClick={HandleSubmit}>
          {postId ? "수정" : "작성"}
        </button>
      </Submit>
    </Wrapper>
  );
};

export default PostForm;
