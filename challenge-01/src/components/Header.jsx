import React from "react";
import styled from "styled-components";

const BaseHeader = styled.header`
  background-color: #4267b2;
  border-bottom: 1px solid #29487d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
`;

const Header = () => {
  return (
    <BaseHeader>
      <Title>RocketBook</Title>
    </BaseHeader>
  );
};

export default Header;
