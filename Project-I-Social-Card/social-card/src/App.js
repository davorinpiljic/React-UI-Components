import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
import Footer from './components/FooterComponents/Footer'

const App = () => {
  return (
    <div className="container">
      
      <div>
        <HeaderContainer />
      </div>  
      
      <div className="card-main-container">
        <CardContainer />

      </div>

      <div>
        <Footer />
      </div>
    
    </div>
  );
};

export default App;
