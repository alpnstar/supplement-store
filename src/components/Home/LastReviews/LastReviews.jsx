import React, {useEffect, useState} from 'react';
import './lastReviews.scss';
import ReviewsList from "../../Reviews/ReviewsList";
import ReviewsRequest from "../../../API/reviewsRequest";

const LastReviews = () => {
    const [reviews, setReviews] = useState([]);


    async function fetchReviews() {
        const response = await ReviewsRequest.lastReviews();
        setReviews(response.data);
    }

    useEffect(() => {
        fetchReviews();
    }, []);


    return (
        <article className="lastReviews">
            <div className="lastReviews__wrapper container">
                <h2>Последние отзывы</h2>
                <ReviewsList data={reviews}/>
            </div>
        </article>
    );
};

export default LastReviews;