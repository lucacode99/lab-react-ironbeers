import React from 'react'
import Header from './Header'
import {api} from '../utils/api'
import {useEffect, useState} from 'react'

function RandomBeer() {

  //const {id} = useParams()
  const [randomBeer, setRandomBeer] = useState("")
  const fetchRandomBeer = async() => {
  const response = await fetch(`${api}/random`)
  const parsed = await response.json()
  setRandomBeer(parsed)
  
  }

  useEffect(() => {
    fetchRandomBeer()
  },[])
    
  return (
    <div>
      <h1>{randomBeer.name}</h1>
      <img src={randomBeer.image_url} alt="ggg" style={{height: 350}} />
      <p>{randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
      <p>First brewed: {randomBeer.first_brewed}</p>
      <p>{randomBeer.tagline}</p>
    </div>
  )

}
export default RandomBeer




  
 
