import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PageWithTopBar } from 'components/';
import { Game, SignUp } from 'pages/';

const MainRoutes = props => {
  return (
    <Switch>
      <Route
        exact
        path="/play"
        render={() => (
          <PageWithTopBar>
            <Game { ...props }/>
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
