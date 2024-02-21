import React from 'react'
import './App.css'
import Ticket from './Ticket'

function App() {
  const jsonData = {
    bdata1 : [
      {key: 'Date', value: ''},
      {key: 'Time', value: ''},
      {key: 'Status', value: ''}
    ],
    bdata2 : [
      {key: 'Type', value: ''},
      {key: 'PNR', value: ''}
    ],
    fdata : [
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'}
    ],
    pdata : [
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'},
      {key: 'Airline', value: 'Luftansa'}
    ],
    fadata1 : [
      {key: 'Total Fare'}
    ],
    fadata2 : [
      {key: 'Rs.12000'}
    ]
  }
  return (
    <>
      <Ticket data = {jsonData}/> 
    </>
  )
}

export default App