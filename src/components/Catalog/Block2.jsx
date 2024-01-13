import React, {useEffect, useState} from 'react';
import ProductsList from "../Products/ProductsList";
import {useNavigate} from "react-router";
import productsRequest from "../../API/productsRequest";
import CustomSelect from "../UI/Select/CustomSelect";
import axios from "axios";

const Block2 = ({setCartTotalPrice, setCartTotalCount}) => {
    const navigate = useNavigate();
    const [productsData, setProductsData] = useState([]);

    async function productsPrimaryFetch(url, params = {}) {
        const response = await productsRequest.allProducts.getAll(params);
        setProductsData(response);
    }

    async function productsFetch(url) {
        const response = await axios.get(url);
        setProductsData(response.data);
    }

    useEffect(() => {
        productsPrimaryFetch();
    }, []);
    const filterOptions1 = [
        {
            title: 'Популярные',
            modifier: 'sort[popular]',
        },
        {
            title: 'Новинки',
            modifier: 'sort[new]',
        },
        {
            title: 'Высокий рейтинг',
            modifier: 'sort[high_rating]',
        }
    ];
    const filterOptions2 = ['Выберите бренд', 'Orzax Ocean B'];

    const [filterSelected1, setFilterSelected1] = useState(filterOptions1[0]);
    const [filterSelected2, setFilterSelected2] = useState(filterOptions2[0]);
    const params = {
        [filterSelected1.modifier]: '',
        [filterSelected2.modifier]: '',
    }
    console.log(params)
    const [filterStartPrice, setFilterStartPrice] = useState('');
    const [filterEndPrice, setFilterEndPrice] = useState('');


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

    function resetParams() {
        setFilterSelected1(filterOptions1[0]);
        setFilterSelected2(filterOptions2[0]);
        setFilterStartPrice('');
        setFilterEndPrice('');
    }


    return (
        <div className="catalog__block-2">
            <div className="catalog__params">
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Сортировка</span>
                    <div className="catalog__params-inputs-wrapper">
                        {/*<CustomSelect
                            options={filterOptions1}
                            selected={filterSelected1}
                            setSelected={setFilterSelected1}/>*/}
                    </div>
                </div>
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Бренды</span>
                    <div className="catalog__params-inputs-wrapper">
                        {/*<CustomSelect
                            options={filterOptions2}
                            selected={filterSelected2}
                            setSelected={setFilterSelected2}/>*/}
                    </div>
                </div>
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Сортировка</span>
                    <div className="catalog__params-inputs-wrapper catalog__params-inputs-wrapper--setPrice">
                        <div className="catalog__params-input-wrapper">
                            <input value={filterStartPrice} onChange={handleChangePriceParams(setFilterStartPrice)}
                                   className="catalog__params-input catalog__params-input--setPrice"
                                   type="text"/>
                        </div>
                        <div className="catalog__params-input-wrapper">
                            <input value={filterEndPrice} onChange={handleChangePriceParams(setFilterEndPrice)}
                                   className="catalog__params-input catalog__params-input--setPrice"
                                   type="text"/>
                        </div>
                    </div>
                </div>
                <input onClick={resetParams} className="catalog__params-reset" type="button" value="Сбросить"/>
            </div>
            <div className="catalog__products">
                {productsData.length !== 0
                    && <ProductsList
                        data={productsData.data}
                        paramsSelected1={filterSelected1}
                        paramsSelected2={filterSelected2}
                        startPrice={filterStartPrice}
                        endPrice={filterEndPrice}
                        setCartTotalCount={setCartTotalCount}
                        setCartTotalPrice={setCartTotalPrice}
                    />}
                <div className="catalog__products-pagination">
                    {productsData.meta && productsData.meta.links.map((item, index, array) => {
                        return (
                            <div
                                key={item.label}
                                className={`catalog__products-pagination-item-wrapper ${index === 0 || index === array.length - 1 ? 'catalog__products-pagination-item-wrapper--control-wrapper' : ''}`}>
                                <span
                                    className={`catalog__products-pagination-item ${item.active ? `catalog__products-pagination-item--active` : ''}`}
                                    onClick={() => {
                                        item.url && productsFooFetch(item.url);
                                    }}>{item.label}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default Block2;