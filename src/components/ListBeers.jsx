import React from 'react'
import Header from './Header';

import {useState, useEffect} from 'react'
import {api} from '../utils/api'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



function ListBeers() {
  const [beers, setBeers] = useState([])
  const fetchBeers = async setter => {
  const response = await fetch(`${api}`) 
  const parsed = await response.json()
  console.log(parsed)
  setBeers(parsed)
}

useEffect(() => {
  fetchBeers()
}, [])



  return (
    <div>
    <Header />
    <h1>ListBeers</h1>
    {beers.map(beer => (
      <div  key={beer._id}>
        <img src={beer.image_url} alt="ggg" style={{height: 150}}></img>
      <h3>
        <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
      </h3>
      <span>{beer.tagline}</span>
      <p>Contributed by: {beer.contributed_by}</p> 
      
      </div>
    
    ))
    }
    </div>
  )
}

export default ListBeers
//image, tagline, contributed_by, /beers/:beerId.


//import beerPicture from './src/assets/beers.png'
{/* <img src={beerPicture} alt="banner"/> */}