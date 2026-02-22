import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CartProvider } from './Context/CartContext';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/DhakaFash">
    <AuthProvider>
      <GoogleOAuthProvider clientId="635614233423-tj7ovkeomk9bf4mgbp2pqll0gntvqngm.apps.googleusercontent.com">
        <CartProvider>
          <PayPalScriptProvider options={{ "client-id": "AYzM9A-rFIT9Oxsbt7rCJ2zCMkc6GsbDmISFnGmkoV4ZESUSLxO_5jAHOQXjDwbbOWI9fYQGgSgtFTdC" }}>
            <App />
          </PayPalScriptProvider>
        </CartProvider>
      </GoogleOAuthProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
