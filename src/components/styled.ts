import styled from "styled-components";

export const TextArea = styled.textarea<{ error?: string }>`
  resize: none;
  font-size: 1em;
  outline: 0 none;
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  transition: 0.15s;
  ${({ error }) =>
    error
      ? `
        border-color: red;
        color: red;`
      : ``}

  &:focus {
    ${({ error }) =>
      `box-shadow: 0 1px 1px rgba(245, 103, 13, 0.075) inset, 0 0 8px rgba(${
        error ? `138, 90, 90` : `134, 134, 134`
      }, 0.6);`}
  }
`;

export const Input = styled.input<{ error?: string }>`
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1em;
  width: 100%;
  outline: 0 none;
  ${({ error }) =>
    error
      ? `
        border-color: red;
        color: red;`
      : ``}

  transition: 0.15s;
  &:focus {
    ${({ error }) =>
      `box-shadow: 0 1px 1px rgba(245, 103, 13, 0.075) inset, 0 0 8px rgba(${
        error ? `138, 90, 90` : `134, 134, 134`
      }, 0.6);`}
  }
  @media (max-width: 480px) {
    padding: 5px 10px;
  }
`;

export const Button = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 8px 0;
  margin-left: auto;
  transition: 0.1s;
  user-select: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1em;
  transition: 0.15s;
  ${({ disabled }) =>
    disabled
      ? `
    background: #ddd;
    color: #888;
    cursor: inhertir;
    &:hover {
      background: #ddd;
    }
    `
      : `
    cursor: pointer;
    background: #146cd2;
    &:hover {
      background: #0077ff;
    }
    `};
  @media (max-width: 480px) {
    min-width: 60px;
    padding: 3px 0;
  }
`;

export const AuthFormTitle = styled.h2`
  color: #0077ff;
  text-decoration: underline;
  font-size: 2em;
`;

export const AuthWrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto 50px;
  width: 350px;
  h2 {
    text-align: center;
    font-weight: 600;
    @media (max-width: 480px) {
      font-size: 1.5em;
      margin: 5px 0;
    }
  }
  @media (max-width: 480px) {
    width: auto;
    padding: 0 10px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  cursor: pointer;
  & > svg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;
