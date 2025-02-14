import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import Footer from './component/Footer';
import FeaturedVehicles from './component/FeaturedVehicles';
import ClientFeedback from './component/ClientFeedback';
import PopularDestinations from './component/PopularDestinations';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <FeaturedVehicles />
      <PopularDestinations />
      <ClientFeedback />
      <Footer />
    </div>
  );
}

export default App;
