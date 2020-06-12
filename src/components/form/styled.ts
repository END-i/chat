import styled from "styled-components";

export const Wrapper = styled.form`
  width: 100%;
`;
export const Field = styled.div<{ grid: { col: string | number; row: string | number } }>`
  display: grid;
  grid-template-columns: ${({ grid }) => grid.col || "1fr"};
  grid-template-rows: ${({ grid }) => grid.row || "1fr"};
  grid-gap: 5px 0;
  align-items: center;
  margin: 5px 0;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
export const Error = styled.small`
  color: red;
  min-height: 20px;
`;
