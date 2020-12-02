import React from 'react';
import { Signup } from './components/Signup'

const AuthContext = React.createContext({user: {id: null, email: null}})

function App() {
  return (
    <div>
        <Signup />
    </div>
  );
}

export default App;
