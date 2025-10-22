import React from 'react';
import './App.css';
import Navigation from './Navigation';
import HeaderImage from './HeaderImage';
import Featured from './Featured';
import Tutorials from './Tutorials';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeaderImage />
      <Featured />
      <Tutorials />
      <Footer />
    </div>
  );
}

export default App;
