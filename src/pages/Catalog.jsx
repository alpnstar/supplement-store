import React, {useEffect, useState} from 'react';
import ProductsRequest from "../API/productsRequest";
import expandImg from "../../public/imgs/expand.svg"
import '../components/Catalog/catalog.scss';
import ProductsList from "../components/Products/ProductsList";
import {useNavigate, useParams} from "react-router";

const Catalog = ({path}) => {
    const navigate = useNavigate();
    const params = useParams();
    const categories = categoriesParser(path);
    function categoriesParser(data) {
        const splited = data.split('/');
        return splited.filter(item => item !== 'catalog' && item !== '')
    }

    const [products, setProducts] = useState([]);

    const optionsParams1 = ['Популярные', 'Новинки', 'Высокий рейтинг'];
    const optionsParams2 = ['Выберите бренд', 'Orzax Ocean B'];

    const [paramsSelected1, setParamsSelected1] = useState(optionsParams1[0]);
    const [paramsSelected2, setParamsSelected2] = useState(optionsParams2[0]);

    const [paramsShow1, setParamsShow1] = useState(false);
    const [paramsShow2, setParamsShow2] = useState(false);

    const [startPrice, setStartPrice] = useState('');
    const [endPrice, setEndPrice] = useState('');


    function handleOptionShow(func) {
        return function () {
            func(prev => !prev);

        }
    }

    function handleOptionSelect(func, option, close) {
        return function () {
            func(option);
            close(false);

        }
    }
    const handleChangePriceParams = (func) => {
        const regex = /^[0-9\b]+$/;
        return function (event) {
            if (event.target.value === '' || regex.test(event.target.value))
                func(event.target.value);
        }
    }
    const handleClickOutside = (event) => {
        if (!document
            .querySelectorAll('.catalog__params-inputs-wrapper')[0]
            .contains(event.target)) {
            setParamsShow1(false);

        }
        if (!document
            .querySelectorAll('.catalog__params-inputs-wrapper')[1]
            .contains(event.target)) {
            setParamsShow2(false);
        }
    };

    function resetParams() {
        setParamsSelected1(optionsParams1[0]);
        setParamsSelected2(optionsParams2[0]);
        setStartPrice('');
        setEndPrice('');
    }

    async function fetchProducts() {
        const data = await ProductsRequest.getAll();
        setProducts(data);
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
                        className="catalog__path">Главная / Каталог продукции{categories.map(item => item && ` / ${item}`)}</span>
                    <h2 className="catalog__title-category-main">{params.category2 || params.category}</h2>
                    <ul className="catalog__subcategories">
                        {/*{subcategories[subcategoriesCurrent]*/}
                        {/*    && subcategories[subcategoriesCurrent]*/}
                        {/*        .filter(item => item.title !== subcategoriesCurrent && item)*/}
                        {/*        .map(item2 => <li onClick={() => navigate(item2.path)}*/}
                        {/*                          className="catalog__subcategories-item"*/}
                        {/*                          key={item2.title}>{item2.title}</li>)*/}
                        {/*}*/}
                    </ul>
                </div>
                <div className="catalog__block-2">
                    <div className="catalog__params">
                        <div className="catalog__params-element-wrapper">
                            <span className="catalog__params-title">Сортировка</span>
                            <div className="catalog__params-inputs-wrapper">
                                <span
                                    onClick={handleOptionShow(setParamsShow1)}
                                    className="catalog__params-input catalog__params-input--expand">
                                    <p>{paramsSelected1}</p>
                                    <img
                                        className={`catalog__params-expandImg ${paramsShow1 && `catalog__params-expandImg--active`}`}
                                        src={expandImg} alt=""/>
                                </span>
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
                            <div className="catalog__params-inputs-wrapper">
                                <span
                                    onClick={handleOptionShow(setParamsShow2)}
                                    className="catalog__params-input catalog__params-input--expand">
                                    {paramsSelected2}
                                    <img
                                        className={`catalog__params-expandImg ${paramsShow2 && `catalog__params-expandImg--active`}`}
                                        src={expandImg} alt=""/>
                                </span>
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
                        <div className="catalog__params-element-wrapper">
                            <span className="catalog__params-title">Сортировка</span>
                            <div className="catalog__params-inputs-wrapper catalog__params-inputs-wrapper--setPrice">
                                <div className="catalog__params-input-wrapper">
                                    <input value={startPrice} onChange={handleChangePriceParams(setStartPrice)}
                                           className="catalog__params-input catalog__params-input--setPrice"
                                           type="text"/>
                                </div>
                                <div className="catalog__params-input-wrapper">
                                    <input value={endPrice} onChange={handleChangePriceParams(setEndPrice)}
                                           className="catalog__params-input catalog__params-input--setPrice"
                                           type="text"/>
                                </div>
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