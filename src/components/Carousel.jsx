import React from 'react';
import { useState, useEffect, useRef } from 'react';
import church from '../data/hope_church.json';

const Carousel = ({ images, autoplaySpeed = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const autoplayIntervalRef = useRef(null); // Variable to store the interval reference

    useEffect(() => {
        autoplayIntervalRef.current = setInterval(() => {
            const nextIndex =
                currentIndex === images.length - 1 ? 0 : currentIndex + 1;
            setCurrentIndex(nextIndex);
        }, autoplaySpeed);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(autoplayIntervalRef.current);
    }, [currentIndex, images, autoplaySpeed]);

    // Dependencies
    // currentIndex, images, autoplaySpeed

    const handlePrevClick = () => {
        const prevIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    };

    const handleNextClick = () => {
        const nextIndex =
            currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="carousel">
            <div className="carousel-content">
                <button
                    className="carousel-button prev"
                    onClick={handlePrevClick}
                >
                    &lt;
                </button>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${
                            index === currentIndex ? 'active' : ''
                        }`}
                    >
                        <img
                            src={images[currentIndex].imageSrc}
                            alt={`Slide ${index}`}
                            className="carousel-image"
                        />
                        <div
                            className="carousel-caption"
                            style={{
                                opacity: 1,
                                fontSize: '1em',
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                            }}
                        >
                            {/* images[currentIndex].name} */}
                            Mission: {church.MISSION_STATEMENT} <br />
                            <br />
                            Vision:{' '}
                            {church.VISION.map((vision, index) => (
                                <li key={index} style={{listStyleType: "none"}}>{vision}</li>
                            ))}
                        </div>
                    </div>
                ))}
                <button
                    className="carousel-button next"
                    onClick={handleNextClick}
                >
                    &gt;
                </button>
            </div>
            <div />
        </div>
    );
};

export default Carousel;
