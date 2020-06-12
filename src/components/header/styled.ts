import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #ddd;
  display: flex;
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 45px;
  box-sizing: border-box;
`;

const Button = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background: transparent;
  transition: 0.1s;
  user-select: none;
  &:hover {
    background: #0000001a;
  }
`;
const Logo = styled.div`
  font-size: 2em;
  margin-right: auto;
  cursor: pointer;
  user-select: none;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background: #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  height: inherit;
`;
const Name = styled.span`
  font-weight: 600;
`;
const Avatar = styled.div<{ image: string }>`
  background: ${({ image }) => `url("${image}")`};
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 3px solid #888;
  margin: 0 10px;
`;

export { Wrapper, Button, Logo, User, Name, Avatar };
