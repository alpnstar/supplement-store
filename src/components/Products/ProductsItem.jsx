import React, {useState} from 'react';
import starImg from "../../../public/imgs/star.svg";
import resetImg from "../../../public/imgs/reset.svg";
import {useNavigate} from "react-router";
import ProductsItemInner from "./ProductsItemInner";

const ProductsItem = ({data, setCartTotalPrice, setCartTotalCount}) => {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('../' + data.id);
    }


    return (
        <article className="products__item">
            <div onClick={handleNavigate} className="products__item-img-wrapper">
                <img src={data.attributes.image} alt={data.attributes.name}/>
            </div>
            <ProductsItemInner data={data} setCartTotalPrice={setCartTotalPrice} setCartTotalCount={setCartTotalCount}/>
        </article>
    );
};

export default ProductsItem;