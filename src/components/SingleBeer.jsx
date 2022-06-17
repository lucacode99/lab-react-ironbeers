import React from 'react'
import Header from './Header'
import {useParams} from 'react-router-dom'
import {api} from '../utils/api'

function SingleBeer() {
  const {id} = setParams()
const fetchSingleBeer = async() => {
const response = await fetch('${api}')
}
  return (
    
    <div>
    <Header />
    <h1>SingleBeer</h1>
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
