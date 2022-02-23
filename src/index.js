import bootstrap from "bootstrap";
import React from "react";
import {render} from "react-dom";
import "./index.css"
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";

// setInterval(() => {
//     ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.querySelector("#root"));
// }, 1000);

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector("#root"));