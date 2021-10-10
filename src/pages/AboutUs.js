import React, { useEffect, useState } from 'react'
import "./pages.css"

const AboutUs = () => {


    useEffect(() => {

        document.title = "About Us | Star Adhesives"


    }, [])
    return (
        <>
            <div className="aboutUs">
                <div class="BannerImg">
                    <img src="assets/images/About.png" />
                    <div className="titleText">
                        <h2>About Us</h2>
                    </div>

                </div>
                <div className="container fluid">
                    <div className="row">

                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                            <div className="secTitle">
                                <h4>Our Company</h4>
                                <hr />
                            </div>
                            <p> Star Adhesives Ltd. Is most modern Adhesives Manufacturer in
                                Bangladesh. Star Adhesives Ltd. is intending to explore its
                                market not only in Bangladesh but also throughout the world.
                                As there are versatile opportunities to export adhesive to the
                                seven sisters of Indian Territory. Meeting up the domestic
                                demand is one of the main missions of the company, so as
                                Bangladesh can become self-sufficient in the manufacturing of
                                Adhesives. The company is continuously increasing market to
                                achieve revenue remarkable growth above the industrial average
                                to become one of the top 3 adhesives company in Bangladesh.
                                Such capital elevation might accelerate the company’s
                                operation largely in future.</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <img
                                src="https://media.istockphoto.com/vectors/solutions-vector-id854342964?k=20&m=854342964&s=612x612&w=0&h=yqWhpjZO6QWZxGboI6ZnZbM1O0OcdA_7HcJId_OK3Aw="
                                alt=""
                            />
                        </div>
                    </div>
                </div>

            </div>

            <hr className="hr" />
            <div className="aboutUs2">
                <div className="container fluid">
                    <div className="row">

                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <img
                                src="https://hingemarketing.com/wp-content/uploads/2017/08/B2B-Market-Research.png"
                                alt=""
                            />
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                            <div className="secTitle">
                                <h4>Market Research</h4>
                                <hr />
                            </div>
                            <p>  The leader of these Industries are Pidilite Industries Ltd.,
                                Star Adhesives Ltd., RFL, Berger Paint Industries Ltd., Fast
                                Group, Bengal Group.The most common name of the product of
                                these industries are FEVICOL, Mr. FIXIT, FEVIKWIK and STAR
                                BOND, GUM KING.</p>
                        </div>

                    </div>
                </div>

            </div>
            <hr className="hr" />
            <div className="aboutUs3">
                <div className="container fluid">
                    <div className="row">

                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                            <div className="secTitle">
                                <h4>Company Perspective</h4>
                                <hr />
                            </div>
                            <p>  Adhesives is a unique commodity that links grassroots
                                levels with high societies and traditional practices with
                                emerging technologies. In Bangladesh, Adhesives are using
                                as backward linkage materials for Board, Door, Leather,
                                Footwear, Plastic, Household and Paint Industries.
                                Adhesives is one of the most prospective industries in
                                Bangladesh. It has enough scope for both vertical and
                                horizontal expansion in terms of economic return and
                                social benefits. Adhesives is small capital-intensive with
                                minimum labor costs in the country. This sector occupies
                                an important position in relation to the manufacturing
                                sector in terms of gross output, value addition,
                                employment generation, poverty alleviation, income
                                generation and a socio-economic benefactor for the
                                country. However, till now Adhesives industry occupies
                                only a modest position in Bangladesh economy way below its
                                true potential. The average growth of the Adhesive
                                Industries in Bangladesh is 30%. The most common
                                manufacturing items are Rubber Adhesive, Resin Adhesive,
                                PUR Adhesives, Distemper Adhesive, Solvent Cement, Hot
                                Melt Glue, Super Glue, Silicone, Wood Preservative, NC
                                Thinner, Spray Paint.</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <img
                                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXBhbnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AboutUs
