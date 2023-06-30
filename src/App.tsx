import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Twitter from "./components/Twitter";

const App = () => (
    <Twitter/>
);
ReactDOM.render(<App/>, document.getElementById("app"));
