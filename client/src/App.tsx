import React from 'react';
import { AuthProvider } from './components/AuthProvider'
import { Signup } from './components/Signup'
import { DashBoard } from './components/Dashboard'

function App() {
  return (
    <div>
      <AuthProvider>
        <DashBoard />
        <Signup />
      </AuthProvider>
    </div>
  );
}

export default App;
