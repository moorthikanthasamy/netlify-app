import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/dashboard";

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById('app-container'));