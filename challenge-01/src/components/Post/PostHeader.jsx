import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Header = styled.header`
  border-bottom: 1px #eee;
  display: table;
  width: 100%;
`;

const Left = styled.div`
  float: left;
  width: 60px;
`;

const Right = styled.div`
  margin-left: 75px;
  margin-top: 10px;
`;

const Avatar = styled.img`
  border-radius: 100%;
  height: 60px;
  width: 60px;
`;

const Username = styled.p`
  color: #666;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const ReadTime = styled.p`
  color: #999;
  font-size: 14px;
  margin: 0;
`;

const PostHeader = props => {
  return (
    <Header>
      <Left>
        <Avatar src={props.data.avatar} alt="Avatar" />
      </Left>
      <Right>
        <Username>{props.data.name}</Username>
        <ReadTime>há {props.data.timeInMinutes} min</ReadTime>
      </Right>
    </Header>
  );
};

export default PostHeader;
