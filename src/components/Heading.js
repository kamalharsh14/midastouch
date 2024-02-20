import React from 'react'

function Heading(props) {
  return (
    <div className="container border mt-1 mb-2 pt-1 pb-1 bg-dark text-white text-center">
        <h5>{props.title}</h5>
    </div>
  )
}

export default Heading