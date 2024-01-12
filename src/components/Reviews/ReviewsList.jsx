import React from 'react';
import ReviewsItem from "./ReviewsItem";
import './reviews.scss';

const ReviewsList = ({reviews, product, children, productView}) => {
    return (
        <div className="reviewsList">
            {children}
            {!children && reviews.map(item => <ReviewsItem key={Math.random()} data={item}/>)}
        </div>
    );
};

export default ReviewsList;