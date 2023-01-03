// import "Assets/reset.css";
// import "Assets/globalStyles.css";
import "Assets/paladin-styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter
} from "react-router-dom";
import ViewportService from "Services/viewport";
import App from "./App";

// Instantiate the viewport service
const viewportService = new ViewportService(); //eslint-disable-line no-unused-vars

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

// Link the react app to the DOM
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
