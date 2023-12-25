import React from 'react';
import './banner.scss';

const Banner = () => {
    return (
        <article className="banner">
            <div className="banner__wrapper container">
                <img
                    src="./images/banner.png"
                    alt="Ocean | ExtraMag P-5-P Sachet"/>
            </div>
        </article>
    );
};

export default Banner;