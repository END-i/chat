import styled from "styled-components";

import { ReactComponent as CloseIcon } from "assets/icons/close2.svg";

const Wrapper = styled.div`
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 1;
`;

const MessageWrapper = styled.div`
  position: relative;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
  margin: 0 0 15px;
  padding: 16px 24px;
  line-height: 1.5715;
  max-width: 300px;
  min-width: 200px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 10px;
  svg:first-child {
    width: 25px;
    height: 25px;
  }
`;

const Icon = styled(CloseIcon)`
  width: 8px;
  height: 8px;
  cursor: pointer;
  opacity: 0.5;
  position: absolute;
  right: 10px;
  top: 10px;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
`;

const TitleMessage = styled.p`
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  margin: 0 0 10px;
`;
export { Wrapper, MessageWrapper, TitleMessage, Icon };
