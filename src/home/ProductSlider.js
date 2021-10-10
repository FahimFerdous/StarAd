import React from 'react'
import InfoCard from '../components/InfoCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const ProductSlider = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        < >
            <Carousel responsive={responsive} infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                arrows={false}
                containerClass="carousel-container"

            >
                <InfoCard name="Star bond" src="assets/images/all-product-for-sal.png" description="
                    
                    Strong and Reliable bonding. Star bond promises customers
                    for trustable services for years
                  
                  " />

                <InfoCard name="STAR KING" src="assets/images/brandiamge2.jpg" description="
                    Another sub brand of Star Adhesive, a remarkable product
                    catalouge for the valuable customers
                  " />

                <InfoCard name="GUMKING" src="assets/images/sticker.jpg" description="Gumking is a sub brand of start adhesive. Gumking Offers
                    wide variety of products for customers" />

                <InfoCard name="CYCLON" src="assets/images/spry-paint-sticker-03.jpg" description="
                    Part of a Diverse family, Cyclon provides customer authentic
                    products with quality gurrantee
                  " />
            </Carousel>

        </>
    )
}

export default ProductSlider
