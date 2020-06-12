import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;
const Link = styled.a`
  font-size: 30px;
  cursor: pointer;
`;

export { Wrapper, Title, Link };
