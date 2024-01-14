import React, {useState} from 'react';
import '../components/Catalog/catalog.scss';
import Block2 from "../components/Catalog/Block2";
import Block1 from "../components/Catalog/Block1";
import {useParams} from "react-router";

const Catalog = ({category, setCartTotalPrice, setCartTotalCount}) => {
    const [productsData, setProductsData] = useState([]);
    return (
        <div
            className="catalog">
            <div className="catalog__wrapper container">
                <Block1 category={category} productsData = {productsData}/>
                <Block2
                    productsData={productsData}
                    setProductsData={setProductsData}
                    category={category}
                    setCartTotalCount={setCartTotalCount}
                    setCartTotalPrice={setCartTotalPrice}/>
            </div>
        </div>
    );
};

export default Catalog;