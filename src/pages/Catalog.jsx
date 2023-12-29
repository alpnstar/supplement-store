import React, {useEffect, useState} from 'react';
import ProductsRequest from "../API/productsRequest";
import '../components/Catalog/catalog.scss';
import ProductsList from "../components/Products/ProductsList";
import {useParams} from "react-router";

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const params = useParams();

    async function fetchProducts() {
        const data = await ProductsRequest.getAll();
        setProducts(data);
    }

    const titleTemplates = {
        'zdorove': 'Здоровье',
        'krasota': 'Красота',
        'parfyum': 'Парфюм',
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="catalog">
            <div className="catalog__wrapper container">
                <div className="catalog__block-1">
                    <span className="catalog__path">Главная / Каталог продукции / {titleTemplates[params.category]}</span>
                    <h2 className="catalog__title-category-main">{titleTemplates[params.category]}</h2>
                </div>
                <div className="catalog__block-2">
                    <div className="catalog__sortParams">

                    </div>
                    <ProductsList data={products}/>
                </div>
            </div>
        </div>
    );
};

export default Catalog;