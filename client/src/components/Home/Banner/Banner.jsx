import React, {useEffect, useState} from 'react';
import './banner.scss';
import Carousel from "../../UI/Carousel-compound";
import Page from "../../UI/Carousel-compound/Page";
import axios from "axios";

const Banner = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetching();
    }, []);

    async function fetching() {
        const response = await axios.get(process.env.API_URL + 'banners');
        setData(response.data.data);
    }

    return (
        <article className="banner">
            <div className="banner__wrapper container">
                {data.length !== 0 &&
                    <Carousel infinite={true} widthInput={1190}>
                        {data.map(item => {
                            return (
                                <Page key={item.images}>
                                    <div className="item">
                                        <img className="carousel-item-img" src={item.images} alt=""/>
                                    </div>
                                </Page>
                            )
                        })}
                    </Carousel>}
            </div>
        </article>
    );
};

export default Banner;