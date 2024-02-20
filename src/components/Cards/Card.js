import React from 'react'
import Heading from '../Heading'
import TitleCard from './TitleCard';

function Card(props) {
    const heading = props.heading
    const data = props.data
  return (
    <div className="container mt-4 mb-5">
        <Heading title = {heading} />
        <div className="container border mt-3 mb-3">
            <TitleCard data = {data} />  
        </div>
    </div>
  )
}

export default Card