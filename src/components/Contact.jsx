import React from 'react';
import { GrMapLocation } from "react-icons/gr";

export default function Contact() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 parent"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoL4HLKXkGH-7qM8A9OK7PkYugZluILc9Fg&usqp=CAU" alt="" width="100%" height="400px" />
                        <div className="col-lg-6 child">Contact</div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6 parents">
                            <img src="data:image/jpeg;base64,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" alt="" />
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

                                <button type="button" class="btn btn-secondary btn-lg my-5">Large button</button>
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
