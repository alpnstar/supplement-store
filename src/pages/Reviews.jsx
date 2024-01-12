import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import ReviewsList from "../components/Reviews/ReviewsList";
import ReviewsRequest from "../API/reviewsRequest";
import axios from "axios";

const Reviews = () => {
    const params = useParams();
    const productId = params.productId;

    const [reviews, setReviews] = useState([]);

    const [inputName, setInputName] = useState('');
    const [inputReview, setInputReview] = useState('');

    function handleInputChange(setInput) {
        return function (event) {
            setInput(event.target.value);
        }
    }

    function handleSendPostRequest(event) {
        return async function () {

            event.preventDefault();
            const data = {
                product_id: productId,
                author: inputName,
                rating: 3,
                content: inputReview,
            };
            const response = await axios.post(process.env.API_URL + "api/reviews", data);
            await reviewsFetch();

            setInputReview('');
            setInputName('');

        }
    }

    async function reviewsFetch() {
        const data = await ReviewsRequest.productReviews(productId);
        setReviews(data);

    }

    useEffect(() => {
        reviewsFetch();
    }, []);
    return (
        <div className="reviews">
            <div className="reviews__wrapper container">
                <div className="reviews__wrapper-inner">
                    <h2>Отзывы</h2>
                    <form className="reviews__form">
                        <div className="reviews__form-input-wrapper">
                            <span className="reviews__form-input-title">
                                Ваше имя
                            </span>
                            <input value={inputName} onChange={handleInputChange(setInputName)} type="text"
                                   className="main-style-input"/>
                        </div>
                        <div className="reviews__form-input-wrapper">
                            <span className="reviews__form-input-title">
                                Ваш отзыв
                            </span>
                            <input value={inputReview} onChange={handleInputChange(setInputReview)} type="text"
                                   className="main-style-input"/>
                        </div>
                        <input onClick={handleSendPostRequest(event)} type="submit" className="main-style-button"/>
                    </form>
                    <ReviewsList reviews={reviews}/>
                </div>
            </div>
        </div>
    );
};

export default Reviews;