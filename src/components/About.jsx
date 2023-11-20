import React,{useEffect} from 'react'


export default function About() {
  useEffect(()=>{
    document.title="About"
},[])
  return (
    <>  
      <div className="container-fluid bgg">
        <div className="row">
          <div className="col-lg-12"></div>
            <div className="col-lg-12 parent"><img src="https://media.istockphoto.com/id/470883252/photo/shes-always-one-step-ahead-of-the-latest-fashion-trends.webp?b=1&s=170667a&w=0&k=20&c=_MQKAIfAdW-Zc6W6d-u6_PuKX6mxEdGXxXzd03Wl2Ck=" alt="" width="100%"  height="400px"/>
                <div className="col-lg-6 child">About Us</div>
            </div>
          </div>
      <div className="container">
        <div className="row bx my-5">
            <div className="col-lg-6">
                    <h3>A Better Platform To Shopping Online !!</h3>
                    <p>Vel aliquip felis duis quidem consectetur libero placeat tellus scelerisque litora culpa fusce feugiat asperiores cupidatat dapibus primis pede aliquam. Augue laoreet nibh tempor. Venenatis. Nam est justo incidunt hendrerit dolore nostra.</p>
                    <p>Eius ut reprehenderit aut facilisis? Natus quaerat eget, sapien libero alias facilisis, habitasse culpa conubia tellus aspernatur totam, imperdiet debitis? Nec eius, impedit feugiat odio. lo</p>
            </div>

            <div className="col-lg-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvmi-SP1DJD01af3Njqv5TImYER0G_Kvezw&usqp=CAU" alt="" width="100%" />
            </div>
            
             <div className="col-lg-6 bxxx">
              <ul>
                <li><h1>  450+</h1></li>
                <li><h1 className='rr'>88+</h1></li>
                <li><h1 className='rr'>5k+</h1></li>
              </ul>
             </div>
                 
            
             


        </div>
      </div>
 

        
      </div>
    </>
  )
}
