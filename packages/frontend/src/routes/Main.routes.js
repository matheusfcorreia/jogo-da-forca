import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PageWithTopBar } from 'components/';
import { Deliveries, SignUp } from 'pages/';

const MainRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/logs/lista"
        render={() => (
          <PageWithTopBar>
            <Deliveries status="shipped" />
          </PageWithTopBar>
        )}
      />
      <Route
        exact
        path="/logs/novo"
        render={() => (
          <SignUp />
        )}
      />

      <Redirect to="/logs/novo" />
    </Switch>
  );
};

export default MainRoutes;
