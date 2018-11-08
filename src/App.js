import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SectionA from './components/Sections/SectionA.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionA />
      </div>
    );
  }
}

export default App;
