import React from 'react'
import NewsCard from '../components/NewsCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const NewsSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <Carousel responsive={responsive} infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            arrows={false}
            containerClass="carousel-container"

        >
            <NewsCard name="Event organized by partex group to boost employers" src="assets/images/news1.jpg" description="Star Adhesives is a sister concern of Partex group. On the verge of their grand launching Partex group organised a event." />
            <NewsCard name="Event organized by partex group to boost employers" src="assets/images/news2.jpg" description="Star Adhesives is a sister concern of Partex group. On the verge of their grand launching Partex group organised a event." />
            <NewsCard name="Event organized by partex group to boost employers" src="assets/images/news3.jpg" description="Star Adhesives is a sister concern of Partex group. On the verge of their grand launching Partex group organised a event." />
            <NewsCard name="Event organized by partex group to boost employers" src="assets/images/news4.jpg" description="Star Adhesives is a sister concern of Partex group. On the verge of their grand launching Partex group organised a event." />
        </Carousel>
    )
}

export default NewsSlider
