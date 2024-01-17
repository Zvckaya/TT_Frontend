import React from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const PostForm = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Wrapper>
      <span></span>
    </Wrapper>
  );
}

export default PostForm;
