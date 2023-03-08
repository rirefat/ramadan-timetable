import React from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='main-container'>
      <TopBanner></TopBanner>
      <Footer></Footer>
    </div>
  );
};

export default App;