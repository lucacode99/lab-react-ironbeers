import React from 'react'
import {Routes, Route}from 'react-router-dom'
import beers from '../assets/beers.png'



function Home() {
  return (
    <div>
    <img src={beers} alt="header"/>
    <h1>Homepage</h1>
   
    </div>
  )
}

export default Home