import React from 'react'
import './components.css'

const BodCard = (props) => {
    return (
        <div className="cardContainer bodContainer row">

            <div className="col-xl-6 col-lg-6 col-md-6 com-sm-12 col-12">
                <h3>{props.name}</h3>
                <h5>{props.designation}</h5>
                <hr className="hr" />
                <img src={props.src} />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 com-sm-12 col-12">

                <p>{props.info}</p>

            </div>
        </div>
    )
}

export default BodCard
