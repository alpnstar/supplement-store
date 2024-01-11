import React from 'react';
import ReviewsItem from "./ReviewsItem";
import './reviews.scss';

const ReviewsList = ({data}) => {
    return (
        <div className="reviews">
            {data && Array.isArray(data)
                ? data.map(item => <ReviewsItem key={item.id} data={item}/>)
                : <ReviewsItem key={item.id} data={item}/>}
        </div>
    );
};

export default ReviewsList;