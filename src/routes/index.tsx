import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokedex from '../pages/pokedex';
import List from '../pages/list';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Pokedex} />
    <Route path="/List" component={List} />
  </Switch>
);

export default Routes;
