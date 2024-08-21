import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home/home.jsx';
import NoPage from "./pages/NoPage.jsx";
import Layout from "./pages/Layout.jsx";
import Navbar from './Navbar/navbar.jsx';
import Login from './login/login.jsx';
import Signup from './signup/signup.jsx';
import Profile from '../src/profile/profile.jsx';

function App() {  
  return (
    <>
      
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<NoPage />} />
    <Route path="Navbar" element={<Navbar />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
    <Route path="Profile" element={<Profile />} />


  </Route>
</Routes>

        {/* <VerificationHandler /> */}
      </BrowserRouter>
  
    </>
  );
}

export default App;
