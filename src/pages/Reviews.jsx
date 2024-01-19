import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import ReviewsList from "../components/Reviews/ReviewsList";
import ReviewsRequest from "../API/reviewsRequest";
import axios from "axios";

const Reviews = () => {
        const params = useParams();

        return (
            <div className="reviews">
                <div className="reviews__wrapper container">
                    <div className="reviews__wrapper-inner">
                        <h2>Отзывы</h2>
                        <ReviewsList full={true} reviews={reviews}/>
                    </div>
                </div>
            </div>
        );
    }
;

export default Reviews;