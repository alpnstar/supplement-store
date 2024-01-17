import React from 'react';
import ProductsItem from "./ProductsItem";
import './Products.scss';

const ProductsList = ({data,setCartItems}) => {
    return (
        <div className="products">
            {data.map(item=> {
                return <ProductsItem setCartItems={setCartItems} key={item.id} data={item}/>
            })}
        </div>
    );
};
export default ProductsList;