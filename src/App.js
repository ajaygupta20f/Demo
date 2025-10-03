import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Welcome from './components/Welcome';
import Consigning from './components/Consigning';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import RulesFooter from './components/RulesFooter';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Categories />
              <Welcome />
              <Consigning />
              <Services />
              <HowItWorks />
              <RulesFooter />
            </>
          } />
          <Route path="/signup" element={<SignupPage />} />
           <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
