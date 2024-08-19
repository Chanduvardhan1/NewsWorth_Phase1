import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home/home.jsx';
import NoPage from "./pages/NoPage.jsx";
import Layout from "./pages/Layout.jsx";

    function App() {
    
  return (
    <>
      
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<NoPage />} />
    
  </Route>
</Routes>

        {/* <VerificationHandler /> */}
      </BrowserRouter>
  
    </>
  );
}

export default App;
