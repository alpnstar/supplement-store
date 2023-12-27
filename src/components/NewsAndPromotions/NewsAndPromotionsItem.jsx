import './newsAndPromotions.scss';
import React from 'react';
import dateParser from "../../utils/dateParser";

const NewsAndPromotions = ({data}) => {
    const parsedDate = dateParser(data.publicationDate);


    return (
        <article className="newsAndPromotions__item">
            <img src={data.imgSrc} alt=""/>
            <div className="newsAndPromotions__item-content-wrapper">

                <div className="newsAndPromotions__item-description">
                    <span className="newsAndPromotions__item-title">
                {data.title}
            </span>
                    <div className="newsAndPromotions__item-text">
                        {data.description}
                    </div>
                </div>
                <span className="newsAndPromotions__item-date">{`${parsedDate[0]} ${parsedDate[1]} ${parsedDate[2]}`}</span>

            </div>
        </article>
    );
};

export default NewsAndPromotions;