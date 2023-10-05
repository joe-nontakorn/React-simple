import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjust the path if needed

const rootElement = document.getElementById('root');

// Use ReactDOM to render the App component in the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
