import React, {useEffect, useMemo, useState} from 'react';
import ProductsList from "../Products/ProductsList";
import {useNavigate, useParams} from "react-router";
import productsRequest from "../../API/productsRequest";
import CustomSelect from "../UI/Select/CustomSelect";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import brandsRequest from "../../API/brandsRequest";

const CatalogContent = ({productsData, setProductsData, category, setCartTotalPrice, setCartTotalCount}) => {
    const navigate = useNavigate();

    const [brands, setBrands] = useState([{
        attributes: {name: 'Выберите бренд'},
    }]);
    const [filterParams, setFilterParams] = useState({
        'filter[category_id]': category.id,
    });
    useEffect(() => {
        setFilterParams(prev => {
            return {
                ...prev,
                'filter[category_id]': category.id,
            }
        })
    }, [category]);

    async function brandsFetch() {
        const response = await brandsRequest();
        setBrands(prev =>
            [...prev, ...response.data]);
    }

    async function productsPrimaryFetch(params = {}) {
        const response = await productsRequest.allProducts.getAll(params);
        setProductsData(response);
    }

    useEffect(() => {
        productsPrimaryFetch(filterParams);
    }, [filterParams]);
    useEffect(() => {
        brandsFetch();
    }, []);
    const filterOptions1 = [
        {
            name: 'Выберите сортировку',
            modifier: '',
        },
        {
            name: 'Популярные',
            modifier: 'popular',
        },
        {
            name: 'Новинки',
            modifier: 'new',
        },
        {
            name: 'Высокий рейтинг',
            modifier: 'high_rating',
        }
    ];

    const [filterSelected1, setFilterSelected1] = useState(filterOptions1[0]);
    const [brandsSelected, setBrandsSelected] = useState(brands[0]);

    const [filterStartPrice, setFilterStartPrice] = useState('');
    const [filterEndPrice, setFilterEndPrice] = useState('');


    function handleOptionSelectBrands(option, close) {
        return function () {
            setBrandsSelected(prev => {
                setFilterParams(prev => {
                    const newParams = {...prev}
                    if (option.attributes.name !== 'Выберите бренд') newParams['filter[brand_id]'] = option.id;
                    else delete newParams['filter[brand_id]'];
                    console.log(newParams);
                    productsPrimaryFetch(newParams);
                    return newParams;
                })
            });
            setBrandsSelected(option);
            close(false);

        }
    }

    function handleOptionSelectFilter1(option, close) {
        return function () {
            setFilterSelected1(prev => {
                setFilterParams(prev => {
                    const newParams = {...prev}
                    if (option.modifier !== '') newParams.sort = option.modifier;
                    else delete newParams.sort;
                    productsPrimaryFetch(newParams);
                    return newParams;
                })
            });
            setFilterSelected1(option);
            close(false);

        }
    }


    const handleChangePriceParams = (func, which) => {
        const regex = /^[0-9\b]+$/;
        return function (event) {
            if (event.target.value === '' || regex.test(event.target.value)) {
                setFilterParams(prev => {
                    const newParams = changePriceRange(prev, which, event.target.value);
                    if (newParams['filter[price_between]'].length <= 1) {
                        delete newParams["filter[price_between]"];
                    }
                    productsPrimaryFetch(newParams);
                    return newParams;

                })
            }
        }

        function changePriceRange(params, foo, value) {
            let prices = params['filter[price_between]']
                ? params['filter[price_between]'].split(',') : ['', ''];

            if (foo === 'min') prices[0] = value
            else if (foo === 'max') prices[1] = value;

            return {...params, 'filter[price_between]': prices.join(',')}
        }
    }

    function resetParams() {
        setFilterSelected1(filterOptions1[0]);
        setBrandsSelected(brands[0]);
        setFilterStartPrice('');
        setFilterEndPrice('');
        setFilterParams({'filter[category_id]': category.id})
        productsPrimaryFetch(filterParams);
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
                            altSetSelected={handleOptionSelectFilter1}/>
                    </div>
                </div>
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Бренды</span>
                    <div className="catalog__params-inputs-wrapper">
                        <CustomSelect
                            altOptions={brands}
                            selected={brandsSelected}
                            altSetSelected={handleOptionSelectBrands}
                        />
                    </div>
                </div>
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Сортировка</span>
                    <div className="catalog__params-inputs-wrapper catalog__params-inputs-wrapper--setPrice">
                        <div className="catalog__params-input-wrapper">
                            <input
                                onChange={handleChangePriceParams(setFilterStartPrice, 'min')}
                                className="catalog__params-input catalog__params-input--setPrice"
                                type="text"
                                maxLength={7}
                            />
                        </div>
                        <div className="catalog__params-input-wrapper">
                            <input onChange={handleChangePriceParams(setFilterEndPrice, 'max')}
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
                        paramsSelected2={brandsSelected}
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

export default CatalogContent;