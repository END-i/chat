import { useContext } from "react";

import Provider from "./provider";
import { DispatchContext } from "./dispatch";
import { StateContext } from "./state";

const useDispatch = () => {
  return useContext(DispatchContext);
};
const useGlobalState = () => {
  const state = useContext(StateContext);
  return state;
};

export { useDispatch, useGlobalState, Provider };
