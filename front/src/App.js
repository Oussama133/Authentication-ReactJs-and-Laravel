import React from 'react';
import {BrowserRouter as Router, Route , Switch, Redirect} from 'react-router-dom';
import axios from 'axios';

import MasterLayout from './layouts/admin/MasterLayout';
import Home from "./components/frontend/Home"
import Register from './components/frontend/auth/Register';
import Login from './components/frontend/auth/Login';
import AdminPrivateRoute from './AdminPrivateRoute';

axios.defaults.baseURL = "http://localhost:8000/" //to prevent repeating this on every api endpoint
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

axios.defaults.withCredentials = true; //this is for cors on laravel we make credentials true and we add this

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config
})

function App() {
  return (
    <div className="App">
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              
              {/* <Route path='/register' component={Register} />
              <Route path='/login' component={Login} /> */}
              <Route path='/register'>
                {localStorage.getItem('auth_item')?<Redirect to='/' />:<Register/>}
              </Route>
              <Route path='/login'>
                {localStorage.getItem('auth_item')?<Redirect to='/' />:<Login/>}
              </Route>

              {/* <Route path='/admin' name='Admin' render={(props)=><MasterLayout {...props} />} /> */}
              <AdminPrivateRoute path='/admin' name='Admin' />
            </Switch>
          </Router>
    </div>
  );
}

export default App;
