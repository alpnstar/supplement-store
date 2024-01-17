import './newsAndPromotions.scss';
import React from 'react';
import {useNavigate} from "react-router";

const NewsAndPromotionsItem = ({data}) => {
    const navigate = useNavigate();
    return (
        <article className="newsAndPromotionsList__item">
            <div onClick={() => navigate('/novosti-i-akcii/' + data.id)}
                 className="newsAndPromotionsList__item-img-wrapper">
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

export default NewsAndPromotionsItem;