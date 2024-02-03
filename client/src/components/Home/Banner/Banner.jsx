import React from 'react';
import './banner.scss';
import bannerImg from '../../../../public/imgs/banner.png'
import bannerImg2 from '../../../../public/imgs/sliderElem.jpg'
import Slider from "../../UI/Slider/Slider";
import Carousel from "../../UI/Carousel-compound";
import Page from "../../UI/Carousel-compound/Page";

const Banner = () => {
    return (
        <article className="banner">
            <div className="banner__wrapper container">
                <Carousel infinite={true}>
                    <Page>
                        <img className="item" src={bannerImg2} alt=""/>
                    </Page>
                    <Page>
                        <img className="item" src={bannerImg} alt=""/>
                    </Page>
                </Carousel>

            </div>
        </article>
    );
};

export default Banner;