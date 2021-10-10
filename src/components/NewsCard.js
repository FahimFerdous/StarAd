import React from 'react'
import { Button } from 'react-bootstrap'

const NewsCard = (props) => {
    return (
        <div>
            <div className="newsContainer col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="newscardContainer">
                    <div className="img"><img src={props.src} alt="Image" /></div>
                    <div className="content-part"><h4>{props.name}</h4>
                        <p>{props.description}</p>

                    </div>

                    <div className="DateandReadMore">
                        <span><i class="fas fa-calendar-alt"></i>1st October, 2020</span>
                        <Button className="productBtn mainBtn" variant="warning">Read More</Button></div>


                </div>
            </div>
        </div>
    )
}

export default NewsCard
