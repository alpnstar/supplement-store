import React from 'react';
import {useParams} from "react-router";

const NewsCard = () => {
    const params = useParams();

    return (
        <div className="newsCard">
            <div className="newsCard__wrapper container">
                <h2 className="newsCard__title">{}</h2>
                <div className="newsCard__content">
                    <div className="newsCard__img-wrapper">
                        <img src="https://mekka.shop/wa-data/public/blog/img/34-2.jpg" alt=""/>
                    </div>
                    <p>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;