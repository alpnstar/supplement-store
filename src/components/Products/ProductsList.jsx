import React from 'react';
import ProductsItem from "./ProductsItem";
import './Products.scss';

const ProductsList = ({data, setCartTotalPrice, setCartTotalCount}) => {
    return (
        <div className="products">
            {data.map(item=> {
                return <ProductsItem setCartTotalCount = {setCartTotalCount} setCartTotalPrice={setCartTotalPrice} key={item.id} data={item}/>
            })}
        </div>
    );
};
export default ProductsList;