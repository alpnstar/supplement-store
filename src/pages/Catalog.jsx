import React, {useEffect, useState} from 'react';
import ProductsRequest from "../API/productsRequest";
import '../components/Catalog/catalog.scss';
import ProductsList from "../components/Products/ProductsList";
import {useParams} from "react-router";

const Catalog = () => {
    const [products, setProducts] = useState([]);
    let subcategoriesList;

    const params = useParams();

    async function fetchProducts() {
        const data = await ProductsRequest.getAll();
        setProducts(data);
    }

    const titleTemplates = {
        'zdorove': 'Здоровье',
        'krasota': 'Красота',
        'parfyum': 'Парфюм',
        'dubayskie': 'Дубайский',
        'turetskie': 'Турецкий',


    }
    useEffect(() => {
        fetchProducts();
    }, []);
    // useEffect(() => {
    //     // subcategoriesList = subcategoriesList.filter(item => {
    //     //     return item !== titleTemplates[params.category2]
    //     // }
    // )
    // }, [params]);
    return (
        <div className="catalog">
            <div className="catalog__wrapper container">
                <div className="catalog__block-1">
                    <span
                        className="catalog__path">Главная / Каталог продукции{params.category2 ? ' / ' + titleTemplates[params.category] : ''}</span>
                    <h2 className="catalog__title-category-main">{titleTemplates[params.category2] || titleTemplates[params.category]}</h2>
                    <ul className="catalog__subcategories">
                        {/*{subcategoriesList}*/}
                    </ul>
                </div>
                <div className="catalog__block-2">
                    <div className="catalog__params">
                        <div className="catalog__params-element-wrapper">
                            <span className="catalog__params-title">Сортировка</span>
                            <select className="catalog__params-select" name="" id="">
                                <option value="">value1</option>
                            </select>
                        </div>
                        <div className="catalog__params-element-wrapper">
                            <span className="catalog__params-title">Бренды</span>
                            <select className="catalog__params-select" name="" id="">
                                <option value="">value1</option>
                            </select>
                        </div>
                        <div className="catalog__params-element-wrapper">
                            <span className="catalog__params-title">Сортировка</span>
                            <div className="catalog__params-setPrice">
                                <input type="text"/>
                                <input type="text"/>
                            </div>
                        </div>
                        <button>
                            Сбросить
                        </button>
                    </div>
                    <ProductsList data={products}/>
                </div>
            </div>
        </div>
    );
};

export default Catalog;