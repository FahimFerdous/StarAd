import React, { useEffect } from "react";
import "./pages.css";

const Management = () => {

    useEffect(() => {
        document.title = "Management Team | Star Adhesives"
    }, [])
    return (
        <div>
            <div className="aboutUs">
                <div className="management">
                    <img src="assets/images/Management.jpg" />
                    <div className="titleText">
                        <h2>Management Team</h2>
                    </div>
                </div>
            </div>

            <div className="DirectorPanel">
                <div className="container">
                    <h3 style={{ paddingTop: '50px' }}>LEADERSHIP TEAM</h3>
                    <div className="row">
                        <div class="infoContainer col-xl-4 pl-35 pr-54 lg-pr-15 lg-pl-15">
                            <img src="assets/images/image67.png" />
                            <h4>Md. Zulfikar Ali</h4>
                            <h6>Chief Financial Officer</h6>
                        </div>
                        <div class="infoContainer col-xl-4 pl-35 pr-54 lg-pr-15 lg-pl-15">
                            <img src="assets/images/M2.png" />
                            <h4>Aslam Mia</h4>
                            <h6>Company Secretary</h6>
                        </div>

                        <div class="infoContainer col-xl-4 pl-35 pr-54 lg-pr-15 lg-pl-15">
                            <img src="assets/images/M3.png" />
                            <h4>Mostafa Kamal Ahmed, FCA</h4>
                            <h6>Group CFO</h6>
                        </div>
                        <div class="infoContainer col-xl-4 pl-35 pr-54 lg-pr-15 lg-pl-15">
                            <img src="assets/images/Mdmiran.jpeg" />
                            <h4>Md. Miran Khan</h4>
                            <h6>Head of Business</h6>
                        </div>
                        <div class="infoContainer col-xl-4 pl-35 pr-54 lg-pr-15 lg-pl-15">
                            <img src="assets/images/M5.png" />
                            <h4>Md. Shakir Mahmud</h4>
                            <h6>Head of Production</h6>
                        </div>

                        <div
                            class="infoContainer noIMG col-xl-4 pl-35 pr-54 lg-pr-15 lg-pl-15"
                        >

                            <h4>Shibbir Hossain</h4>
                            <h6>Head of Business Development</h6>
                        </div>
                        <div
                            class="infoContainer col-xl-4 pl-35 pr-54 lg-pr-15 lg-pl-15"
                        >
                            <img src="assets/images/legalAvd.jpeg" />
                            <h4>Md. Niamul Kabir</h4>
                            <h6>Legal Advisor</h6>
                        </div>
                        <div
                            class="infoContainer col-xl-4 pl-35 pr-54 lg-pr-15 lg-pl-15"
                        >
                            <img src="assets/images/CheifIT.png" />
                            <h4>Zahirul Islam</h4>
                            <h6>Chief Information Officer, IT</h6>
                        </div>
                        <div
                            class="infoContainer col-xl-4 pl-35 pr-54 lg-pr-15 lg-pl-15"
                        >
                            <img src="assets/images/hrHead.jpeg" />
                            <h4>Mohammad Sabbir Jahangir</h4>
                            <h6>Group Head of HR & Administration</h6>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Management;
