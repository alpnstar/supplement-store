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
                <ReviewsList >
                    {products.map(product => <ReviewsItem key={Math.random()} data={product.attributes.last_review}
                                                          product={product} productView={true}/>)}


                </ReviewsList>
            </div>
        </article>
    );
};

export default LastReviews;