import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory()

    const handleReload = () => {
        history.push('/about')
    }
    /*  window.location.reload(true)
     useEffect(() => {
 
     }, []) */
    return (
        <header className="">
            <div className="container fluid">
                <nav >
                    <div className="logo">
                        <img src="assets/images/logo_star_png.png" />
                    </div>
                    <label for="btn" className="icon">
                        <span class="fa fa-bars"></span>
                    </label>
                    <input type="checkbox" id="btn" />
                    <ul className="mainNavUl">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <label for="btn-1" class="show">
                                Company +
                            </label>

                            <a href="#">Company</a>
                            <input type="checkbox" id="btn-1" />
                            <ul className="mainNavUl">
                                <li>
                                    <Link to="#" onClick={handleReload}>About Us</Link>
                                </li>
                                <li>
                                    <a href="/Chairman">Chairman's Message</a>
                                </li>
                                <li>
                                    <a href="/MD">Managing Director's Message</a>
                                </li>


                                <li>
                                    <a href="/underConstruction">Vision & Mission</a>
                                </li>
                                <li>
                                    <a href="/Bod">Board of Directors</a>
                                </li>
                                <li>
                                    <a href="/management">Management Team</a>
                                </li>
                                <li>
                                    <a href="/underConstruction">Corporate Social Responsibilities</a>
                                </li>


                            </ul>
                        </li>
                        <li>
                            <label for="btn-2" class="show">
                                Investors +
                            </label>

                            <a href="#">Investors</a>
                            <input type="checkbox" id="btn-2" />
                            <ul>
                                <li>
                                    <a href="/underConstruction">Financials</a>
                                </li>


                                <li>
                                    <a href="/underConstruction">Corporate Corner</a>
                                </li>

                                {/* <li>
                                    <a href="#">Listing Information </a>
                                </li> */}
                                <li>
                                    <label for="btn-3" class="show investor">
                                        Investor Center +
                                    </label>

                                    <a href="#">Investor Center</a>
                                    <input type="checkbox" id="btn-3" />
                                    <ul>
                                        <li>
                                            <a
                                                href="assets/1. SAL Signed Draft prospectues of SAL 27.09.2021.pdf"
                                                download="Star-Adhesive-Prospectus"
                                            >
                                                Draft Prospectus
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a
                                                href="#"
                                            >
                                                Final Prospectus
                                            </a>
                                        </li> */}
                                    </ul>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <label for="btn-9" class="show">
                                Products +
                            </label>

                            <a href="#">Products</a>
                            <input type="checkbox" id="btn-9" />
                            <ul>
                                <li>
                                    <label for="btn-4" class="show">
                                        STAR BOND +
                                    </label>

                                    <a href="">STAR BOND</a>
                                    <input type="checkbox" id="btn-4" />
                                    <ul>
                                        <li>
                                            <a href="/underConstruction">Star Bond Synthetic Resin Adhesive</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Star Bond Synthetic Rubber Adhesive</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Fix Gel Tube</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Distemper Adhesive</a>
                                        </li>
                                        {/* <li>
                                            <Link to="/underConstruction">Super Glue</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction">Pure Adhesives</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction">Synthetic Sprayable Adhesive</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction">Brake Oil</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction">Spray Paint</Link>
                                        </li>

                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Silicone</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction">Wood Preservative</Link>
                                        </li> */}
                                        <li>
                                            <a href="/underConstruction">uPVC Solvent Cement</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Fabric Glue</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Hot Melt Glue</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="btn-5" class="show">
                                        STARLAQ +
                                    </label>

                                    <a href="">STARLAQ</a>
                                    <input type="checkbox" id="btn-5" />
                                    <ul>
                                        <li>
                                            <a href="/underConstruction">STARLAQ PU Sealer</a>
                                        </li>

                                        <li>
                                            <a href="/underConstruction">STARLAQ PU Top Coat</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">STARLAQ Wood Putty</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">STARLAQ Wood Filler</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">STARLAQ Stain</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="btn-6" class="show">
                                        GUMKING +
                                    </label>

                                    <a href="">GUMKING</a>
                                    <input type="checkbox" id="btn-6" />
                                    <ul>
                                        <li>
                                            <a href="/underConstruction">Gumking Synthetic Resin Adhesive</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Gumking Synthetic Rubber Adhesive</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Grease</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Spray Paint</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="btn-7" class="show">
                                        STAR KING +
                                    </label>

                                    <a href="">STAR KING</a>
                                    <input type="checkbox" id="btn-7" />
                                    <ul>
                                        <li>
                                            <a href="/underConstruction">Tiles Cleaner</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Floor Cleaner</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Glass Cleaner</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="btn-8" class="show">
                                        CYCLON +
                                    </label>

                                    <a href="">CYCLON</a>
                                    <input type="checkbox" id="btn-8" />
                                    <ul>
                                        <li>
                                            <a href="/underConstruction">Lubricant</a>
                                        </li>
                                        <li>
                                            <a href="/underConstruction">Grease</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <label for="btn-11" class="show">
                                Media +
                            </label>
                            <a href="#">Media</a>
                            <input type="checkbox" id="btn-11" />
                            <ul>
                                <li>
                                    <a href="/underConstruction">News</a>
                                </li>
                                <li>
                                    <a href="/underConstruction">Event</a>
                                </li>
                                <li>
                                    <a href="/underConstruction">Gallery</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/underConstruction">Career</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
