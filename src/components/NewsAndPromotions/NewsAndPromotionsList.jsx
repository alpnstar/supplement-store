import './newsAndPromotions.scss';
import React, {useState} from 'react';
import NewsAndPromotionsItem from "./NewsAndPromotionsItem";

const NewsAndPromotionsList = ({data}) => {
    return (
        <div className="newsAndPromotions">
            {data.map(item =>
                <NewsAndPromotionsItem key = {item.id} data={item}/>)}
        </div>
    );
};

export default NewsAndPromotionsList;