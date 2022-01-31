import React, { useEffect, useState } from "react";
import "./home.css";

import { firebase } from "../firebase"
import { Link, useHistory } from "react-router-dom";

const Header = () => {
    const [isMobileOpen, setisMobileOpen] = useState(false)

    const handleReload = () => {
        setisMobileOpen(true)
    }

    const [url, setUrl] = useState()
    useEffect(() => {
        firebase.database().ref("StarAdhesive/Prospectus/").on("value", (snapshot) => {
            setUrl(snapshot.val());
        });
    }, [])


    return (
        <header className="">
            <div className="container fluid">
                <nav >
                    <div className="logo">
                        <img src="assets/images/logo_star_png.png" />
                    </div>
                    <label for="btn" className="icon" onClick={() => { setisMobileOpen(false) }}>
                        <span class="fa fa-bars"></span>
                    </label>
                    <input type="checkbox" id="btn" />
                    <ul className={isMobileOpen ? "hideMenu" : "showMenu"}>
                        <li>
                            <Link to="/" onClick={handleReload}>Home</Link>
                        </li>
                        <li>
                            <label for="btn-1" class="show">
                                Company +
                            </label>

                            <Link to="#">Company</Link>
                            <input type="checkbox" id="btn-1" />
                            <ul className={isMobileOpen ? "hideMenu" : "showMenu"}>
                                <li>
                                    <Link to="/about" onClick={handleReload}
                                    >About Us</Link>
                                </li>
                                <li>
                                    <Link to="/Chairman" onClick={handleReload}>Chairman's Message</Link>
                                </li>
                                <li>
                                    <Link to="/MD" onClick={handleReload}>Managing Director's Message</Link>
                                </li>


                                <li>
                                    <Link to="/underConstruction" onClick={handleReload}>Vision & Mission</Link>
                                </li>
                                <li>
                                    <Link to="/Bod" onClick={handleReload}>Board of Directors</Link>
                                </li>
                                <li>
                                    <Link to="/management" onClick={handleReload}>Management Team</Link>
                                </li>
                                <li>
                                    <Link to="/underConstruction" onClick={handleReload}>Corporate Social Responsibilities</Link>
                                </li>


                            </ul>
                        </li>
                        <li>
                            <label for="btn-2" class="show">
                                Investors +
                            </label>

                            <Link to="#">Investors</Link>
                            <input type="checkbox" id="btn-2" />
                            <ul className={isMobileOpen ? "hideMenu" : "showMenu"}>
                                <li>
                                    <Link to="/underConstruction" onClick={handleReload}>Financials</Link>
                                </li>


                                <li>
                                    <Link to="/underConstruction" onClick={handleReload}>Corporate Corner</Link>
                                </li>

                                {/* <li>
                                    <Link to="#">Listing Information </Link>
                                </li> */}
                                <li>
                                    <label for="btn-3" class="show investor">
                                        Investor Center +
                                    </label>

                                    <Link to="#">Investor Center</Link>
                                    <input type="checkbox" id="btn-3" />
                                    <ul className={isMobileOpen ? "hideMenu" : ""}>
                                        <li>
                                            <a
                                                href={url ? url.DownloadUrl : "#"}
                                                target="_blank"
                                                download
                                            >
                                                Draft Prospectus
                                            </a>
                                        </li>
                                        {/* <li>
                                            <Link
                                                to="#"
                                            >
                                                Final Prospectus
                                            </Link>
                                        </li> */}
                                    </ul>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <label for="btn-9" class="show">
                                Products +
                            </label>

                            <Link to="#">Products</Link>
                            <input type="checkbox" id="btn-9" />
                            <ul className={isMobileOpen ? "hideMenu" : "showMenu"}>
                                <li>
                                    <label for="btn-4" class="show">
                                        STAR BOND +
                                    </label>

                                    <Link to="">STAR BOND</Link>
                                    <input type="checkbox" id="btn-4" />
                                    <ul className={isMobileOpen ? "hideMenu" : ""}>
                                        <li>
                                            <a href="/SyntheticResignAdhesive" onClick={handleReload}>Star Bond Synthetic Resin Adhesive</a>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Star Bond Synthetic Rubber Adhesive</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Fix Gel Tube</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Distemper Adhesive</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Super Glue</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Pure Adhesives</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Synthetic Sprayable Adhesive</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Brake Oil</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Spray Paint</Link>
                                        </li>

                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Silicone</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Wood Preservative</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>uPVC Solvent Cement</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Fabric Glue</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Hot Melt Glue</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="btn-5" class="show">
                                        STARLAQ +
                                    </label>

                                    <Link to="">STARLAQ</Link>
                                    <input type="checkbox" id="btn-5" />
                                    <ul className={isMobileOpen ? "hideMenu" : "showMenu"}>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>STARLAQ PU Sealer</Link>
                                        </li>

                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>STARLAQ PU Top Coat</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>STARLAQ Wood Putty</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>STARLAQ Wood Filler</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>STARLAQ Stain</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="btn-6" class="show">
                                        GUMKING +
                                    </label>

                                    <Link to="">GUMKING</Link>
                                    <input type="checkbox" id="btn-6" />
                                    <ul className={isMobileOpen ? "hideMenu" : "showMenu"}>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Gumking Synthetic Resin Adhesive</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Gumking Synthetic Rubber Adhesive</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Grease</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Spray Paint</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="btn-7" class="show">
                                        STAR KING +
                                    </label>

                                    <Link to="">STAR KING</Link>
                                    <input type="checkbox" id="btn-7" />
                                    <ul className={isMobileOpen ? "hideMenu" : "showMenu"}>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Tiles Cleaner</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Floor Cleaner</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Glass Cleaner</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="btn-8" class="show">
                                        CYCLON +
                                    </label>

                                    <Link to="">CYCLON</Link>
                                    <input type="checkbox" id="btn-8" />
                                    <ul className={isMobileOpen ? "hideMenu" : "showMenu"}>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Lubricant</Link>
                                        </li>
                                        <li>
                                            <Link to="/underConstruction" onClick={handleReload}>Grease</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <label for="btn-11" class="show">
                                Media +
                            </label>
                            <Link to="#">Media</Link>
                            <input type="checkbox" id="btn-11" />
                            <ul className={isMobileOpen ? "hideMenu" : "showMenu"}>
                                <li>
                                    <Link to="/underConstruction" onClick={handleReload}>News</Link>
                                </li>
                                <li>
                                    <Link to="/underConstruction" onClick={handleReload}>Event</Link>
                                </li>
                                <li>
                                    <Link to="/underConstruction" onClick={handleReload}>Gallery</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/underConstruction" onClick={handleReload} >Career</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={handleReload} >Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
