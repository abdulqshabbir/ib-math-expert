import React from 'react';
import { AuthProvider } from './contexts/AuthProvider'
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
