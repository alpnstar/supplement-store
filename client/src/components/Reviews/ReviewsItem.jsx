import React from 'react';
import {useNavigate} from "react-router";
import RatingStarsList from "../UI/RatingStars/RatingStarsList";

const ReviewsItem = ({data, product, productView}) => {
    const navigate = useNavigate();
    return (
        <div className="reviewsList__item">
            {productView
                && <div onClick={() => navigate('/' + product.id)} className="reviewsList__item-title-block">
                    <div className="reviewsList__item-img-wrapper">
                        <img
                            src={product.attributes.image}
                            alt=""/>
                    </div>
                    <h3>{product.attributes.name}</h3>
                </div>}
            <div className="reviewsList__item-review-content">
                <div className="reviewList__item-review-rating">
                    <RatingStarsList current={data.rating - 1}/>
                </div>
                <div className="reviewsList__item-review-body"><p>{data.content}</p></div>
                <div className="reviewsList__item-review-info">
                    <span className="reviewsList__item-review-user">{data.author}</span>
                    <span className="reviewsList__item-review-date">
                       {data.created_at}
                    </span>

                </div>
            </div>
        </div>
    );
};

export default ReviewsItem;