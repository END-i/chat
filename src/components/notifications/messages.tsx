import React, { useEffect } from "react";

import { MessageWrapper, Icon, TitleMessage } from "./styled";
import { IMessageType, IMessageProps } from "utils/types";
import { ReactComponent as SuccessIcon } from "assets/icons/success.svg";
import { ReactComponent as ErrorIcon } from "assets/icons/error.svg";
import { ReactComponent as WarningIcon } from "assets/icons/warning.svg";
import { ReactComponent as InfoIcon } from "assets/icons/info.svg";

const timerDismiss = 10000;

export default function ({ remove, content = "", title = "", type, idx }: IMessageProps) {
  useEffect(() => {
    let timer: any;
    if (idx === 0) {
      timer = setTimeout(() => {
        remove();
      }, timerDismiss);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const icons: { [key in IMessageType]: any } = {
    error: <ErrorIcon />,
    success: <SuccessIcon />,
    warning: <WarningIcon />,
    info: <InfoIcon />,
  };

  return (
    <MessageWrapper>
      {icons[type]}
      <div>
        <TitleMessage>{title || (type === "error" && "Something went wrong!")}</TitleMessage>
        <span>{content}</span>
      </div>
      <Icon onClick={remove} />
    </MessageWrapper>
  );
}
