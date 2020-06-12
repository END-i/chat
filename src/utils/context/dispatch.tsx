import React, { createContext } from "react";

import { IType, IDispatch } from "utils/types";

export const DispatchContext = createContext((type: IType, value: any) => {});

interface DispatchContextProps {
  children: React.ReactNode;
  dispatch: React.Dispatch<IDispatch>;
}

export default function ({ children, dispatch: _dispatch }: DispatchContextProps) {
  const dispatch = (type: IType, value: any) => _dispatch({ type, value });

  return <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>;
}
