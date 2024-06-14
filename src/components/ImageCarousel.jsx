import React from 'react';
import { Carousel } from 'react-bootstrap';
import junior_academy_pic from '../images/hope_elite_junior_academy.jpg';
import { useState } from 'react';

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={1000}>
                <img src={junior_academy_pic} alt="Elite junior academy" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src={junior_academy_pic} alt="Elite junior academy" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src={junior_academy_pic} alt="Elite junior academy" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default ImageCarousel;
