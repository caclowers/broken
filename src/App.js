import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Carousel from "./components/Carousel/Carousel.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import SectionA from './components/Sections/SectionA.js';
import SectionB from './components/Sections/SectionB.js';
import SectionC from './components/Sections/SectionC.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <SectionA />
        <SectionB />
        <SectionC />
      </div>
    );
  }
}

export default App;
