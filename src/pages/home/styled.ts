import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  padding: 45px 0 45px;
  margin: 0px 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  margin: 10px 0;
  @media (max-width: 480px) {
    margin: 0 0 10px;
  }
`;
export const Messages = styled.div`
  flex-grow: 1;
  margin: 10px 0;
  background: #ddd;
  border-radius: 5px;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
`;

export const Message = styled.div<{ current: boolean }>`
  margin: 10px;
  ${({ current }) =>
    current
      ? `
    margin-left: auto !important;
    background: #9cdcb0;`
      : `background: #a0daf7;`}
  padding: 10px;
  color: #3c3a3a;
  width: fit-content;
  min-width: 200px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    margin: 5px;
  }
`;
export const User = styled.div``;
export const Name = styled.div`
  font-weight: 600;
  text-decoration: underline;
`;
export const Avatar = styled.div<{ image: string }>``;
export const Text = styled.div`
  padding: 0 10px;
`;
export const Timestamp = styled.div`
  margin-left: auto;
  font-size: 0.8em;
  font-weight: 100;
`;
