import React from 'react'
import { Product2 } from '../Home';
import { useParams } from 'react-router-dom';

export default function ProductDetail2() {
    let { Name } = useParams();
    const foun = Product2.find(element => element.Name == Name);
    return (
        <>

            <div className="card" style={{ width: '30rem', margin: 'auto' }}>
                <img src={foun.image} className="card-img-top" alt="Card Image" />
                <div className="card-body">
                    <p className="card-text">
                        <h2> {foun.Name}</h2>
                        <h6>{foun.PrNumber}</h6>
                    </p>
                </div>
            </div>
        </>
    )
}
