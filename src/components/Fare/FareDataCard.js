import React from 'react'
import FareTile from './FareTile'

function FareDataCard(props) {
  return (
    <div className="container mt-2 mb-2">
      {props.data.map(item => (
        <FareTile data = {item.key}/>
      ))}
    </div>
  )
}

export default FareDataCard