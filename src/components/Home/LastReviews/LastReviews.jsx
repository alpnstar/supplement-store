import React, {useEffect, useState} from 'react';
import './lastReviews.scss';
import ReviewsList from "../../Reviews/ReviewsList";
import ReviewsRequest from "../../../API/reviewsRequest";
import sortByDate from "../../../utils/sortByDate";

const LastReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [sortedReviews, setSortedReviews] = useState([]);

    async function fetchReviews() {
        const data = await ReviewsRequest.getAll();
        setReviews(data);
    }

    useEffect(() => {
        fetchReviews();
    }, []);
    useEffect(() => {
        setSortedReviews(sortByDate.recent(reviews, 'publicationDate'));
    }, [reviews]);

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