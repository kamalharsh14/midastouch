import React from 'react'
import Heading from '../Heading'
import Tile from '../Cards/Tile'

function Passenger(props) {
  const heading = props.heading
  const data = props.data
  const title = [{ key: 'Sr. No', value: '' },
    { key: 'First & Last Name', value: '' },
    { key: 'Sector', value: '' },
    { key: 'PNR', value: '' },
    { key: 'Check In | Cabin Baggage', value: '' },
    { key: 'Meal', value: '' },
    { key: 'Seat', value: '' },
    { key: 'Document', value: '' }]
  return (
    <div className="container mt-4 mb-3">
      <Heading title = {heading} />
      <div className="container border mt-3">
        <div className="row text-center">
          {title.map(item =>(
              <Tile title = {item.key} className="col border text-white bg-dark small pt-2"/>
          ))}
        </div>
      </div>
        <div className="container border-right border-bottom  border-left mb-3">
          {data.map(items =>(
            <div className="row text-center">
              {items.map(item =>(
                  <Tile title = {item.value} className="col border"/>
              ))}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Passenger