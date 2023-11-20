import { useEffect } from "react";
import React from 'react';
import { GrMapLocation } from "react-icons/gr";


export default function Contact() {
    useEffect(()=>{
        document.title="Contact"
},[])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 parent"><img src="https://media.istockphoto.com/id/1029185928/photo/social-media-concept.webp?b=1&s=170667a&w=0&k=20&c=f_MQJaTO-E5IqWxaQKrYtD61l_YPEKRqeD54qIfDM8w=" alt="" width="100%" height="400px" />
                        <div className="col-lg-6 child">Contact</div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6 parents">
                            <img src="https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.webp?b=1&s=170667a&w=0&k=20&c=udzg1fifSWZqXvkBJyEAPe2iFGiEi9NxasBCpBAdogo=" alt="" />
                            <div className="col-lg-12 childs">
                                <h3>Feel Free To Contact & Hire Us !!</h3>
                                <h6>Quas montes odit delectus primis gravida culpa nostrum! Torquent, do adipisicing soluta nobis sagittis perferendis sodales! Nostra earum? Sodales libero, quod erat orci.</h6>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h3>Get In Touch With Us!</h3>
                            <h6>Quas montes odit delectus primis gravida culpa nostrum! Torquent, do adipisicing soluta nobis sagittis perferendis sodales  erat orci.</h6>
                            <div>
                                <label htmlFor="inputPassword5 py-5 my-5" className="form-label"><h3>Your Name</h3></label>
                                <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />

                                <label htmlFor="inputPassword5 py-5 my-5" className="form-label"><h3>Your Email</h3></label>
                                <input type="url" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                                <label htmlFor="floatingTextarea2 py-5 my-5"><h5>Your message (optional)</h5></label>
                                <textarea className="form-control" rows='12' cols="1000" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />

                                <button type="button" class="btn btn-secondary btn-lg my-5">SEND</button>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-12 my-5 ">
                        <div className="row  gx-5">
                            <div className="col-lg-3 box1 tr">
                                <div className="icons"> <span><GrMapLocation /></span></div>
                                <div className="content">
                                    <h6>Our Location</h6>
                                    <ul>
                                        <li>60 east 65th Street</li>
                                        <li>New York City, USA</li>
                                        <li>NQ 110256, San Fransisco</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 box1 tr">
                                <div className="icons"> <span><GrMapLocation /></span></div>
                                <div className="content ">
                                    <h6>Our Location</h6>
                                    <ul>
                                        <li>60 east 65th Street</li>
                                        <li>New York City, USA</li>
                                        <li>NQ 110256, San Fransisco</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 box1 tr">
                                <div className="icons"> <span><GrMapLocation /></span></div>
                                <div className="content">
                                    <h6>Our Location</h6>
                                    <ul>
                                        <li>60 east 65th Street</li>
                                        <li>New York City, USA</li>
                                        <li>NQ 110256, San Fransisco</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 box1 tt  ">
                                <div className="icons"> <span><GrMapLocation /></span></div>
                                <div className="content">
                                    <h6>Our Location</h6>
                                    <ul>
                                        <li>60 east 65th Street</li>
                                        <li>New York City, USA</li>
                                        <li>NQ 110256, San Fransisco</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="col-lg-12"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14133.192382056473!2d85.34432160000001!3d27.677180149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f2804a02bf%3A0x85468199859b2d8d!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1674014003983!5m2!1sen!2snp" width={1280} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">jkk</iframe></div>
                    </div>
                </div>
            </div>

        </>
    )
}
