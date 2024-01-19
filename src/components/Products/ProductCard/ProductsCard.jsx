import React, {useEffect, useState} from 'react';
import './productsCard.scss'
import ReviewsList from "../../Reviews/ReviewsList";
import {useNavigate, useParams} from "react-router";
import ProductsRequest from "../../../API/productsRequest";
import ProductsItemInner from "../ProductsItemInner";
import Error from "../../../pages/Error";
import axios from "axios";
import ReviewsRequest from "../../../API/reviewsRequest";

const ProductCard = ({setCartItems}) => {

    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState();
    const [reviewsExpanded, setReviewsExpanded] = useState(false);

    const productId = params.productId;

    const [reviews, setReviews] = useState([]);
    const [ReviewsError, setReviewsError] = useState();

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
                    rating: 5,
                    content: inputReview,
                };
                await axios.post(process.env.API_URL + "api/reviews", data);
                await reviewsFetch();
                setReviewsError();


            } catch (error) {
                setReviewsError(error);
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

    async function productFetch() {
        try {
            const response = await ProductsRequest.allProducts.getById(params.productId)
            setProduct(response.data);
        } catch (error) {
            setReviewsError(error);
        }
    }

    useEffect(() => {
        product && (document.title = product.attributes.name);
    }, [product]);

    useEffect(() => {
        setProduct();
        productFetch();
    }, [params.productId]);
    return (
        product ? <div className="productCard">
                <div className="productCard__wrapper container">
                    <div className="productCard__content-left">
                        <div className="productCard__img-wrapper">
                            <img src={product.attributes.image} alt=""/>
                        </div>
                        <div className="productCard__description">
                            <h2>Описание</h2>
                            <p dangerouslySetInnerHTML={{__html: product.attributes.description}}>
                            </p>
                        </div>
                        <div className="productCard__reviews">
                            <div className="productCard__reviews-title">
                                <h2>Отзывы</h2>
                                <button onClick={()=> setReviewsExpanded(!reviewsExpanded)} className="second-style-button">
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
                                    <input onClick={handleSendPostRequest()} type="button" value='Отправить'
                                           className="main-style-button"/>
                                </form>
                            <ReviewsList productView={false} full={true} reviews={reviews}/>
                        </div>
                    </div>
                    <div className="productCard__content-right">
                        <ProductsItemInner data={product} setCartItems={setCartItems} full={true}/>
                    </div>
                </div>
            </div>
            : ReviewsError ? <Error>Товар не найден</Error> : ''
    )
};

export default ProductCard;