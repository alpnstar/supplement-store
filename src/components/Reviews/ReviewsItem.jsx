import React from 'react';

const ReviewsItem = ({data}) => {
    return (
        <div className="reviews__item">
            <div className="reviews__item-title-block">
                <div className="reviews__item-img-wrapper">
                    <img
                        src={data.attributes.image}
                        alt=""/>
                </div>
                <h3>{data.attributes.name}</h3>
            </div>
            <div className="reviews__item-review-content">
                <span className="reviews__item-review-header">{data.attributes.last_review.title}</span>
                <span className="reviews__item-review-body"><p>{data.attributes.last_review.content}</p></span>
                <div className="reviews__item-review-info">
                    <span className="reviews__item-review-user">{data.attributes.last_review.author}</span>
                    <span className="reviews__item-review-date">
                       {data.attributes.last_review.created_at}
                    </span>

                </div>
            </div>
        </div>
    );
};

export default ReviewsItem;