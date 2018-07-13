import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-tippy/dist/tippy.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
