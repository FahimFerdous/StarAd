import React from 'react'
import { Element } from 'react-scroll'
import './components.css'

const BodCard = (props) => {
    return (
        <div className="cardContainer bodContainer row">

            <div className="col-xl-5 col-lg-5 col-md-5 com-sm-12 col-12">
                <h3>{props.name}</h3>
                <h5>{props.designation}</h5>
                <hr className="hr" />
                <img src={props.src} />
            </div>
            <div className="info col-xl-7 col-lg-7 col-md-7 com-sm-12 col-12">

                <p>{props.info}</p>

            </div>
        </div>
    )
}

export default BodCard
