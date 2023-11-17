import React from 'react';
import { BsMinecartLoaded} from "react-icons/bs";
import {FaChartLine,FaBoxTissue,FaChartPie } from "react-icons/fa";
import { Link } from 'react-router-dom';
var tbl=[
    {
        id:1,
        img:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/serum.png',
        Name:'VITAMIN C+ SERUM'
    },
    {
        id:2,
        img:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/highlighter-1.png' ,
        Name:'FACE HIGHLIGHTER'
    },
    {
        id:2,
        img:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/facewash-1.png' ,
        Name:'CREAMY FACE WASH'
    },
    {
        id:2,
        img:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/developer-1.png' ,
        Name:'FACE MOISTURIZER'
    },
    {
        id:2,
        img: 'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/moisturiser-1.png',
        Name:'FOUNDATION'
    },
    {
        id:2,
        img: 'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/foundation-1.png',
        Name:'EYELASHES CREAM'
    },
    {
        id:2,
        img: "https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/eye-cream-1.png",
        Name:'ROSE WATER'
    },
    {
        id:2,
        img: 'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/rose-water-1.png',
        Name:'HAIR CONDITIONER'
    }
    ,{
        id:2,
        img:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/highlighter-1.png' ,
        Name:'FACE HIGHLIGHTER'
    },
]


var Product1=[
    {
        id: 1,
        Name:'Rose Water',
        imgage:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img39-150x150.jpg',
        PrdNumber:'8 Product'
    },
    {
        id: 2,
        Name:'Foundation',
        imgage:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img36-150x150.jpg',
        PrdNumber:'7 Product'
    },
    {
        id:3 ,
        Name:'Moisturizer',
        imgage:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/product-24-300x300-1-150x150.jpg',
        PrdNumber:'5 Product'
    },
    {
        id: 4,
        Name:'Nail Polish',
        imgage:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/product-25-300x300-1-150x150.jpg',
        PrdNumber:'8 Product'
    }

]
var Product2=[
  {
    id:1 ,
    Name:'Face Cream',
    image:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img40-150x150.jpg',
    PrNumber:"12 Product"
  },
  {
    id: 2,
    Name:'Highlighter',
    image:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img38-150x150.jpg',
    PrNumber:"5 Product"
  },
  {
    id: 3,
    Name:'Face Wash',
    image:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/product-14-300x300-1-150x150.jpg',
    PrNumber:"9 Product"
  },
  {
    id: 4,
    Name:'Cover Range',
    image:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/product-21-300x300-1-150x150.jpg',
    PrNumber:"2 Prodcut"
  }
]
var Product3=[
    {
      id:1 ,
      Name:'Conditioner',
      image:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img37-150x150.jpg',
      PrNumber:""
    },
    {
      id: 2,
      Name:'Conditioner',
      image:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img35-150x150.jpg',
      PrNumber:"6 Prodcut"
    },
    {
      id: 3,
      Name:'Powder',
      image:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/product-01-300x300-1-150x150.jpg',
      PrNumber:"5 Product"
    },
    {
      id: 4,
      Name:'Eye Cream',
      image:'https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/product-24-300x300-1-150x150.jpg',
      PrNumber:"13 Product"
    }
  ]

  var MoreProdcut=[
    {
        id:1,
        Image:"https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img1.png",
        Name:"Moisturiser",
        Price:"$66.00",
        ADD: <u>ADD TO CART</u>
    },
    {
        id:2,
        Image:"https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img2.png",
        Name:"Face Rose Water",
        Price:"$125.00",
        ADD: <u>ADD TO CART</u>
    },
    {
        id:3,
        Image:"https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img3.png",
        Name:"Purity Cream",
        Price:"120.00",
        ADD: <u>ADD TO CART</u>
    },
    {
        id:4,
        Image:"https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img4.png",
        Name:"Fusion Lipstick",
        Price:"$55.00",
        ADD: <u>ADD TO CART</u>
    },
    {
        id:5,
        Image:"https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img5.png",
        Name:"Face Developer",
        Price:"$09.00",
        ADD: <u>ADD TO CART</u>
    },
    {
        id:6,
        Image:"https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img6.png",
        Name:"Eye Liner",
        Price:"$25.00",
        ADD: <u>ADD TO CART</u>
    },
    {
        id:7,
        Image:"https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img7.png",
        Name:"Dior Hightlighter",
        Price:"$69.00",
        ADD: <u>ADD TO CART</u>
    },
    {
        id:8,
        Image:"https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img8.png",
        Name:"Kerastaser Moist",
        Price:"$190.00",
        ADD: <u>ADD TO CART</u>

    },
  ]


export default function Home() {
  return (
    <>
        <div className="container-fluid home">
            <div className="container">
            <div className="row">
                <div className="col-lg-3 ">
                        <ul className="list-group">
                    <li className="list-group-item active bgs" aria-current="true">Top Categories</li>
                    {tbl.map((ri)=>(
                        <li className="list-group-item">
                           <img src={ri.img} alt="" width='20px' height='15px' />
                           &nbsp;   &nbsp;  {ri.Name}
                        </li>
                    ))}
                    

                    </ul>
                </div>

                <div className="col-lg-6">
                            <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/banner11.png" className="d-block w-100" alt="..." height='420px' />
                            </div>
                            <div className="carousel-item">
                            <img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/banner22.png" className="d-block w-100" alt="..."height='420px' />
                            </div>
                            <div className="carousel-item">
                            <img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/banner22.png" className="d-block w-100" alt="..."height='420px' />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>

                <div className="col-lg-3">
                    <div className="col-lg-12 my-2">
                        <img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/product-21-300x300-1-150x150.jpg" alt=""  width="100%" height="200px"/>
                    </div>
                    <div className="col-lg-12"><img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/product-24-300x300-1-150x150.jpg" alt="" width="100%"  height="200px"/></div>
                </div>
            </div>

            <div className="col-lg-12 py-3"><img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/img031.jpg" alt="" width="100%"/></div>



            <div className="col-lg-12">
                <div className="row ">
                <div className="col-lg-4 text-center bg-light">
                    <h2 className='box'><FaChartPie/>  New Arrivals</h2>
                    <div className="row">
                        {Product1.map((rr)=>(
                            <div className="col-lg-6 bg-light">
                                <Link to={`/details/${rr.id}`}><img src={rr.imgage} alt="" style={{border:"1px solid black", margin:"4px 0"}}/></Link>

                            </div>
                        ))}
                    
                    </div>
                </div>

                <div className="col-lg-4 text-center bg-light  ">
                    <h2 className='box'><FaChartLine/>Top Ranking</h2>
                    <div className="row">
                        {Product2.map((r)=>(
                            <div className="col-lg-6">
                                 <Link to={`/detail/${r.id}`}> <img src={r.image} alt=""  style={{border:"1px solid black", margin:"4px 0"}}/></Link>
                                {/* <h5>{r.Name}</h5>
                                <p>{r.PrNumber}</p> */}
                            </div>
                        ))}
                    
                    </div>
                </div>


                <div className="col-lg-4 text-center bg-light">
                    <h2 className='box'><FaBoxTissue/>Drop Shipping</h2>
                    <div className="row">
                        {Product3.map((rr)=>(
                            <div className="col-lg-6">
                                <Link to={`/details/${rr.id}`}><img src={rr.image} alt="" style={{border:"1px solid black", margin:"4px 0"}} /></Link>
                                {/* <h5>{rr.Name}</h5>
                                <p>{rr.PrNumber}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-lg-12 container">
                <div className="row">
                    <div className="col-lg-12 text-center cont">
                    <div className="line">
                           <h1 className="circle">Our Feature Products </h1> 
                    </div>
                    <p>Get the skin you want to feel !</p>
                    </div>
                    <div className="col-lg-4  ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2spkhv59ELLBqFaVTTfb342y9Y6TbgutWHA&usqp=CAU" alt=""  width="100%"/>
                    </div>

                    <div className="col-lg-8">
                        <div className="row">
                           {MoreProdcut.map((rtr)=>(
                            <div className="col-lg-2 ms-5 my-5">
                                <img src={rtr.Image} alt="" width="100%"/>
                                <h6>{rtr.Name}</h6>
                                <h5 className='Price'>{rtr.Price}</h5>
                                <h6>{rtr.ADD}</h6>
                            </div>
                           ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        
    </>
  )
}
export {Product2, Product1}
