import React from 'react';
import Logo from './components/Logo';
import Info from './components/Info';
import BookingCard from './components/Booking/BookingCard';
import Card from './components/Cards/Card';
import FareCard from './components/Fare/FareCard';
import Terms from './components/Terms';
import Passenger from './components/Passenger/Passenger';
import html2pdf from 'html2pdf.js';

function Ticket({ formData, onBack }) {
  const handleBack = () => {
    onBack(formData); // Pass formData back to the parent component
    // console.log(formData);
  };

  const handlePrintAndSave = () => {
    const ticketDiv = document.getElementById('ticket');
  
    // Add margin and padding to the ticketDiv
    ticketDiv.style.margin = '1cm'; // Adjust the margin as needed
    ticketDiv.style.padding = '1cm'; // Adjust the padding as needed
  
    const options = {
      filename: 'ticket.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'cm', format: 'a3', orientation: 'portrait', compressPDF: true }
    };
  
    html2pdf().from(ticketDiv).set(options).save();
  
    // Reset margin and padding after generating the PDF
    ticketDiv.style.margin = '20';
    ticketDiv.style.padding = '';
  };
  

  return (
    <div className='container mt-3 mb-5'>
      <div id='ticket'>
        <Logo />
        <Info />
        <BookingCard col1data={formData.bdata1[0]} col2data={formData.bdata2[0]} />
        <Card heading='Flight Details' data={formData.fdata} />
        {/* <Card heading='Passenger Details' data={formData.pdata} /> */}
        <Passenger heading = 'Passenger Details' data={formData.pdata}/>
        <FareCard heading='Fare Detailss' data={formData.fadata}/>
        <Terms />
      </div>
      <div className="container mt-2 mb-2 p-3 text-center">
          <button type="button" className="btn btn-primary m-2" onClick={handleBack}> Back </button>
          <button type="button" className="btn btn-success m-2" onClick={handlePrintAndSave}> Download </button>
        </div>
    </div>
  );
}

export default Ticket;
