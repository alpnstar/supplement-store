import React, {useEffect, useRef, useState} from 'react';
import ProductsRequest from "../API/productsRequest";
import '../components/Catalog/catalog.scss';
import ProductsList from "../components/Products/ProductsList";
import {useParams} from "react-router";

const Catalog = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);

    const optionsParams1 = ['Популярные', 'Новинки', 'Высокий рейтинг'];
    const optionsParams2 = ['Выберите бренд', 'Orzax Ocean B'];

    const [paramsSelected1, setParamsSelected1] = useState(optionsParams1[0]);
    const [paramsSelected2, setParamsSelected2] = useState(optionsParams2[0]);

    const [paramsShow1, setParamsShow1] = useState(false);
    const [paramsShow2, setParamsShow2] = useState(false);

    const ref1 = useRef();
    const ref2 = useRef();

    const handleOptionShow = (func) => {
        return function () {
            func(prev => !prev);

        }
    };
    const handleOptionSelect = (func, option, close) => {
        return function () {
            func(option);
            close(false);

        }
    };
    const handleClickOutside = (event) => {
        if (!document
            .querySelectorAll('.catalog__params-input-wrapper')[0]
            .contains(event.target)) {
            setParamsShow1(false);

        }
        if (!document
            .querySelectorAll('.catalog__params-input-wrapper')[1]
            .contains(event.target)) {
            setParamsShow2(false);
        }
    };

    function resetParams() {
        setParamsSelected1(optionsParams1[0]);
        setParamsSelected2(optionsParams2[0]);
    }

    async function fetchProducts() {
        const data = await ProductsRequest.getAll();
        setProducts(data);
    }

    const categoryTemplates = {
        'zdorove': 'Здоровье',
        'krasota': 'Красота',
        'parfyum': 'Парфюм',
        'dubayskie': 'Дубайский',
        'turetskie': 'Турецкий',
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div
            onClick={handleClickOutside}
            className="catalog">
            <div className="catalog__wrapper container">
                <div className="catalog__block-1">
                    <span
                        className="catalog__path">Главная / Каталог продукции{params.category2 ? ' / ' + categoryTemplates[params.category] : ''}</span>
                    <h2 className="catalog__title-category-main">{categoryTemplates[params.category2] || categoryTemplates[params.category]}</h2>
                    <ul className="catalog__subcategories">
                        {/*{subcategoriesList}*/}
                    </ul>
                </div>
                <div className="catalog__block-2">
                    <div className="catalog__params">
                        <div className="catalog__params-element-wrapper">
                            <span className="catalog__params-title">Сортировка</span>
                            <div ref={ref1} className="catalog__params-input-wrapper">
                                <span
                                    onClick={handleOptionShow(setParamsShow1)}
                                    className="catalog__params-input">{paramsSelected1}</span>
                                {paramsShow1 &&
                                    <div className="catalog__params-input-options">
                                        <ul>
                                            {optionsParams1.filter((item) => {
                                                return item !== paramsSelected1;
                                            }).map((item, index) =>
                                                <li key={index}
                                                    onClick={handleOptionSelect(setParamsSelected1, item, setParamsShow1)}>{item}</li>)}
                                        </ul>
                                    </div>}
                            </div>
                        </div>
                        <div className="catalog__params-element-wrapper">
                            <span className="catalog__params-title">Бренды</span>
                            <div className="catalog__params-input-wrapper">
                                <div ref={ref2} className="catalog__params-input-wrapper">
                                <span
                                    onClick={handleOptionShow(setParamsShow2)}
                                    className="catalog__params-input">{paramsSelected2}</span>
                                    {paramsShow2 &&
                                        <div className="catalog__params-input-options">
                                            <ul>
                                                {optionsParams2.filter((item) => {
                                                    return item !== paramsSelected2;
                                                }).map((item, index) =>
                                                    <li key={index}
                                                        onClick={handleOptionSelect(setParamsSelected2, item, setParamsShow2)}>{item}</li>)}
                                            </ul>
                                        </div>}
                                </div>

                            </div>
                        </div>
                        <div className="catalog__params-element-wrapper">
                            <span className="catalog__params-title">Сортировка</span>
                            <div className="catalog__params-setPrice">
                                <input type="text"/>
                                <input type="text"/>
                            </div>
                        </div>
                        <input onClick={resetParams} className="catalog__params-reset" type="button" value="Сбросить"/>
                    </div>
                    <ProductsList data={products}/>
                </div>
            </div>
        </div>
    );
};

export default Catalog;