import React from 'react'
import Logo from './components/Logo'
import Info from './components/Info'
import BookingCard from './components/Booking/BookingCard'
import Card from './components/Cards/Card'
import FareCard from './components/Fare/FareCard'

function Ticket(props) {
    const jsonData = props.data;
  return (
    <div className='container mt-3 mb-5'>
      <Logo />
      <Info />
      <BookingCard col1data = {jsonData.bdata1} col2data = {jsonData.bdata2}/>
      <Card heading = 'Flight Details' data = {jsonData.fdata}/>
      <Card heading = 'Passenger Details' data = {jsonData.pdata}/>
      <FareCard heading = 'Fare Details' col1data = {jsonData.fadata1} col2data = {jsonData.fadata2}/>
    </div>
  )
}

export default Ticket