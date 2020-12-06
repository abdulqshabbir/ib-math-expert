import React from 'react';
import { AuthProvider } from './contexts/AuthProvider'
import { Signup } from './components/Signup'
import { DashBoard } from './components/Dashboard'
import { Login } from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <PrivateRoute 
              path="/dashboard"
              exact={false}
              component={DashBoard}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
