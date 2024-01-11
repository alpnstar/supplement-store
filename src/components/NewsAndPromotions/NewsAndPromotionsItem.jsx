import './newsAndPromotions.scss';
import React from 'react';

const NewsAndPromotions = ({data}) => {



    return (
        <article className="newsAndPromotions__item">
            <img src={data.preview_image} alt=""/>
            <div className="newsAndPromotions__item-content-wrapper">

                <div className="newsAndPromotions__item-description">
                    <span className="newsAndPromotions__item-title">
                {data.title}
            </span>
                    <div className="newsAndPromotions__item-text">
                        {data.content}
                    </div>
                </div>
                <span className="newsAndPromotions__item-date">{data.created_at}</span>

            </div>
        </article>
    );
};

export default NewsAndPromotions;