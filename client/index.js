import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './app-container';

// We set a timeout for being able to see
// the differences between the raw HTML and
// the React-injected app

setTimeout(function() {
  ReactDOM.hydrate(
    <AppContainer/>,
    document.getElementById('root'),
    () => {console.log('=== HYDRATED ===')}
  );
}, 10000);
