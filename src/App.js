import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 


import './App.css';
import Home from './sections/home/home';
import Client from './sections/client/client'; 
import Trolley from './sections/trolley/trolley';
import Products from './sections/products/products';
import ProductItSelf from './sections/products/productInSelf/productItSelf';
import PaymentForm from './sections/products/paymentForm/paymentForm';
import Plans from './sections/plans/plans'; 
import PlanItSelf from './sections/plans/planItSelf/planItSelf';
import Profile from './sections/profile/profile';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';
import Nav from './sections/nav/nav';
import LoginRegister from './sections/loginRegister/login';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<Client />} />
          <Route path="/trolley" element={<Trolley />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productItSelf" element={<ProductItSelf />} />
          <Route path="/paymentForm" element={<PaymentForm />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/planItSelf" element={<PlanItSelf />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

