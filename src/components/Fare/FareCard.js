import React from 'react'
import Heading from '../Heading'
import FareDataCard from './FareDataCard'

function FareCard(props) {
    const data = props.data[0][0];
    console.log(data)
    const col1data = data.key
    const col2data = data.value
    console.log(col1data)
    console.log(col2data)
  return (
    <div className="container mt-4 mb-5">
        <Heading title={props.heading}/>
        <div className="container border mt-3 mb-3">
            <div className="row">
                <div className="col text-left">
                    <FareDataCard data = {col1data} />
                </div>
                <div className="col text-right">
                    <FareDataCard data = {col2data} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FareCard