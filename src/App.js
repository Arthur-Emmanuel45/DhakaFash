import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import ForgotPassword from './components/ForgetResetPassword/ForgotPassword';
import ResetPassword from './components/ForgetResetPassword/ResetPassword';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import VerifyEmailSent from './components/VerifyEmailSent/VerifyEmailSent';
import VerifyEmail from "./VerifyEmail/VerifyEmail";
import AllProducts from './components/HomePage/AllProducts/AllProducts';
import ProductDetail from './components/Product/ProductDetail/ProductDetail';
import CartPage from './components/Product/CartPage/CartPage';
import SearchResults from './components/SearchBar/SearchResults';
import CheckoutPage from './components/Product/CheckoutPage/CheckoutPage';
import OrderReview from './components/Product/OrderReview/OrderReview';
import OrderSuccess from './components/Product/OrderSuccess/OrderSuccess';
import OrderDetail from './components/Product/OrderDetails/OrderDetails';

function App() {
  return (
    // <div className='App'>
    //   <ForgotPassword />
    // </div>
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />
        <Route path="/verify-email-sent" element={<VerifyEmailSent />} />
        <Route path="/verify-email/:uid/:token" element={<VerifyEmail />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-review" element={<OrderReview />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-details" element={<OrderDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}


export default App;