import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Customer from './routes/customer';
import Login from './routes/login';
import Signup from './routes/signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="customer" element={<Customer />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
