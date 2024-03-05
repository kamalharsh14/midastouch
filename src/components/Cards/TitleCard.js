import React from 'react'
import Tile from './Tile'

function TitleCard(props) {
    const data = props.data
  return (
    <>
      <div className="row text-center">
          {data.map(item =>(
              <Tile title = {item.key} className="col border text-white bg-dark small pt-2"/>
          ))}
      </div>
      <div className="row text-center">
          {data.map(item =>(
              <Tile title = {item.value} className="col border"/>
          ))}
      </div>
    </>
  )
}

export default TitleCard