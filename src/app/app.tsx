import React from "react";
import { createBrowserHistory } from "history";
import { Router as BrowserRouter } from "react-router";

import AuthChecker from "./authChecker";
import Routes from "pages";
import { Provider } from "utils/context";
import { Notifications } from "components";
import { useGlobalState } from "utils/context";

const history = createBrowserHistory();

export default function () {
  const { loading } = useGlobalState();

  if (loading) {
    return null;
  }
  
  return (
    <Provider>
      <AuthChecker>
        <BrowserRouter history={history}>
          <Routes />
        </BrowserRouter>
      </AuthChecker>
      <Notifications />
    </Provider>
  );
}
