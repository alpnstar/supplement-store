import React, {useEffect, useState} from 'react';
import './productsCard.scss'
import ReviewsList from "../../Reviews/ReviewsList";
import {useNavigate, useParams} from "react-router";
import ProductsRequest from "../../../API/productsRequest";
import ProductsItemInner from "../ProductsItemInner";

const ProductCard = ({setCartTotalPrice, setCartTotalCount, setCartItems}) => {
    const navigate = useNavigate();
    const params = useParams();

    const [product, setProduct] = useState();

    async function productFetch() {
        const response = await ProductsRequest.allProducts.getById(params.productId)
        setProduct(response.data);
    }

    function handleNavigate() {
        navigate('../reviews/' + product.id);
    }

    useEffect(() => {
        productFetch();
    }, []);
    return (
        <div className="productCard">
            <div className="productCard__wrapper container">
                {product ?
                    <>
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
                                    <button onClick={handleNavigate} className="second-style-button">
                                        Оставить отзыв
                                    </button>
                                </div>
                                <ReviewsList productView={false} full={true} reviews={product.attributes.reviews}/>
                            </div>
                        </div>
                        <div className="productCard__content-right">
                            <ProductsItemInner data={product} setCartItems={setCartItems} full={true}/>
                        </div>
                    </>
                    : <h2>Товар не найден</h2>}
            </div>
        </div>
    )
};

export default ProductCard;