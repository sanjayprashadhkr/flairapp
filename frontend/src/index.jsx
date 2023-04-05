import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import productReducer from "./reducers/product";
import userReducer from "./reducers/user";

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
const domain = "dev-qouk516vim4qcqtp.us.auth0.com";
const clientId = "g2Jn6VYxB4rolVg0yZ8Ut75waAKNHxZW";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
