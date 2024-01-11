import React, {useEffect, useState} from 'react';
import './lastReviews.scss';
import ReviewsList from "../../Reviews/ReviewsList";
import ReviewsRequest from "../../../API/reviewsRequest";
import ReviewsItem from "../../Reviews/ReviewsItem";

const LastReviews = () => {
    const [products, setProducts] = useState([]);

    async function fetchReviews() {
        const response = await ReviewsRequest.lastReviews();
        setProducts(response.data);

    }

    useEffect(() => {
        fetchReviews();
    }, []);


    return (
        <article className="lastReviews">
            <div className="lastReviews__wrapper container">
                <h2>Последние отзывы</h2>
                <ReviewsList>
                    {products.map(product =>
                        product.attributes.reviews.map(review =>
                            <ReviewsItem key={Math.random()} data={review} product={product} productView={true}/>)
                    )}
                </ReviewsList>
            </div>
        </article>
    );
};

export default LastReviews;