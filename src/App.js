import React from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import './App.css';
import Footer from './components/Footer/Footer';
import MainBody from './components/MainBody/MainBody';

const App = () => {
  return (
    <div className='main-container'>
      <TopBanner></TopBanner>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
};

export default App;