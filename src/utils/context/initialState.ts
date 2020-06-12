import { IInitialState } from "utils/types";

const initialState: IInitialState = {
  loading: false,
  errors: false,
  isAuth: "",
  uid: "",
  user: null,
  notifications: null,
  chats: [],
};

export default initialState;
