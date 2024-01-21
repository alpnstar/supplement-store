import React from 'react';
import './banner.scss';
import bannerImg from '../../../../public/imgs/banner.png'

const Banner = () => {
    return (
        <article className="banner">
            <div className="banner__wrapper container">
                <img src={bannerImg} alt=""/>
            </div>
        </article>
    );
};

export default Banner;