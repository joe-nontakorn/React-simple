import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../pages/App'; 
import Test from '../pages/Test';

const CustomRouter = () => {
  return (
    <Router>
        <Route path="/app" component={App} />
        <Route path="/test" component={Test} /> 
    </Router>
  );
};

export default CustomRouter;
