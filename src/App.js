import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdminPrivateRoute from './layouts/admin/MasterPage';
import PublicRoute from "./layouts/frontend/FrontendLayout";

import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";

import Page403 from "./components/error/Page403";
import Page404 from "./components/error/Page404";
import axios from 'axios';

function App() {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route path='/admin' name='Admin' component={AdminPrivateRoute}/>
            <Route path='/' name="Home" component={PublicRoute} />

            <Route path='/403' name="Page403" component={Page403} />
            <Route path='/404' name="Page403" component={Page404} />

            <Route path="/login"component={Login} name='Login'/>
            <Route path="/register"component={Register} name='Register'/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
