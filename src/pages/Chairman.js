import React, { useEffect } from 'react'
import "./pages.css"

const Chairman = () => {
    useEffect(() => {
        document.title = "Chairman | Star Adhesives"
    }, [])
    return (
        <>
            <div className="aboutUs">
                <div class="bod ">
                    <img src="assets/images/BOD.jpg" />
                    <div className="titleText">
                        <h2>Message from Chairman</h2>
                    </div>

                </div>
                <div className="container fluid">
                    <div className="row">

                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                            <div className="secTitle bodText">
                                <h4>Ms. Tabassum Kaiser</h4>
                                <p>Chairman</p>
                                <hr />
                            </div>
                            <p>Star Adhesives Ltd the import substitute of adhesives manufacturer in the country under the largest conglomerates Partex Star Group started with the legacy a New Face Forward. Star Bond has been always with you, You: Our customers, our employees, our shareholders and all our other stakeholders. At our
                                Company, we have always sought to create sustainable value for you
                                and for achieving this purpose we have sought to choose the road
                                less travelled, focusing on innovative initiatives, breakthrough products
                                and step-change solutions. This is manifest in our standing as one of
                                Bangladesh’s oldest private sector Group that has survived through
                                and thrived across various time periods and market cycles. Thus,
                                despite the year 2020 being remembered as an aberration in our
                                history, we continued with the same spirit in which the Group was
                                started, doing what we know best: Creating the foundations for
                                customer and stakeholder value for tomorrow.</p>
                            {/* <p>
                                <b>Ms. Tabassum Kaiser</b> is an entrepreneur, business
                                leader, Director of Partex Star Group and the Chairman of
                                Partex Agro Ltd. With her deep understanding of business and
                                her lifelong mission to empower women, as well focused on
                                developing entrepreneurial talent, and organizing financial
                                and marketing resources to enable women to flourish.
                            </p>

                            <p>
                                As a Member of the Board of Directors of the City Bank Ltd,
                                Ms. Kaiser introduced City Alo to provide exclusive banking
                                facilities for women entrepreneurs. City Alo is the
                                dedicated women banking division of City Bank. Aiming to
                                create one of its kind banking service with a complete
                                banking experience specially designed for women customers.
                                Her dynamic advocacy and policies for women entrepreneurs
                                that includes financial assistance and support to expand
                                business or better manage of personal necessities with a
                                reimagined banking experience and help women to get bank
                                loans. She’s also the Managing Director of Triple Apparels
                                Ltd one of the iconic lingerie factory of this kind of
                                industries in this country. Under her stewardship Triple
                                Apparels ltd. is exporting the products throughout the
                                world. Tabassum Kaiser completed her MBA from North South
                                University and also doing her Phd research under Finance &
                                Banking Department of Dhaka University. She is very
                                well-known socially and holds membership of many clubs in
                                Dhaka city i.e. Gulshan Club, Uttara Club, Banani Club etc.
                            </p>

                            <p>
                                She’s also the Managing Director of Triple Apparels Ltd one
                                of the iconic lingerie factory of this kind of industries in
                                this country. Under her stewardship Triple Apparels ltd. is
                                exporting the products throughout the world.
                            </p>

                            <p>
                                Tabassum Kaiser completed her MBA from North South
                                University and also doing her Phd research under Finance &
                                Banking Department of Dhaka University.
                            </p>

                            <p>
                                She is very well-known socially and holds membership of many
                                clubs in Dhaka city i.e. Gulshan Club, Uttara Club, Banani
                                Club etc.
                            </p> */}
                        </div>
                        <div className="bodImg col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <img
                                src="assets/images/Chairman.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chairman
