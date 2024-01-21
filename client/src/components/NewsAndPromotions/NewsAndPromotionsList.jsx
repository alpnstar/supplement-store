import './newsAndPromotions.scss';
import React from 'react';
import NewsAndPromotionsItem from "./NewsAndPromotionsItem";

const NewsAndPromotionsList = ({data}) => {
    return (
        <div className="newsAndPromotionsList">
            {data.map(item =>
                <NewsAndPromotionsItem key = {item.id} data={item}/>)}
        </div>
    );
};

export default NewsAndPromotionsList;