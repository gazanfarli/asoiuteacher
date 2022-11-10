import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from './features/Teacher';

const store = configureStore({
  reducer: {
    teacher: teacherReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
