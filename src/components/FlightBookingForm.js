import React, { useState } from 'react';
import midastouch from '../assets/midastouch.png'

function FlightBookingForm({onSubmit}) {
  const [bookingData, setBookingData] = useState({
    bdata1: [[
      { key: 'Date', value: '' },
      { key: 'Time', value: '' },
      { key: 'Status', value: '' }
    ]],
    bdata2: [[
      { key: 'Type', value: '' },
      { key: 'PNR', value: '' }
    ]],
    fdata: [
      [
        { key: 'Airline', value: '' },
        { key: 'Flight Number', value: '' },
        { key: 'Class', value: '' },
        { key: 'Departing Airport', value: '' },
        { key: 'Departing Date | Time', value: '' },
        { key: 'Arriving Airport', value: '' },
        { key: 'Arriving Date | Time', value: '' }
      ]
    ],
    pdata: [
      [
        { key: 'Sr. No', value: '' },
        { key: 'First & Last Name', value: '' },
        { key: 'Sector', value: '' },
        { key: 'PNR', value: '' },
        { key: 'Check In | Cabin Baggage', value: '' },
        { key: 'Meal', value: '' },
        { key: 'Seat', value: '' },
        { key: 'Document', value: '' }
      ]
    ],
    fadata: [[{ key: 'Total Fare', value: '' }]]
  });

  const [passengerCount, setPassengerCount] = useState(1);

  const handleChange = (section, index, subIndex, event) => {
    const { value } = event.target;
    const updatedBookingData = { ...bookingData };
    updatedBookingData[section][index][subIndex].value = value;
    setBookingData(updatedBookingData);
  };

  const handleAddPassenger = () => {
    setPassengerCount(passengerCount + 1);
    const newPassenger = [
      { key: 'Sr. No', value: '' },
      { key: 'First & Last Name', value: '' },
      { key: 'Sector', value: '' },
      { key: 'PNR', value: '' },
      { key: 'Check In | Cabin Baggage', value: '' },
      { key: 'Meal', value: '' },
      { key: 'Seat', value: '' },
      { key: 'Document', value: '' }
    ];
    setBookingData(prevData => ({
      ...prevData,
      pdata: [...prevData.pdata, newPassenger]
    }));
  };

  const handleRemovePassenger = () => {
    if (passengerCount > 1) {
      const updatedPassengerData = [...bookingData.pdata];
      updatedPassengerData.pop();
      setBookingData(prevData => ({
        ...prevData,
        pdata: updatedPassengerData
      }));
      setPassengerCount(passengerCount - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Flight Booking Data:");
    console.log(JSON.stringify(bookingData, null, 2));
    onSubmit(bookingData);
  };

  return (
    <div className="container">
      <div className="container-fluid mt-5">
        <div className="row mb-1">
            <div className="d-flex justify-content-center">
                <div className="info-left text-center mb-3">
                    <img src={midastouch} alt="midas touch" className="img-fluid midastouch"/>
                </div>
            </div>
        </div>
    </div>

      <form onSubmit={handleSubmit}>
        <div className="container mt-5 mb-2 p-3 shadow bg-white rounded">
          <h4 className='bg-dark text-white p-2 text-center shadow rounded'>Booking Details</h4>
          {bookingData.bdata1.map((booking, index) => (
            <div key={index} className="booking-container">
                {booking.map((item, itemIndex) => (
                    <div key={itemIndex} className="form-group">
                      <input
                        type="text"
                        className="form-control mt-2 p-3 shadow-sm bg-white rounded"
                        value={item.value}
                        placeholder={item.key}
                        onChange={(event) => handleChange('bdata1', index, itemIndex, event)}
                      />
                    </div>
                  ))}
            </div>
          ))}
          {bookingData.bdata2.map((booking, index) => (
            <div key={index} className="booking-container">
                {booking.map((item, itemIndex) => (
                    <div key={itemIndex} className="form-group">
                      <input
                        type="text"
                        className="form-control mt-2 p-3 shadow-sm bg-white rounded"
                        value={item.value}
                        placeholder={item.key}
                        onChange={(event) => handleChange('bdata2', index, itemIndex, event)}
                      />
                    </div>
                  ))}
            </div>
          ))}
          </div>

        <div className="container mt-5 mb-2 p-3 shadow bg-white rounded">
          <h4 className='bg-dark text-white p-2 text-center shadow rounded'>Flight Details</h4>
          {bookingData.fdata.map((flight, index) => (
            <div key={index} className="flight-container">
              {flight.map((item, itemIndex) => (
                <div key={itemIndex} className="form-group">
                  <input
                    type="text"
                    className="form-control mt-2 p-3 shadow-sm bg-white rounded"
                    value={item.value}
                    placeholder={item.key}
                    onChange={(event) => handleChange('fdata', index, itemIndex, event)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="container mt-5 mb-2 p-3 shadow bg-white rounded">
          <h4 className='bg-dark text-white p-2 text-center shadow rounded'>Passenger Details</h4>
          {bookingData.pdata.map((passenger, passengerIndex) => (
            <div key={passengerIndex} className="passenger-container">
              {passenger.map((item, index) => (
                <div key={index} className="form-group">
                  <input
                    type="text"
                    className="form-control mt-2 p-3 shadow-sm bg-white rounded"
                    value={item.value}
                    placeholder={item.key}
                    onChange={(event) => handleChange('pdata', passengerIndex, index, event)}
                  />
                </div>
              ))}
            </div>
          ))}
        <br />
        <button type="button" className="btn btn-primary p-2" onClick={handleAddPassenger}>Add Passenger</button>
        {passengerCount > 1 && (
          <button type="button" className="btn btn-danger m-4 p-2" onClick={handleRemovePassenger}>Remove Passenger</button>
          )}

        </div>
        
        <div className="container mt-5 mb-2 p-3 shadow bg-white rounded">
          <h4 className='bg-dark text-white p-2 text-center shadow rounded'>Fare Details</h4>
          {bookingData.fadata.map((fare, index) => (
            <div key={index} className="booking-container">
                {fare.map((item, itemIndex) => (
                    <div key={itemIndex} className="form-group">
                      <input
                        type="text"
                        className="form-control mt-2 p-3 shadow-sm bg-white rounded"
                        value={item.value}
                        placeholder={item.key}
                        onChange={(event) => handleChange('fadata', index, itemIndex, event)}
                      />
                    </div>
                  ))}
            </div>
          ))}
        </div>
        
        <div className="container mt-2 mb-2 p-3 text-center">
          <button type="button" className="btn btn-success" onClick={handleSubmit}>Preview</button>
        </div>
      </form>
    </div>
  );
}

export default FlightBookingForm;