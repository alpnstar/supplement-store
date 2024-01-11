import React, {useEffect, useState} from 'react';
import starImg from "../../../../public/imgs/star.svg";
import resetImg from "../../../../public/imgs/reset.svg";
import './productsCard.scss'
import ReviewsList from "../../Reviews/ReviewsList";
import {useParams} from "react-router";
import ProductsRequest from "../../../API/productsRequest";

const ProductCard = ({data}) => {
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
                            <div className="productCard__description" dangerouslySetInnerHTML={{__html:product.attributes.description}}>

                            </div>
                            <div className="productCard__reviews">
                                <ReviewsList productView={false} reviews={product.attributes.reviews}/>
                            </div>
                        </div>
                        <div className="productCard__content-right"></div>
                    </>
                    : <h2>Товар не найден</h2>}
            </div>
        </div>
    )
};

export default ProductCard;