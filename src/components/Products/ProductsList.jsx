import React from 'react';
import ProductsItem from "./ProductsItem";
import './Products.scss';
const ProductsList = ({data}) => {
    return (
        <div className="products">
            {data.map(item=> {
                return <ProductsItem key ={Date.now()} data={item}/>
            })}
        </div>
    );
};
export default ProductsList;