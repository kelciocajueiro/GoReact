import React from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";

const Section = styled.section`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 30px auto;
  max-width: 700px;
  padding: 30px;
`;

const Article = styled.article`
  color: #333;
  font-size: 16px;
  line-height: 25px;
  margin-top: 25px;
`;

const Separator = styled.hr`
  border: 0.8px solid #eee;
  margin: 12px 0;
`;

const Post = props => {
  return (
    <Section>
      <PostHeader data={props.data.header} />
      <Separator />
      <Article>{props.data.description}</Article>
    </Section>
  );
};

export default Post;
