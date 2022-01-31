import React, { useState } from 'react'
import { Col, Container, Dropdown, Modal, Row } from 'react-bootstrap'
import ReactImageMagnify from 'react-image-magnify';
import Form from 'react-bootstrap/Form'

import "./Product.css"
import SpecificProductDetails from './SpecificProductDetails'

const images = [
    "assets/images/product/B-58.png",
    "assets/images/product/5 kg.png",
    "assets/images/product/50 G.png",
    "assets/images/product/125 G.png",
    "assets/images/product/10 Kg.png",
    "assets/images/product/20 Kg.png"
]

const SpeficifProduct = () => {
    const [show50, setShow50] = useState(true)
    const [show5, setShow5] = useState(false)
    const [show20, setShow20] = useState(false)
    const [show, setShow] = useState(false)

    const [imageLink, setimageLink] = useState("assets/images/product/B-58.png")

    /* if (show5) {
        $(document).ready(function () {
            $(".main_Image2").imagezoomsl({
                zoomrange: [3, 3],
            });
        });
    } */

    const changeDropdown = (value) => {
        if (value == '50g') {
            setShow50(true); setShow5(false); setShow20(false); setimageLink("assets/images/product/B-58.png")
        }
        else if (value == '125g') {
            setShow50(false); setShow5(true); setShow20(false); setimageLink("assets/images/product/125 G-large.png")

        }
    }
    return (
        <>
            <Container className="productDetailContainer">
                <Row>
                    <Col className='ProductImageContainer'>
                        <h4> Synthetic Resin Adhesive</h4>
                        {show50 ? <>
                            <div className='mainImageContainer'>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: imageLink
                                    },
                                    largeImage: {
                                        src: imageLink,
                                        width: 960,
                                        height: 740
                                    },
                                    enlargedImageContainerDimensions: {
                                        width: '200%',
                                        height: '100%'
                                    }
                                }} imageClassName='main_Image2' />
                                {/* <img className='main_Image2' src="assets/images/product/B-58.png" /> */}
                            </div>
                            <div className='thumb-images'>
                                <img className='' src="assets/images/product/B-58.png" onClick={() => { setimageLink("assets/images/product/B-58.png") }} />

                                <img className='' src="assets/images/product/50 G-large.png" onClick={() => { setimageLink("assets/images/product/50 G-large.png") }} />
                                <img className='' src="assets/images/product/125 G-large.png" onClick={() => { setimageLink("assets/images/product/125 G-large.png") }} />

                            </div>
                        </> : " "}
                        {show5 ? <>
                            <div className='mainImageContainer'>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: imageLink
                                    },
                                    largeImage: {
                                        src: imageLink,
                                        width: 960,
                                        height: 740
                                    },
                                    enlargedImageContainerDimensions: {
                                        width: '200%',
                                        height: '100%'
                                    }
                                }} imageClassName='main_Image2' />
                                {/* <img className='main_Image2' src="assets/images/product/5 kg.png" /> */}
                            </div>
                            <div className='thumb-images'>
                                <img className='' src="assets/images/product/B-58.png" onClick={() => { setimageLink("assets/images/product/B-58.png") }} />

                                <img className='' src="assets/images/product/125 G-large.png" onClick={() => { setimageLink("assets/images/product/125 G-large.png") }} />



                            </div>
                        </> : " "}
                        {show20 ? <>
                            <div className='mainImageContainer'>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: "assets/images/product/10 Kg.png"
                                    },
                                    largeImage: {
                                        src: "assets/images/product/10 Kg.png",
                                        width: 960,

                                    },
                                    enlargedImageContainerDimensions: {
                                        width: '200%',

                                    }
                                }} imageClassName='main_Image2' />
                                {/* <img className='main_Image2' src="assets/images/product/10 Kg.png" /> */}
                            </div>
                            <div className='thumb-images'>
                                <img className='' src="assets/images/product/B-58.png" />
                                <img className='' src="assets/images/product/20kg-large.png" />
                                <img className='' src="assets/images/product/10 kg-large.png" />


                            </div>
                        </> : " "}
                    </Col>
                    <Col>

                        <div className='productInfo'>
                            <h3><b>USES</b></h3>
                            <p>Starbond Resin Adhesives is usable in all kind of Wood, Plywood, Laminated Board, Particle Board, Hard Board, MDF Board, Paper Packaging etc. Whether the object is wood or board, just clean and smoothen the surface and use Starbond Synthetic Resin Adhesives and wait for a specific time period. Seal the cap properly after using.</p>

                            <h3><b>SIZE</b></h3>
                            <Form.Select size="lg" id="choices" onChange={(e) => { changeDropdown(e.target.value) }}>
                                <option value="50g">50 g</option>
                                <option value="125g" >125 g</option>
                                <option>250 g</option>
                                <option>500 g</option>
                                <option>1 kg</option>
                                <option>2 kg</option>
                                <option>5 kg</option>
                                <option>10 kg</option>

                                <option>20 kg</option>
                                <option>40 kg</option>
                                <option>50 kg</option>
                                <option>100 kg</option>
                            </Form.Select>
                            {/* <div className='sizes'>
                                <button className='' onClick={() => { setShow50(true); setShow5(false); setShow20(false); setimageLink("assets/images/product/B-58.png") }}>50 g</button>
                                <button className='' onClick={() => { setShow50(false); setShow5(true); setShow20(false); setimageLink("assets/images/product/125 G-large.png") }}>125 g</button>
                                <button className='' onClick={() => { setShow50(false); setShow5(false); setShow20(true) }}>250 g</button>
                                <button className=''>500 g</button>

                            </div>
                            <div className='sizes'>
                                <button className='' onClick={() => { setShow50(true); setShow5(false); setShow20(false) }}>1 kg</button>
                                <button className='' onClick={() => { setShow50(false); setShow5(true); setShow20(false) }}>2 kg</button>
                                <button className='' onClick={() => { setShow50(false); setShow5(false); setShow20(true) }}>5 kg</button>
                                <button className=''>10 kg</button>

                            </div>
                            <div className='sizes'>
                                <button className='' onClick={() => { setShow50(true); setShow5(false); setShow20(false) }}>20 kg</button>
                                <button className='' onClick={() => { setShow50(false); setShow5(true); setShow20(false) }}>40 kg</button>
                                <button className='' onClick={() => { setShow50(false); setShow5(false); setShow20(true) }}>50 kg</button>
                                <button className=''>100 kg</button>
                            </div> */}
                        </div>
                        {/* <div className='priceContainer'>
                            <hr />
                            <h4>20000 BDT x 1 = 20000 BDT</h4>
                            <p>EMI options starting from 5,050 BDT <br />*Price changes if Size/ Fabric/ Color/ Material changes.</p>
                            <hr />
                        </div> */}
                        {/*  <div className='quantityContainer'>
                            <p>QUANTITY</p>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    --Select--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-1" active>
                                        1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">5</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">10</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">20</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">30</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">50</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">100</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='Placeorder'>
                            <button onClick={() => setShow(true)}>Place Order</button>
                        </div> */}
                        <div className='CallSection'>
                            <p>For any quarries or Product related information, please call <a href="tel:+8801313012575">+8801313012575</a>. You can contact us through (WhatsApp icon) or (messenger icon) as well.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <SpecificProductDetails />
            </Container>
            <Container className='modalSection'>
                <Modal show={show} onHide={() => setShow(false)} backdrop="static" aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Place an Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>


                            <div className="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Mobile No.</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Numner" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Select City</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Dhaka</option>
                                    <option>Gazipur</option>
                                    <option>Narayanganj</option>
                                    <option>Savar</option>

                                </select>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Note</label>
                                <textarea className="form-control" rows="3" placeholder="Write your Message"></textarea>
                            </div>
                            <div className='form-group'>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </Modal.Body>

                </Modal>

            </Container>

        </>
    )
}

export default SpeficifProduct
