import React from 'react'
import Header from './Header'
import {useParams} from 'react-router-dom'
import {api} from '../utils/api'
import {useEffect, useState} from 'react'

function SingleBeer() {
  const {id} = useParams()
  const [singleBeer, setSingleBeer] = useState("")
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
  
    <div>
      <h1>{singleBeer.name}</h1>
      
      <img src={singleBeer.image_url} alt="ggg" style={{height: 350}} />

      
      <p>{singleBeer.description}</p>
      <p>Contributed by: {singleBeer.contributed_by}</p>
      <p>First brewed: {singleBeer.first_brewed}</p>
      <p>{singleBeer.tagline}</p>
      

    
   
  </div>

  )
}

export default SingleBeer