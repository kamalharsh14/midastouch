import React, { useState } from 'react';
import './App.css'
import Ticket from './Ticket'
import FlightBookingForm from './components/FlightBookingForm'

function App() {
  const [formData, setFormData] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);
  
  const handleSubmit = (data) => {
    setFormData(data);
    setIsDisplay(true);
  }

  const handleBack = (data) => {
    console.log('Back')
    setFormData(data)
    setIsDisplay(false);
  };
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
      [{key: 'Airline', value: 'Air India'},
      {key: 'Flight Number', value: 'I5-519'},
      {key: 'Class', value: 'Economy'},
      {key: 'Departing Airport', value: 'BLR'},
      {key: 'Departing Date | Time', value: '12/02/2024 | 13:45'},
      {key: 'Arriving Airport', value: 'IXR'},
      {key: 'Arriving Date | Time', value: '12/02/2024 | 16:15'}]
    ],
    pdata : [
      [{key: 'Sr. No', value: '1'},
      {key: 'First & Last Name', value: 'Harsh Singh'},
      {key: 'Sector', value: 'BLR'},
      {key: 'PNR', value: 'PX510'},
      {key: 'Check In | Cabin Baggage', value: '20kgs | 7kgs'},
      {key: 'Meal', value: 'No'}, 
      {key: 'Seat', value: '1B'}, 
      {key: 'Document', value: 'N/A'}],  
      [{key: null, value: '2'},
      {key: null, value: 'Harsh Singh'},
      {key: null, value: 'BLR'},
      {key: null, value: 'PX510'},
      {key: null, value: '20kgs | 7kgs'},
      {key: null, value: 'No'}, 
      {key: null, value: '1C'}, 
      {key: null, value: 'N/A'}]
    ],
    fadata : [
      {key: 'Total Fare', value: ''}
    ]
}
  return (
    // <>
    //   <FlightBookingForm />
    //   {/* <Ticket data = {jsonData}/>  */}
    // </>
    <div>
      {!isDisplay && <FlightBookingForm onSubmit={handleSubmit} />}
      {isDisplay && <Ticket formData={formData} onBack={handleBack} />}
    </div>
  )
}

export default App