import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import './App.css';
import Home from "./components/Home/home";
import AboutUs from './components/About/aboutUs';
import Portfolios from './components/Portfolios/Portfolios';
import Services from './components/Services/Services';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/Portfolios" element={<Portfolios />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
