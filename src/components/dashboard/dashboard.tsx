import React from "react";

import { IChilrenProps } from "utils/types";
import { Wrapper } from "./styled";
import { Header, Footer } from "components";

export default function ({ children }: IChilrenProps) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}
