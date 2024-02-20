import React from 'react'
import midastouch from '../assets/midastouch.png'

function Info() {
  return (
    <div className="row mb-1">
        <div className="col">
            <div className="info-left">
                <img src={midastouch} alt="midas touch" className='midastouch'/>
            </div>
        </div>
        <div className="col">
            <div className="p-3 info-right">
                <h3>MANAV MARFATIA</h3>
                <p>MUMBAI - 401103</p>
                <p><a href="9472710040">+91 9472710040</a>  |  <a href="manavmarfatia2001@gmail.com">manavmarfatia2001@gmail.com</a></p>
            </div>
        </div>
    </div>
  )
}

export default Info