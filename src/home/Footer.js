import React from "react";
import { Button } from "react-bootstrap";
import "./home.css";

const Footer = () => {
    return (
        <div className="footerSection">

            <div className="floating_icons">
                <ul>
                    <li className="facebook">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="twitter">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="youtube">
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </li>
                    <li className="linkedin">
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>
            </div>


            <div className="container">
                <div className="row newsletter">
                    <div className="col-xl-6 col-lg-6 col-sm-6 col-12">
                        <h3>Enter Email to Subscribe</h3>

                    </div>
                    <div className="newsletter col-xl-6 col-lg-6 col-sm-6 col-12">

                        <form className="newsletterForm">

                            <input
                                type="email"
                                name="email"
                                placeholder="Your email address"

                            />
                            <button type="submit"><i class="fa fa-paper-plane"></i></button>


                        </form>


                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                        <div className="logoContainer">
                            <img src="assets/images/star adhesives logo in white png.png" />
                            <h5>
                                Star Adhesive, a sister concern of Partex star group, is one of the
                                largest Bangladeshi diversified private sector enterprises.   The
                                Group, started its journey in 1962, with
                                the torchbearer, Mr. M.A. Hashem, the founder Chairman of the
                                Partex star Group, an eminent industrialist of the country.
                                The factory of Star Adhesives Ltd. is located at 125, Haripur Madanpur Bandar, Narayangonj, Bangladesh
                            </h5>
                            <Button className="productBtn mainBtn" variant="warning">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                        <div className="footerAddress">
                            <h3>Corporate Office</h3>
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
                                <li>
                                    <i class="fas fa-clock"></i>
                                    <p>9:00 AM - 6:00 PM</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                        <div className="socialMediaSection">
                            <h3>Social Media</h3>
                            <div className="footer-post">
                                <ul>
                                    <li className="facebook">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li className="twitter">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="youtube">
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </li>
                                    <li className="linkedin">
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="row devInfo">
                    <p>&copy; 2021 BD SOFT IT. All Right Reserved</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;
