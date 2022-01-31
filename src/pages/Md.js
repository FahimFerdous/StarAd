import React, { useEffect } from "react";
import "./pages.css";

const Md = () => {
    useEffect(() => {
        document.title = "Managing Director | Star Adhesives";
    }, []);
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
                                In the current process of widespread globalization, we Star Bond
                                understand that meeting our customer's requirement is essential
                                to the success of our organization. We can say that the years we
                                experienced in the past are significant years and it is clearly
                                seen that we have intensively delivery our best performance to
                                focus on customer satisfaction.
                            </p>
                            <p>
                                On behalf of the Board of Directors, I would like to thank our
                                valuable customers, Shareholders, Reliable dealers and
                                world-class suppliers. Besides, I would like to make a special
                                mention of our staffs’ enthusiastic contribution in establishing
                                the organization. The one thing I would like to present is that
                                our leadership is a result of our employees. They have made SAL
                                as one of the import substitute local brand.{" "}
                            </p>

                            <p>
                                We are now in an ever-changing market environment. In such
                                situation, we firmly believe that “trust” is the key element in
                                persuading customers to choose our quality products for
                                sustainability. We accept that “trust” can create a “Win-Win
                                Situation” for a long deeper relationship.
                            </p>

                            <p>
                                Our distributed products with latest technologies and excellent
                                service are diverse. It is easy to find them in every corner of
                                industrial activity and community living. We will continue our
                                endless effort to serve our valuable customers.
                            </p>
                            <p>
                                In addition, we SAL will intensively endeavor in environmental
                                awareness for the purpose of preventing from climate changes and
                                resources depletion. We are committed to preservation of the
                                environment we live in. So in summary, I would like to thank
                                again all those who have contributed relentless hard work and
                                effort of the past to bring up here today and will continue to
                                grow for years to come.
                            </p>
                        </div>
                        <div className="bodImg col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <img src="assets/images/MD.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Md;
