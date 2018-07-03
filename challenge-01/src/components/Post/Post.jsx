import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin: 30px auto;
  max-width: 700px;
  padding: 30px;
`;

const Item = styled.div`
  margin: 5px;
  background: tomato;
  font-size: 1.5em;
`;

const Post = props => {
  return (
    <Section>
      <Item />
    </Section>
  );
};

export default Post;
