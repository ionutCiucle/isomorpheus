import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './app-container';

// We set a timeout
setTimeout(function() {
  ReactDOM.hydrate(
    <AppContainer/>,
    document.getElementById('root'),
    () => {console.log('=== HYDRATED ===')}
  );
}, 10000);
