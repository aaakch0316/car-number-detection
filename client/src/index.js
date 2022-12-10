import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Customer from './routes/customer';
// import CustomerForm from './routes/CustomerForm';
import CustomerTest from './routes/CustomerTest';
import Login from './routes/login';
import Signup from './routes/signup';
import VisitorAccess from './routes/visitor-access';
import WorkerMonitor from './routes/worker-monitoring';
import Analysis from './routes/analysis'
import Employees from './routes/employees'
import Monitering from './routes/Monitering'
// import { Link } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <h1>한시경 프로젝트</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">HOME</Link> | {" "}
        <Link to="/login">LOGIN</Link> | {" "}
        <Link to="/signup">SIGNUP</Link> | {" "}
        <Link to="/customer">CUSTOMER</Link> | {" "}
      </nav> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="customer" element={<Customer />} />
      <Route path="CustomerTest" element={<CustomerTest />} />
      {/* <Route path="CustomerForm" element={<CustomerForm />} /> */}
      <Route path="visitor-access" element={<VisitorAccess />} />
      <Route path="analysis" element={<Analysis />} />
      <Route path="employees" element={<Employees />} />
      <Route path="Monitering" element={<Monitering />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="worker-monitoring" element={<WorkerMonitor />} />
    </Routes>
  </BrowserRouter>
);
