import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import PublicRoutesList from "../../routes/PublicRoutesList";

const FrontendLayout = () => {
  return (
    <div>
      <Header />
        <Switch>
            {PublicRoutesList.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                )
              );
            })}
            <Redirect from="/admin" to="/" />
        </Switch>
      <Footer />
    </div>
  );
};

export default FrontendLayout;
