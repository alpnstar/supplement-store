import './newsAndPromotions.scss';
import React from 'react';

const NewsAndPromotions = ({data}) => {



    return (
        <article className="newsAndPromotionsList__item">
            <div className="newsAndPromotionsList__item-img-wrapper">
                <img src={data.preview_image} alt=""/>
            </div>
            <div className="newsAndPromotionsList__item-content-wrapper">

                <div className="newsAndPromotionsList__item-description">
                    <span className="newsAndPromotionsList__item-title">
                {data.title}
            </span>
                    <div className="newsAndPromotionsList__item-text">
                        {data.content}
                    </div>
                </div>
                <span className="newsAndPromotionsList__item-date">{data.created_at}</span>

            </div>
        </article>
    );
};

export default NewsAndPromotions;