import React from 'react'
import BookingTile from './BookingTile'

function BookingDataCard(props) {
  return (
    <div className="container mt-2 mb-2">
      {props.data.map(item => (
        <BookingTile data = {item.key} value = {item.value} />
      ))}
    </div>
  )
}

export default BookingDataCard