import React, {useState} from 'react';
import '../components/Catalog/catalog.scss';
import CatalogContent from "../components/Catalog/CatalogContent";
import CatalogHeader from "../components/Catalog/CatalogHeader";
import {useParams} from "react-router";

const Catalog = ({category, setCartTotalPrice, setCartTotalCount}) => {
    const [productsData, setProductsData] = useState([]);
    return (
        <div
            className="catalog">
            <div className="catalog__wrapper container">
                <CatalogHeader category={category} productsData = {productsData}/>
                <CatalogContent
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