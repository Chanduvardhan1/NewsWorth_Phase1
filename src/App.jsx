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
import About from './about/about.jsx';
import Profile from '../src/profile/profile.jsx';
import Contactus from './contactus/contactus.jsx';
import Resetpassword from './resetpassword/resetpassword.jsx';
import Resetmobile from './resetpasswordmobile/resetpassword.jsx';
import Landing from './landing/landing.jsx';
import Footer from './footer/footer.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import Watch from './watch/watch.jsx';
import Watchimages from './watchimages/watchimages.jsx';
import { AuthProvider } from './Authcontext/AuthContext.jsx';
import Images from './dashboard/images.jsx';
import PrivateRoute from './privateRoute/privateRoute.jsx';
import Audio from './dashboard/audio.jsx';
import Cart from './cart/cart.jsx';
import Search from './search/search.jsx';
import Myorder from './myorder/myorder.jsx';
import Mycontent from './dashboard/mycontent.jsx';
import Breaking_News from './categories/breakingnews.jsx'
import PoliticalNews from './categories/politicalnews.jsx';
import Business_economy from './categories/business_economy.jsx';
import Technology from './categories/technology.jsx';
import Science from './categories/science.jsx';
import Health from './categories/health.jsx';
import Education from './categories/education.jsx';
import Sport from './categories/sports.jsx';
import Entertainment from './categories/entertainment.jsx'
import Crimelaw from './categories/crime-law.jsx';
import WorldNews from './categories/worldnews.jsx';
import Environment from './categories/environment.jsx';
import { TimerProvider } from './timerContext.jsx';
function App() {  
  return (
    <>
       <TimerProvider>

    
             <AuthProvider>

      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<NoPage />} />
    <Route path="Navbar" element={<Navbar />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
    <Route path="about" element={<About/>}/>
    <Route path="Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
    <Route path="contactus" element={<Contactus />} />
    <Route path="resetpassword" element={<Resetpassword />} />
    <Route path="resetmobile" element={<Resetmobile />} />
    <Route path="images" element={<PrivateRoute><Images /></PrivateRoute>} />
    <Route path="audio" element={<PrivateRoute><Audio /></PrivateRoute>} />
    <Route path="search" element={<PrivateRoute><Search/></PrivateRoute>} />
    <Route path="myorder" element={<PrivateRoute><Myorder/></PrivateRoute>} />
    <Route path="mycontent" element={<PrivateRoute><Mycontent/></PrivateRoute>} />
    <Route path='Breaking_News' element={<PrivateRoute><Breaking_News/></PrivateRoute>}/>
    <Route path="Political_News" element={<PrivateRoute><PoliticalNews/></PrivateRoute>}/>
    <Route path="business_economy" element={<PrivateRoute><Business_economy/></PrivateRoute>}/>
    <Route path="Technology" element={<PrivateRoute><Technology/></PrivateRoute>}/>
    <Route path="Science" element={<PrivateRoute><Science/></PrivateRoute>}/>
    <Route path="Health" element={<PrivateRoute><Health/></PrivateRoute>}/>
    <Route path="Education" element={<PrivateRoute><Education/></PrivateRoute>}/>
    <Route path="Sports" element={<PrivateRoute><Sport/></PrivateRoute>}/>
    <Route path="Entertainment" element={<PrivateRoute><Entertainment/></PrivateRoute>}/>
    <Route path="Crime_law" element={<PrivateRoute><Crimelaw/></PrivateRoute>}/>
    <Route path="World_News" element={<PrivateRoute><WorldNews/></PrivateRoute>}/>
    <Route path="Environment" element={<PrivateRoute><Environment/></PrivateRoute>}/>


    <Route path="landing" element={<PrivateRoute><Landing /></PrivateRoute>} />
    <Route path="watch" element={<PrivateRoute><Watch /></PrivateRoute>} />
    <Route path="Watchimages" element={<PrivateRoute><Watchimages /></PrivateRoute>} />

    <Route path="footer" element={<Footer />} />
    <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />

  </Route>
</Routes>

        {/* <VerificationHandler /> */}
      </BrowserRouter>
      </AuthProvider>
      </TimerProvider>
    </>
  );
}

export default App;
