import React from 'react';

const ReviewsItem = ({data, product, productView}) => {
    return (
        <div className="reviewsList__item">
            {productView
                && <div className="reviewsList__item-title-block">
                    <div className="reviewsList__item-img-wrapper">
                        <img
                            src={product.attributes.image}
                            alt=""/>
                    </div>
                    <h3>{product.attributes.name}</h3>
                </div>}
            <div className="reviewsList__item-review-content">
                {/*<span className="reviewsList__item-review-header">{data.title}</span>*/}
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