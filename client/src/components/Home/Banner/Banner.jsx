import React from 'react';
import './banner.scss';
import bannerImg from '../../../../public/imgs/banner.png'
import bannerImg2 from '../../../../public/imgs/sliderElem.jpg'
import Slider from "../../UI/Slider/Slider";

const Banner = () => {
    return (
        <article className="banner">
            <div className="banner__wrapper container">
                <Slider items={[
                    <img src={bannerImg} alt=''/>,
                    <img src={bannerImg2} alt=''/>,
                ]}/>

            </div>
        </article>
    );
};

export default Banner;