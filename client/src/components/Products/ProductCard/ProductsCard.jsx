import React, {useEffect, useState} from 'react';
import './productsCard.scss'
import ReviewsList from "../../Reviews/ReviewsList";
import {useParams} from "react-router";
import ProductsRequest from "../../../API/productsRequest";
import ProductsItemInner from "../ProductsItemInner";
import Error from "../../../pages/Error";
import axios from "axios";
import Breadcrumbs from "../../UI/Breadcrumbs/Breadcrumbs";
import RatingStarsList from "../../UI/RatingStars/RatingStarsList";

const ProductCard = ({setCartItems}) => {

    const params = useParams();
    const [product, setProduct] = useState();
    const [reviewsExpanded, setReviewsExpanded] = useState(false);

    const productId = params.productId;

    const [ReviewsError, setReviewsError] = useState();

    const [inputName, setInputName] = useState('');
    const [inputReview, setInputReview] = useState('');
    const [ratingReview, setRatingReview] = useState(0);

    function handleInputChange(setInput) {
        return function (event) {
            setInput(event.target.value);
        }
    }

    function handleSendPostRequest() {
        return async function () {
            try {
                const data = {
                    product_id: productId,
                    author: inputName,
                    rating: ratingReview,
                    content: inputReview,
                };
                await axios.post(process.env.API_URL + "api/reviews", data);
                setReviewsExpanded(false);
                await productFetch();
                setReviewsError();


            } catch (error) {
                setReviewsError(error);

            } finally {
                setInputReview('');
                setInputName('');
                setRatingReview(0)
            }
        }
    }


    async function productFetch() {
        try {
            const response = await ProductsRequest.allProducts.getById(params.productId)
            setProduct(response);
        } catch (error) {
            setReviewsError(error);
        }
    }

    useEffect(() => {
        product && (document.title = product.data.attributes.name);
    }, [product]);

    useEffect(() => {
        setProduct();
        productFetch();
    }, [params.productId]);

    return (
        product ? <div className="productCard">
                <div className="productCard__wrapper container">
                    <div className="productCard__header">
                        <Breadcrumbs data={product.breadcrumbs}/>
                    </div>
                    <div className="productCard__content">

                        <div className="productCard__product">
                            <div className="productCard__product-content-left">
                                <div className="productCard__img-wrapper">
                                    <img src={product.data.attributes.image} alt=""/>
                                </div>
                            </div>
                            <div className="productCard__product-content-right">
                                <ProductsItemInner data={product.data} setCartItems={setCartItems} full={true}/>
                            </div>
                        </div>

                        <div className="productCard__description productCard__container">
                            <h2>Описание</h2>
                            <p dangerouslySetInnerHTML={{__html: product.data.attributes.description}}>
                            </p>
                        </div>

                        <div className="productCard__reviews productCard__container">
                            <div className="productCard__reviews-title">
                                <h2>Отзывы</h2>
                                <button onClick={() => setReviewsExpanded(!reviewsExpanded)}
                                        className="second-style-button">
                                    Оставить отзыв
                                </button>
                            </div>
                            <form className={`reviews__form ${reviewsExpanded ? 'reviews__form--expanded' : ''}`}>
                                <div className="reviews__form-input-wrapper">
                                <span
                                    className="form-input-error">{ReviewsError && ReviewsError.response.data.errors['author'] && ReviewsError.response.data.errors['author']}</span>
                                    <span className="reviews__form-input-title">
                                Ваше имя
                            </span>
                                    <input maxLength='25' required value={inputName}
                                           onChange={handleInputChange(setInputName)}
                                           type="text"
                                           className="main-style-input"/>
                                </div>
                                <div className="reviews__form-input-wrapper">
                                <span
                                    className="form-input-error">{ReviewsError && ReviewsError.response.data.errors['content'] && ReviewsError.response.data.errors['content']}</span>
                                    <span className="reviews__form-input-title">
                                Ваш отзыв
                            </span>
                                    <textarea maxLength='900' required value={inputReview}
                                              onChange={handleInputChange(setInputReview)}
                                              className="main-style-input"/>
                                </div>
                                <div className="reviews__form-input-wrapper">
                                    <span
                                        className="form-input-error">{ReviewsError && ReviewsError.response.data.errors['rating'] && ReviewsError.response.data.errors['rating']}</span>
                                    <RatingStarsList edit={true} current={ratingReview} setCurrent={setRatingReview}/>
                                </div>
                                <input onClick={handleSendPostRequest()} type="button" value='Отправить'
                                       className="main-style-button"/>
                            </form>
                            <ReviewsList productView={false} full={true} reviews={product.data.attributes.reviews}/>
                        </div>

                    </div>
                </div>
            </div>
            : ReviewsError ? <Error>Товар не найден</Error> : ''
    )
};

export default ProductCard;