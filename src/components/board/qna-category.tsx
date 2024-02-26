import styled from "styled-components";

const CategoryWrapper = styled.div`
  width: 100%;
  border: 1px solid #bababa;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  text-align: left;
  .category-title {
    color: #325393;
    font-weight: bold;
  }

  .category-select {
    color: #bababa;
    font-weight: bold;
  }
`;

const CategoryTitle = styled.div`
  padding: 10px;
  color: #325393;
  font-weight: bold;
`;
const CategorySelect = styled.div`
  padding: 10px;
  color: #bababa;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const QnaCategoty = () => {
  return (
    // 아래를 카테고리 선택 컴포넌트로 사용하면 됩니다.

    <CategoryWrapper>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategorySelect>전체보기</CategorySelect>
      <CategorySelect>인문융합 콘텐츠</CategorySelect>
      <CategorySelect>경영</CategorySelect>
      <CategorySelect>사회융합</CategorySelect>
      <CategorySelect>미디어콘텐츠융합</CategorySelect>
      <CategorySelect>미래융합</CategorySelect>
      <CategorySelect>소프트웨어융합</CategorySelect>
    </CategoryWrapper>
  );
};

export default QnaCategoty;
