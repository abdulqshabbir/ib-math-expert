import React from 'react';
import { AuthProvider } from './contexts/AuthProvider'
import { Signup } from './components/Signup'
import { DashBoard } from './components/Dashboard'
import { Login } from './components/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
