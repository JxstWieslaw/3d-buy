import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-toastify/dist/ReactToastify.css";
import "./components-landing/assets/scss/style.scss";
import App from './App';
import'./index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GoogleOAuthProvider clientId="191635117542-cfncvg94338rjd3c7b90o8q3rjl2ghhr.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

