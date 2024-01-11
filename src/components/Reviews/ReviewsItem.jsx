import React from 'react';

const ReviewsItem = ({data, product, productView}) => {
    return (
        <div className="reviews__item">
            {productView
                && <div className="reviews__item-title-block">
                    <div className="reviews__item-img-wrapper">
                        <img
                            src={product.attributes.image}
                            alt=""/>
                    </div>
                    <h3>{product.attributes.name}</h3>
                </div>}
            <div className="reviews__item-review-content">
                {/*<span className="reviews__item-review-header">{data.title}</span>*/}
                <span className="reviews__item-review-body"><p>{data.content}</p></span>
                <div className="reviews__item-review-info">
                    <span className="reviews__item-review-user">{data.author}</span>
                    <span className="reviews__item-review-date">
                       {data.created_at}
                    </span>

                </div>
            </div>
        </div>
    );
};

export default ReviewsItem;