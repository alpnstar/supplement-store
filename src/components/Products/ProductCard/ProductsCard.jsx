import React, {useEffect, useState} from 'react';
import starImg from "../../../../public/imgs/star.svg";
import resetImg from "../../../../public/imgs/reset.svg";
import './productsCard.scss'
import ReviewsList from "../../Reviews/ReviewsList";
import {useParams} from "react-router";
import ProductsRequest from "../../../API/productsRequest";
import ProductsItemInner from "../ProductsItemInner";

const ProductCard = ({setCartTotalPrice, setCartTotalCount}) => {
    const params = useParams();
    const [product, setProduct] = useState();

    async function productFetch() {
        const response = await ProductsRequest.allProducts.getById(params.productId)
        setProduct(response.data);
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
                                <h2>Отзывы</h2>
                                <ReviewsList productView={false} reviews={product.attributes.reviews}/>
                            </div>
                        </div>
                        <div className="productCard__content-right">
                            <ProductsItemInner data={product} setCartTotalPrice={setCartTotalPrice}
                                               setCartTotalCount={setCartTotalCount} full={true}/>
                        </div>
                    </>
                    : <h2>Товар не найден</h2>}
            </div>
        </div>
    )
};

export default ProductCard;