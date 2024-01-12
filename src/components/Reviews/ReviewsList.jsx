import React from 'react';
import ReviewsItem from "./ReviewsItem";
import './reviews.scss';

const ReviewsList = ({reviews, product, children, productView, full}) => {
    return (
        <div className={`reviewsList ${full ? 'reviewsList--full' : ''}`}>
            {children}
            {!children && reviews.map(item => <ReviewsItem key={Math.random()} data={item}/>)}
        </div>
    );
};

export default ReviewsList;