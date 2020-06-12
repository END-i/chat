import styled from "styled-components";

export const Wrapper = styled.form`
  width: 100%;
`;
export const Field = styled.div<{ grid: { col: string | number; row: string | number } }>`
  display: grid;
  grid-template-columns: ${({ grid }) => grid.col || "1fr"};
  grid-template-rows: ${({ grid }) => grid.row || "1fr"};
  align-items: center;
  margin: 5px 0;
`;
export const Error = styled.small`
  color: red;
  min-height: 20px;
`;
