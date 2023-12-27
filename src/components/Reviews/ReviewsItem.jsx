import React from 'react';
import dateParser from "../../utils/dateParser";

const ReviewsItem = ({data}) => {
    const parsedDate = dateParser(data.publicationDate);
    return (
        <div className="reviews__item">
            <div className="reviews__item-title-block">
                <div className="reviews__item-img-wrapper">
                    <img
                        src={data.imgSrc}
                        alt=""/>
                </div>
                <h3>{data.title}</h3>
            </div>
            <div className="reviews__item-review-content">
                <span className="reviews__item-review-header">{data.reviewTitle}</span>
                <span className="reviews__item-review-body"><p>{data.reviewBody}</p></span>
                <div className="reviews__item-review-info">
                    <span className="reviews__item-review-user">{data.userName}</span>
                    <span className="reviews__item-review-date">
                       {`${parsedDate[0]} ${parsedDate[1]} ${parsedDate[2]}`}
                    </span>

                </div>
            </div>
        </div>
    );
};

export default ReviewsItem;