import React from 'react';
import '../components/Catalog/catalog.scss';
import Block2 from "../components/Catalog/Block2";
import Block1 from "../components/Catalog/Block1";

const Catalog = ({products, category, setCartTotalPrice, setCartTotalCount}) => {
    return (
        <div
            className="catalog">
            <div className="catalog__wrapper container">
                <Block1 category={category}/>
                <Block2 products = {products} setCartTotalCount={setCartTotalCount} setCartTotalPrice={setCartTotalPrice}/>
            </div>
        </div>
    );
};

export default Catalog;