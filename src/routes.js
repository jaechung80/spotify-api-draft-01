import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Redirect from './components/Redirect';

const Router = () => {
  return (
    <BrowserRouter>
      <div className='main'>
        <Switch>
          <Route path='/' component={Login} exact={true} />
          <Route path='/redirect' component={Redirect} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Router;
