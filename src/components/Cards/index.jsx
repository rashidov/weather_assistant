import React from 'react'
import { useSelector } from 'react-redux'

import Loading from '../Loading'
import Card from '../Card'

import './style.css'

const Cards = () => {
  const loading = useSelector( state => state.app.loading )
  const locations = useSelector( state => state.app.locations )

  if(loading) {
    return <div className="cards__wrapper"><Loading /></div>
  }

  return (
    <div className="cards__wrapper">
      {locations.map( (location, index) => ( <Card data={location} index={index} /> ))}
    </div>
  )
}

export default Cards