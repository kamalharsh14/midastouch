import React from 'react'

function BookingTile(props) {
  return (
    <p className="display-b-details"><span className="d-inline-block">{props.data}</span> : <span className="d-inline-block">{props.value}</span></p>
  )
}

export default BookingTile