import './App.css';
import {Route, Routes}from 'react-router-dom'
import {api} from './utils/api'
import React from 'react'
import ReactDom from 'react-dom'
import Home from './components/Home'

import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
      <Routes>

<Route path="/beers" element={<ListBeers />} />
<Route path="/random" element={<RandomBeer />} />
<Route path="/new-beer" element={<NewBeer />} />


</Routes>
    </div>
  );
}

export default App;
