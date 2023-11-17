import React from 'react'
import { Product2 } from '../Home'
import { Product1 } from '../Home';
import { useParams } from 'react-router-dom'
export default function ProductDetail() {
    let {id} = useParams();
    const found= Product1.find(element=>element.id==id);

    const foun= Product1.find(element=>element.id==id);
  return (
   <>
 

    <div className="card" style={{ width: '30rem', margin:'auto' }}>
      <img src={found.imgage} className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <p className="card-text">
       <h2> {found.Name}</h2>
        <h6>{found.PrdNumber}</h6>
        </p>
      </div>
    </div>
   </>
  )
}
