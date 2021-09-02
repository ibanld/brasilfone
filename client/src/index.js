import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/authContext'
import { UsersProvider } from './context/usersContext'
import { AlertProvider } from './context/alertContext';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  
  <AuthProvider>
  <UsersProvider>
  <AlertProvider>
    <App />
  </AlertProvider>
  </UsersProvider>
  </AuthProvider>
  
  ,document.getElementById('root')
);
