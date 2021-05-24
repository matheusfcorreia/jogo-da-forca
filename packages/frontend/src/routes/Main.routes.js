import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PageWithTopBar } from 'components/';
import { Game, SignUp } from 'pages/';

const MainRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/play"
        render={() => (
          <PageWithTopBar>
            <Game />
          </PageWithTopBar>
        )}
      />
      <Route
        exact
        path="/login"
        render={() => (
          <SignUp />
        )}
      />

      <Redirect to="/login" />
    </Switch>
  );
};

export default MainRoutes;
