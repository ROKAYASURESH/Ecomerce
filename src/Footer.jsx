import React from 'react';
import { BsYoutube,BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin,AiOutlineMenu,AiOutlineReload,AiOutlineHeart, AiTwotoneAccountBook ,AiOutlineShoppingCart} from "react-icons/ai";

export default function Footer() {
  return (
    <>
   <div className="container-fluid ttttnpm s">
    <div className="container">
        <div className="row py-4">
            <div className="col-lg-3">
                <img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/logo-beauty-shop.png" alt="" />
                <br />
                <p>
                    <br />
                Sollicitudin odio, penatibus congue, odio dignissim eaque quaerat exercitation voluptates ut itaque! Eros urna fuga, nascetur ipsum dot.
                </p>
            </div>

            <div className="col-lg-3">
                <h5>Shopping With Us</h5>
              <p>Making Payments</p> <hr /> 
                <p>Buyers Protection</p><hr />
                <p>Customer Services</p><hr />

            </div>
            <div className="col-lg-3">
                <h5>Contact Details</h5>
                <p> Feel free to contact & reach us !</p>
                <p>Address : 22th Street, Colorado</p>
           
                <p>Email : info@domain.com</p>
                <p>Phone : +988-256-266-88</p>
            </div>

            <div className="col-lg-3">
            <h5>Useful Links</h5>
            <p>Faq</p>
            <hr />
            <p>Privacy Policy</p>
            <hr />
            <p>Terms & Condition</p>
            <hr />
            </div>  
        </div>

        <div className="col-lg-12 text-center">
            <div className="boxx" >
            <ul>
                    <li> <BsFacebook/></li>
                    <li><AiFillInstagram/></li>
                    <li><AiFillLinkedin/></li>
                    <li><BsYoutube/></li>
                    <li><AiOutlineMenu/></li>
                </ul>
            </div>
            <hr />
        </div>
        <div className="rol-lg-12">
            <div className="row">
                <div className="col-lg-4">
                    <ul>
                        <li>Faq</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                          
                    </ul>
                </div>
                <div className="col-lg-3">
                    <img src="https://demo.bosathemes.com/bosa/beauty-shop/wp-content/uploads/sites/68/2022/11/bosa-shop-img34.png" alt="" width="100%" height="30px"/>
                </div>
                <div className="col-lg-5"><p>Copyright © 2023 Bosa Beauty Shop. Powered by WordPress</p></div>
            </div>
        </div>
    </div>
   </div>
    </>
  )
}
