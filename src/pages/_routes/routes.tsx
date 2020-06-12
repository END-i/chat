import React from "react";
import { Route, Redirect, Switch } from "react-router";

import RouteWrapper from "./routeWrapper";
import NotFound from "../notFound";

import { IRoute } from "utils/types";
import { privateRoutes, publicRoutes } from "./routesList";
import { useGlobalState } from "utils/context";

const Routes = () => {
  const { isAuth } = useGlobalState();

  if (typeof isAuth === "string") {
    return null;
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (isAuth ? <Redirect to="/home" /> : <Redirect to="/sign_in" />)}
      />
      {publicRoutes.map(({ path, component }: IRoute) => (
        <RouteWrapper
          key={path}
          path={`/${path}`}
          isAuth={!isAuth}
          redirectPathname="/home"
          publicRoutes
          component={component}
        />
      ))}
      {privateRoutes.map(({ path, component }: IRoute) => (
        <RouteWrapper
          key={path}
          path={`/${path}`}
          isAuth={!!isAuth}
          redirectPathname="/sign_in"
          component={component}
        />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
