import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/Login';
import AdminScreen from '../pages/AdminScreen';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/admin" component={AdminScreen} />
    <Route path="/" component={SignIn} />
  </Switch>
);

export default AppRoutes;
