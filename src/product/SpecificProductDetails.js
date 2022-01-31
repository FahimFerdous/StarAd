import React from 'react'
import { useState } from 'react'
import "./Product.css"

const SpecificProductDetails = () => {

    const [Boisistho, setBoisistho] = useState(true)
    const [sotorkota, setsotorkota] = useState(false)

    var btns = document.getElementsByClassName("btn2")
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active");
            this.className += " active";
        })
    }
    return (
        <div>
            <div className='headingSection'>

                <p className='btn2 active' onClick={() => { setBoisistho(true); setsotorkota(false) }}>Characteristics</p>
                <p className='btn2' onClick={() => { setBoisistho(false); setsotorkota(true) }}>Caution</p>
                <hr />
            </div>

            {Boisistho ? <div className="SectionDescription Boisistho">

                <ul>
                    <li>More coverage</li>
                    <li>Dries quickly</li>
                    <li>Strong bonding power</li>
                    <li>Can be preserved for a longer period of time</li>
                    <li>Heat & Water Resistant</li>
                    <li>Free from harmful chemicals</li>
                </ul>
            </div> : " "}
            {sotorkota ? <div className="SectionDescription Sotorkota">
                <ul>
                    <li>Keep in cool & dry place</li>
                    <li>
                        Keep out of reach of children</li>
                </ul>
            </div> : " "}
        </div>
    )
}

export default SpecificProductDetails
