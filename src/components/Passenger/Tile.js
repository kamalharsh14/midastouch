import React from 'react'

function Tile(props) {
  return (
    <div className={props.className}>
        <p>{props.title}</p>
    </div>
  )
}

export default Tile