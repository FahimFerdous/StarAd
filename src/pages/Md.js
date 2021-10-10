import React, { useEffect } from 'react'
import "./pages.css"

const Md = () => {
    useEffect(() => {
        document.title = "Managing Director | Star Adhesives"
    }, [])
    return (
        <>
            <div className="aboutUs">
                <div class="bod ">
                    <img src="assets/images/BOD.jpg" />
                    <div className="titleText">
                        <h2>Managing Director</h2>
                    </div>

                </div>


            </div>

            <div className="bodsec2">
                <div className="container fluid">
                    <div className="row">

                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                            <div className="secTitle bodText">
                                <h4>Aziz Al Kaiser</h4>
                                <p>Managing Director</p>
                                <hr />
                            </div>
                            <p>
                                <b>The Managing Director, Aziz Al Kaiser</b> is a successful
                                industrialist with an appreciable acumen and a vision of
                                great proportion. A caring parentage and an enterprising
                                family upbringing helped him hone his leadership skills and
                                qualities from childhood. Beyond business he takes profound
                                interest in art, culture and sports. Having completed
                                graduation from UK in Business Management, Kaiser joined his
                                family business. Within a brief span of time, he helped lead
                                the Group to a major spell of diversity that contributed to
                                the Group’s surge forward with strong corporate governance.
                                He also contributed towards the implementation of Group’s
                                major investment from grassroots till completion of the
                                projects and made Partex as a household name in the country.
                                Currently Mr. Kaiser is leading 21 different companies and
                                added more value to the group’s surge with more corporate
                                stakes in banking, insurance, shipping and capital market.
                            </p>

                            <p>
                                Mr. Kaiser is the Chairman of the City Bank Ltd. He has
                                contributed tremendously in transforming the management
                                structure and outlook of City Bank from traditional banking
                                system to modern day banking. Under his astute stewardship,
                                The first time of it’s kind in the country, The City Bank
                                Ltd introduced American Express Corporate Credit Card in
                                Bangladesh.
                            </p>

                            <p>
                                He is very well-known socially and holds membership of many
                                social clubs in Dhaka city. Having a passion of Sports, he
                                introduced Partex Sporting Club. He is also the president of
                                Noakhali Diabetic Association (M.A. Hashem Diabetic
                                Hospital) and President of the Governing body of M.A. Hashem
                                College. Mr. Kaiser is also the founder life member of NSU
                                Trust and also the Member of the Board of trustees of the
                                North South University.
                            </p>
                        </div>
                        <div className="bodImg col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <img src="assets/images/MD.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Md
