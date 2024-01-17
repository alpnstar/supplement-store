import React from 'react';
import {useNavigate} from "react-router";
import ProductsItemInner from "./ProductsItemInner";

const ProductsItem = ({data, setCartItems}) => {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('../' + data.id);
    }


    return (
        <article className="products__item">
            <div onClick={handleNavigate} className="products__item-img-wrapper">
                <img src={data.attributes.image} alt={data.attributes.name}/>
            </div>
            <ProductsItemInner data={data} setCartItems={setCartItems}/>
        </article>
    );
};

export default ProductsItem;