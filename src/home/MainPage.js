import React from "react";

import { Carousel, Button } from "react-bootstrap";

import NewsSlider from "./NewsSlider";

import ProductSlider from "./ProductSlider";

const MainPage = () => {
    return (
        <>
            <div className="main">
                <Carousel>

                    <Carousel.Item interval={7000}>
                        <img
                            className="sliderIMG"
                            src="assets/images/slider/Press-ad-for-Chairman-Sir-6.5-x-6'.jpg"
                            alt="first slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="sliderIMG"
                            src="assets/images/slider/b2.jpg"
                            alt="first slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="sliderIMG"
                            src="assets/images/slider/b4.jpg"
                            alt="first slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="sliderIMG"
                            src="assets/images/slider/b5.jpg"
                            alt="first slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="sliderIMG"
                            src="assets/images/slider/b6.jpg"
                            alt="first slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container fluid">
                <div className="ProductTitle row">
                    <h2>OUR PRODUCTS</h2>
                    <hr className="hr" />
                </div>
                <div className="row">
                    <ProductSlider />
                </div>
            </div>

            <div className="AboutSetcion">
                <div className="container fluid">
                    <div className="ProductTitle row">
                        <h2>ABOUT US</h2>
                        <hr className="hr" />
                    </div>
                    <div className="row y-middle">
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="contentImg">
                                <img src="assets/images/599a2733.jpg" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="contentText">
                                <p>
                                    The Managing Director, Aziz Al Kaiser is a successful
                                    industrialist with an appreciable acumen and a vision of great
                                    proportion. A caring parentage and an enterprising family
                                    upbringing helped him hone his leadership skills and qualities
                                    from childhood. Beyond business he takes profound interest in
                                    art, culture and sports. Having completed graduation from UK
                                    in Business Management, Kaiser joined his family business.
                                    Within a brief span of time, he helped lead the Group to a
                                    major spell of diversity that contributed to the Group’s surge
                                    forward with strong corporate governance. He also contributed
                                    towards the implementation of Group’s major investment from
                                    grassroots till completion of the projects and made Partex as
                                    a household name in the country. Currently Mr. Kaiser is
                                    leading 21 different companies and added more value to the
                                    group’s surge with more corporate stakes in banking,
                                    insurance, shipping and capital market.
                                </p>
                                <hr className="hr" />
                            </div>
                            <div className="readMoreContainer">
                                <div className="MDName">
                                    <h4>Mr. Aziz Al Kaiser</h4>
                                    <p>Managing Director</p>
                                </div>
                                <div className="MDButton">
                                    <Button className="productBtn mainBtn" variant="warning">Read More</Button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="newsSection">
                <div className="container fluid">
                    <div className="ProductTitle row">
                        <h2 style={{ paddingTop: '0px' }}>News and Updates</h2>
                        <hr className="hr" />
                    </div>
                    <div>
                        <h4></h4>
                    </div>
                    <div className="row">
                        <NewsSlider />

                    </div>
                </div>
            </div>

        </>
    );
};

export default MainPage;
