import React from 'react'
import FareTile from './FareTile'

function FareDataCard(props) {
  return (
    <div className="container mt-2 mb-2">
        <FareTile data = {props.data}/>
    </div>
  )
}

export default FareDataCard