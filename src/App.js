import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SectionA from './components/Sections/SectionA.js';
import SectionB from './components/Sections/SectionB.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionA />
        <SectionB />
      </div>
    );
  }
}

export default App;
