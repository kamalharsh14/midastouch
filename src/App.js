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
    // console.log('Back')
    setFormData(data)
    setIsDisplay(false);
  };

  return (
    <div>
      {!isDisplay && <FlightBookingForm onSubmit={handleSubmit} />}
      {isDisplay && <Ticket formData={formData} onBack={handleBack} />}
    </div>
  )
}

export default App