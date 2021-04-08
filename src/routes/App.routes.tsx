import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import SignIn from '../pages/Login';
import AdminScreen from '../pages/AdminScreen';
import Customers from '../pages/Customers';
import CustomerDetails from '../pages/CustomerDetails';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={() => <Redirect to="/register" />} />
    <Route path="/register" component={AdminScreen} />
    <Route path="/customers/:id" component={CustomerDetails} />
    <Route path="/customers" component={Customers} />
  </Switch>
);

export default AppRoutes;
