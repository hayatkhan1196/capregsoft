import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Profile from "./Profile";
import Form from "./Form";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App  text='functional components'/> */}
    <Router>
      <Link to="/"> profile </Link>
      <Link to="/form"> form</Link>

      <Route exact path="/" component={Profile} />
      <Route path="/form" component={Form} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
