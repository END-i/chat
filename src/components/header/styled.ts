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
  @media (max-width: 480px) {
    padding: 5px;
  }
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
  @media (max-width: 480px) {
    padding: 5px;
    letter-spacing: -0.5px;
  }
`;
const Logo = styled.div`
  font-size: 2em;
  margin-right: auto;
  cursor: pointer;
  user-select: none;
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background: #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  height: inherit;
  @media (max-width: 480px) {
    letter-spacing: -1px;
    padding: 0px 5px;
  }
`;
const Name = styled.span`
  font-weight: 600;
  @media (max-width: 480px) {
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 120px;
    overflow: hidden;
  }
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
