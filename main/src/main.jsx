import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { persistor, store } from "../redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate losding={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
