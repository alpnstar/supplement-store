import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import ReviewsList from "../components/Reviews/ReviewsList";
import ReviewsRequest from "../API/reviewsRequest";
import axios from "axios";

const Reviews = () => {
        const params = useParams();
        const productId = params.productId;

        const [reviews, setReviews] = useState([]);
        const [error, setError] = useState();

        const [inputName, setInputName] = useState('');
        const [inputReview, setInputReview] = useState('');

        function handleInputChange(setInput) {
            return function (event) {
                setInput(event.target.value);
            }
        }

        function handleSendPostRequest(event) {
            return async function (event) {
                try {
                    const data = {
                        product_id: productId,
                        author: inputName,
                        rating: 3,
                        content: inputReview,
                    };
                    const response = await axios.post(process.env.API_URL + "api/reviews", data);
                    await reviewsFetch();
                    setError();


                } catch (error) {
                    setError(error);
                    console.log(error);

                } finally {
                    setInputReview('');
                    setInputName('');
                }
            }
        }

        async function reviewsFetch() {
            const data = await ReviewsRequest.productReviews(productId);
            setReviews(data);

        }

        useEffect(() => {
            reviewsFetch();
            window.scrollTo({
                top: 0,
                behavior: 'auto' // Добавление плавности прокрутки (не обязательно)
            });
        }, []);
        return (
            <div className="reviews">
                <div className="reviews__wrapper container">
                    <div className="reviews__wrapper-inner">
                        <h2>Отзывы</h2>
                        <form className="reviews__form">
                            <div className="reviews__form-input-wrapper">
                                <span
                                    className="form-input-error">{error && error.response.data.errors['author'] && error.response.data.errors['author']}</span>
                                <span className="reviews__form-input-title">
                                Ваше имя
                            </span>
                                <input maxLength='25' required value={inputName} onChange={handleInputChange(setInputName)}
                                       type="text"
                                       className="main-style-input"/>
                            </div>
                            <div className="reviews__form-input-wrapper">
                                <span
                                    className="form-input-error">{error && error.response.data.errors['content'] && error.response.data.errors['content']}</span>
                                <span className="reviews__form-input-title">
                                Ваш отзыв
                            </span>
                                <textarea maxLength='900' required value={inputReview}
                                          onChange={handleInputChange(setInputReview)}
                                          className="main-style-input"/>
                            </div>
                            <input onClick={handleSendPostRequest()} type="button" value='Отправить'
                                   className="main-style-button"/>
                        </form>
                        <ReviewsList full={true} reviews={reviews}/>
                    </div>
                </div>
            </div>
        );
    }
;

export default Reviews;