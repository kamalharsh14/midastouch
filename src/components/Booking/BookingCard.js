import React from 'react'
import Heading from '../Heading'
import BookingDataCard from './BookingDataCard'

function BookingCard(props) {
    const col1data = props.col1data
    const col2data = props.col2data
  return (
    <div className="container mt-4 mb-5">
        <Heading title="Booking Details"/>
        <div className="container border mt-3 mb-3">
            <div className="row">
                <div className="col text-left">
                    <BookingDataCard data = {col1data} />
                </div>
                <div className="col text-left">
                    <BookingDataCard data = {col2data} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingCard