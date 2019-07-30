// import "Assets/reset.css";
// import "Assets/globalStyles.css";
import "Assets/paladin-styles.css";
import React from "react";
import ReactDOM from "react-dom";
import ViewportService from "Services/viewport";

import App from "./App";

// Instantiate the viewport service
const viewportService = new ViewportService(); //eslint-disable-line no-unused-vars

// Link the react app to the DOM
ReactDOM.render(
  <App />,
  document.getElementById("app")
);
