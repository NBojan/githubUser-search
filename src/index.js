import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GitProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${process.env.REACT_APP_DOMAIN_KEY}`}
      clientId={`${process.env.REACT_APP_CLIENT_ID}`}
      redirectUri={window.location.origin}
      cacheLocation= "localstorage"
    >
      <GitProvider>
        <App />
      </GitProvider>
    </Auth0Provider>
  </React.StrictMode>
);