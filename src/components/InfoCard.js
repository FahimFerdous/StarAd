import React from 'react'
import { Button } from 'react-bootstrap'

import "./components.css"

const InfoCard = (props) => {
    return (
        <div className="mainContainer col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="cardContainer">
                <div className="img"><img src={props.src} alt="Image" /></div>
                <div className="content-part"><h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <Button className="productBtn mainBtn" variant="warning">Read More</Button></div>

            </div>
        </div>
    )
}

export default InfoCard
