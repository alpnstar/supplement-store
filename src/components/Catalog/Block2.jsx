import React, {useEffect, useState} from 'react';
import ProductsList from "../Products/ProductsList";
import {useNavigate, useParams} from "react-router";
import productsRequest from "../../API/productsRequest";
import CustomSelect from "../UI/Select/CustomSelect";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

const Block2 = ({category, setCartTotalPrice, setCartTotalCount}) => {
    const navigate = useNavigate();
    const [productsData, setProductsData] = useState([]);

    async function productsPrimaryFetch(params = {}) {
        const response = await productsRequest.allProducts.getAll(params);
        setProductsData(response);
    }

    async function productsFetch(url) {
        const response = await axios.get(url);
        setProductsData(response.data);
    }


    const filterOptions1 = [
        {
            title: 'Популярные',
            modifier: 'popular',
        },
        {
            title: 'Новинки',
            modifier: 'new',
        },
        {
            title: 'Высокий рейтинг',
            modifier: 'high_rating',
        }
    ];
    const filterOptions2 = ['Выберите бренд', 'Orzax Ocean B'];

    const [filterSelected1, setFilterSelected1] = useState(filterOptions1[2]);
    const [filterSelected2, setFilterSelected2] = useState(filterOptions2[0]);

    const [filterStartPrice, setFilterStartPrice] = useState(0);
    const [filterEndPrice, setFilterEndPrice] = useState(20000);

    const filterParams = {
        'sort': filterSelected1.modifier,
        'filter[price_between]': `${filterStartPrice != '' ? filterStartPrice : 0},${filterEndPrice != '' ? filterEndPrice : 20000}`,
    }
    useEffect(() => {
        productsPrimaryFetch(filterParams)
    }, [filterSelected1, filterSelected2, filterStartPrice, filterEndPrice]);

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
        setFilterStartPrice(0);
        setFilterEndPrice(20000);
    }


    return (
        <div className="catalog__block-2">
            <div className="catalog__params">
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Сортировка</span>
                    <div className="catalog__params-inputs-wrapper">
                        <CustomSelect
                            options={filterOptions1}
                            selected={filterSelected1}
                            setSelected={setFilterSelected1}/>
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
                                   type="text"
                                   maxLength={7}
                            />
                        </div>
                        <div className="catalog__params-input-wrapper">
                            <input value={filterEndPrice} onChange={handleChangePriceParams(setFilterEndPrice)}
                                   className="catalog__params-input catalog__params-input--setPrice"
                                   type="text"
                                   maxLength={7}/>
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
                <Pagination data={productsData.meta} setData={setProductsData}/>
            </div>

        </div>
    );
};

export default Block2;