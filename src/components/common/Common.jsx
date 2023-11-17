import React from 'react'

export default function Common(props) {
  return (
    <>
          <div className="card" style={{ width: '30rem', margin:'auto' }}>
      <img src={props.imgage} className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <p className="card-text">
       <h2> {props.Name}</h2>
        <h6>{props.PrdNumber}</h6>
        </p>
      </div>
    </div>
    </>
  )
}
