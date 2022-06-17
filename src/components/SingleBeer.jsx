import React from 'react'
import Header from './Header'
import {useParams} from 'react-router-dom'
import {api} from '../utils/api'
import {useEffect, useState} from 'react'

function SingleBeer() {
  const {id} = useParams()
  const [singleBeer, setSingleBeer] = useState(null)
  const fetchSingleBeer = async() => {
  const response = await fetch(`${api}/${id}`)
  const parsed = await response.json()
  setSingleBeer(parsed)
  console.log(parsed, id)
  }

  useEffect(() => {
    fetchSingleBeer()
  },[id])   
  
  return ( 
    <div >
    <p>text</p>
    <p>{singleBeer.name}</p>
    {/* <img src={beer.image_url} alt="ggg" style={{height: 150}}></img>
  <h3>{beer.name}</h3>
  <span>{beer.tagline}</span>
  <p>Contributed by: {beer.contributed_by}</p>  */}
  </div>
  )
}

export default SingleBeer

// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by
