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
import Contactus from './contactus/contactus.jsx';
import Resetpassword from './resetpassword/resetpassword.jsx';
import Resetmobile from './resetpasswordmobile/resetpassword.jsx';
import Landing from './landing/landing.jsx';
import Footer from './footer/footer.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import Watch from './watch/watch.jsx';
import Watchimages from './watchimages/watchimages.jsx';

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
    <Route path="contactus" element={<Contactus />} />
    <Route path="resetpassword" element={<Resetpassword />} />
    <Route path="resetmobile" element={<Resetmobile />} />

    <Route path="landing" element={<Landing />} />
    <Route path="watch" element={<Watch />} />
    <Route path="Watchimages" element={<Watchimages />} />

    <Route path="footer" element={<Footer />} />
    <Route path="dashboard" element={<Dashboard />} />

  </Route>
</Routes>

        {/* <VerificationHandler /> */}
      </BrowserRouter>
  
    </>
  );
}

export default App;
