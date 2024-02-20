import React from 'react'
import './App.css'
import Logo from './components/Logo'
import Info from './components/Info'
import BookingCard from './components/Booking/BookingCard'
import Card from './components/Cards/Card'
import FareCard from './components/Fare/FareCard'

function App() {
  const bdata1 = [
    {key: 'Date', value: ''},
    {key: 'Time', value: ''},
    {key: 'Status', value: ''}
  ];
  const bdata2 = [
    {key: 'Type', value: ''},
    {key: 'PNR', value: ''}
  ];
  const fdata = [
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'}
  ];
  const pdata = [
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'},
    {key: 'Airline', value: 'Luftansa'}
  ];
  const fadata1 = [
    {key: 'Total Fare', value:''}
  ];

  const fadata2 = [
    {key: 'Rs.12000', value:''}
  ]

  return (
    <div className='container mt-3 mb-5'>
      <Logo />
      <Info />
      <BookingCard col1data = {bdata1} col2data = {bdata2}/>
      <Card heading = 'Flight Details' data = {fdata}/>
      <Card heading = 'Passenger Details' data = {pdata}/>
      <FareCard heading = 'Fare Details' col1data = {fadata1} col2data = {fadata2}/>
    </div>
  )
}

export default App