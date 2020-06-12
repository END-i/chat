import React from "react";
import { Route, Redirect } from "react-router";

import { IRouteWrapper } from "utils/types";
import { Dashboard } from "components";

export default function ({
  component: Component,
  isAuth,
  redirectPathname,
  publicRoutes,
  ...rest
}: IRouteWrapper): JSX.Element {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuth ? (
          <Dashboard>
            <Component {...props} />
          </Dashboard>
        ) : (
          <Redirect
            to={{
              pathname: redirectPathname,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
