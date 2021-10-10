import React, { useEffect } from 'react'
import { Button } from "react-bootstrap";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us | Star Adhesives"
    }, [])
    return (
        <>
            <div className="aboutUs">
                <div class="contact">
                    <img src="assets/images/Contact.jpg" />
                    <div className="titleText">
                        <h2>Contact Us</h2>
                    </div>

                </div>
            </div>
            <div className="ContactSection">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="addressContainer">
                                <h3>Reach Us</h3>
                                <h4>Corporate Office</h4>
                                <hr />
                                <ul className="">
                                    <li>
                                        <i class="fas fa-home"></i>
                                        <p>
                                            Shanta Western Tower, Level – 13 Bir Uttam Mir Shawkat Road,
                                            186 Tejgaon I/A, Dhaka – 1208, Bangladesh
                                        </p>
                                    </li>
                                    <li>
                                        <i class="fas fa-tty"></i>
                                        <p>+88.02. 8878800-11</p>

                                    </li>
                                    <li>
                                        <i class="fas fa-envelope"></i>
                                        <p>info@staradhesives.com.bd</p>
                                    </li>

                                </ul>

                                <hr className="hr" />
                                <h4>Sales Office</h4>
                                <hr />
                                <ul className="">
                                    <li>
                                        <i class="fas fa-home"></i>
                                        <p>
                                            68, Tejgaon, I/A, Dhaka – 1208, Bangladesh
                                        </p>
                                    </li>
                                    <li>
                                        <i class="fas fa-tty"></i>
                                        <p>+88 02 812 6413,812 6414, 812 6416, 812 6125</p>

                                    </li>
                                    <li>
                                        <i class="fas fa-envelope"></i>
                                        <p>info@staradhesives.com.bd</p>
                                    </li>

                                </ul>

                                <hr className="hr" />
                                <h4>Factory Office</h4>
                                <hr />
                                <ul className="">
                                    <li>
                                        <i class="fas fa-home"></i>
                                        <p>
                                            125, Haripur, Madanpur, Bandar, Narayangonj, Bangladesh
                                        </p>
                                    </li>
                                    <li>
                                        <i class="fas fa-tty"></i>
                                        <p>+88 02 764 7706-7, 764 8006-8, 764 7724</p>

                                    </li>
                                    <li>
                                        <i class="fas fa-envelope"></i>
                                        <p>info@staradhesives.com.bd</p>
                                    </li>

                                </ul>



                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                            <div className="FormContainer">
                                <h3>Write to Us</h3>
                                <hr />

                                <form className="contactForm">
                                    <div className="formControl">
                                        <label htmlFor="name">Your Name*</label>
                                        <input type="text" name="name" placeholder="Enter your Name" />
                                    </div>
                                    <div className="formControl">
                                        <label htmlFor="email">Your Email*</label>
                                        <input type="text" name="name" placeholder="Enter your Email" />
                                    </div>
                                    <div className="formControl">
                                        <label htmlFor="name">Phone Number*</label>
                                        <input type="text" name="name" placeholder="Enter your Phone Number" />
                                    </div>
                                    <div className="formControl">
                                        <label htmlFor="name">Your Message*</label>
                                        <textarea name="name" placeholder="Enter your Message" rows="5" ></textarea>
                                    </div>
                                    <div className="formControl">
                                        <Button className="mainBtn" variant="warning">Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
