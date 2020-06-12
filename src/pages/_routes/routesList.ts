import SignIn from "pages/signIn";
import SignUp from "pages/signUp";
import Recovery from "pages/recovery";

import Home from "pages/home";
import Chat from "pages/chat";

import { IRoute } from "utils/types";

const privateRoutes: IRoute[] = [
  {
    path: "home",
    component: Home,
  },
  {
    path: "chat",
    component: Chat,
  },
];

const publicRoutes: IRoute[] = [
  {
    path: "sign_in",
    component: SignIn,
  },
  {
    path: "sign_up",
    component: SignUp,
  },
  {
    path: "recovery",
    component: Recovery,
  },
];

export { privateRoutes, publicRoutes };
