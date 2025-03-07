import React from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import './App.css';
import Footer from './components/Footer/Footer';
import MainBody from './components/MainBody/MainBody';
import ScrollToTop from 'react-scroll-to-top';

const App = () => {
  return (
    <div className='main-container'>
      <TopBanner />
      <MainBody />
      <Footer />
      
      <ScrollToTop smooth color="#6a74c9" width="15" height="15" />
    </div>
  );
};

export default App;