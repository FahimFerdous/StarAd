import React, { useEffect } from "react";
import BodCard from "../components/BodCard";
import "./pages.css";

const Bod = () => {
    useEffect(() => {
        document.title = "Board of Directors | Star Adhesives";
    }, []);
    return (
        <>
            <div className="aboutUs">
                <div class="bod ">
                    <img src="assets/images/BOD.jpg" />
                    <div className="titleText">
                        <h2>Board of Directors</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <BodCard
                            src="assets/images/Chairman.jpg"
                            name="Ms. Tabassum Kaiser"
                            designation="Chairman"
                            info="Ms. Tabassum Kaiser is an entrepreneur, business
                                leader, Director of Partex Star Group and the Chairman of
                                Partex Agro Ltd. With her deep understanding of business and
                                her lifelong mission to empower women, focused on
                                developing entrepreneurial talent, and organizing financial
                                and marketing resources to enable women to flourish. As a Member of the Board of Directors of the City Bank Ltd, Ms. Kaiser introduced City Alo to provide exclusive banking facilities for women entrepreneurs. City Alo is the dedicated women banking division of City Bank. Aiming to create one of its kind banking service with a complete banking experience specially designed for women customers. Her dynamic advocacy and policies for women entrepreneurs that includes financial assistance and support to expand business or better manage of personal necessities with a reimagined banking experience and help women to get bank loans."
                        />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <BodCard
                            src="assets/images/MD.jpg"
                            name="Aziz Al Kaiser"
                            designation="Managing Director"
                            info="
                                The Managing Director, Aziz Al Kaiser is a successful
                                industrialist with an appreciable acumen and a vision of
                                great proportion. A caring parentage and an enterprising
                                family upbringing helped him aquire his leadership skills and
                                qualities from childhood. Beyond business colaborations, he takes profound
                                interest in art, culture and sports. Having completed graduation from UK in Business Management, Kaiser joined his family business. Within a brief span of time, he helped lead the Group to a major spell of diversity that contributed to the Group’s surge forward with strong corporate governance. He also contributed towards the implementation of Group’s major investment from grassroots till completion of the projects and made Partex as a household name in the country. Currently Mr. Kaiser is leading 21 different companies and added more value to the group’s surge with more corporate stakes in banking, insurance, shipping and capital market. 
                                "
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <BodCard
                            src="assets/images/Picture.jpg"
                            name="A.B.M. Sumon Shahed Patowary "
                            designation="Nominee Director"
                            info="A.B.M. Sumon Shahed Patowary Nominee Director of Star Particle Board Mills Ltd. has worked in different national and multi-national organizations in senior position/leadership team. He has been working in Business Operation, Marketing and Business Development & Factory Operation arena for more than 19 Years. He has a very good and long experience in FMCG Industries. He has been engaging in different social activities in different organizations. He has attended lots of local and International Training, Workshops and Seminars on advance Learning, Statutory Development, skill enhancement, process up gradation, Technical Knowledge, Leadership and Change Management etc. Academically he has MBA(Major in Marketing) under East West University and Master/Bachelor of Business Studies in Marketing under University of Dhaka."
                        />
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <BodCard
                            src="assets/images/Nominee-1.png"
                            name="A.K.M. Ahasanul Haque "
                            designation="Nominee Director"
                            info="Mr. A.K.M. Ahasanul Haque is Chief Operating Officer (COO) of Partex Cables Limited. He has been heading Partex Cables Limited since 2014.
                        Mr. Haque has over 26 years of progressive leadership experience in Electrical Cable, Automotive Battery and Plastic Industries. Prior to joining Partex Cables Limited, he was working as Executive Director in BBS Cables Limited. He also worked for other reputed local conglomerates – Beximco, Paradise, Navana, Pran-RFL Group. 
                        Mr. Ahasanul Haque Haque brings with him a wealth of leadership experience, especially in the areas of marketing, sales, project management, supply chain and production. He specializes in orchestrating large projects, start-ups, turnarounds and growth ventures. He is driven to provide strategic directions and improve the bottom line, while ensuring staff compliance to business policies and procedures."
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <BodCard
                            src="assets/images/Nominee-2.png"
                            name="Dr. Md. Nizamul Hoque Bhuiyan"
                            designation="Independent Director"
                            info="Dr. Md. Nizamul Hoque Bhuiyan is an Independent Director of the Company. He is a prominent academician, leader and Nutrition Science expert of Bangladesh. Dr. Bhuiyan is a professor in Institute of Nutrition and Food Science in the University of Dhaka. 
                        Apart from his teaching and research activities, Prof. Bhuiyan also successfully served in many administrative positions. He has enriched his experience attending different workshops and seminars arranges by national and International organizations at home and abroad. He is widely traveled person and led a number of Team/Group. Dr. Bhuiyan is an internationally recognized person in the Nutrition and Food Science sector having more than 29 years of experiences. "
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bod;
