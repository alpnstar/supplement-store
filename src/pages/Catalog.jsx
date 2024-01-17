import React, {useState} from 'react';
import '../components/Catalog/catalog.scss';
import CatalogContent from "../components/Catalog/CatalogContent";
import CatalogHeader from "../components/Catalog/CatalogHeader";
import {useParams} from "react-router";

const Catalog = ({category, setCartItems}) => {
    const [productsData, setProductsData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div
            className="catalog">
            <div className="catalog__wrapper container">
                <CatalogHeader category={category} productsData={productsData}/>
                <CatalogContent
                    productsData={productsData}
                    setProductsData={setProductsData}
                    isLoaded={isLoaded}
                    setIsLoaded={setIsLoaded}
                    category={category}
                    setCartItems={setCartItems}
                />
            </div>
        </div>
    );
};

export default Catalog;