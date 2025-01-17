import './App.css';
import {Route, Routes}from 'react-router-dom'
import React from 'react'
import ReactDom from 'react-dom'
import Home from './components/Home'
import Header from './components/Header';
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import SingleBeer from './components/SingleBeer'



function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers/>} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        {/* <Route path="/" element={<Header />} /> */}
      </Routes>
    </div>
  );
}

export default App;

// ask about:
// 1: header
// 2. single page: contributed by is showing information double