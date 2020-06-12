import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #ddd;
  height: 45px;
  box-sizing: border-box;
  & a {
    color: #146cd2;
    transition: 0.1s;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    display: grid;
    justify-items: center;
    padding: 2px 10px;
    letter-spacing: -1px;
  }
`;

export default function () {
  return (
    <Wrapper>
      <div>&copy; {` ${new Date().getFullYear()} Tokyo, Copyright`}</div>
      <a href="https://github.com/END-i">https://github.com/END-i</a>
    </Wrapper>
  );
}
