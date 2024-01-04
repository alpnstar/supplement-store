import React, {useEffect, useState} from 'react';
import ProductsList from "../Products/ProductsList";
import {useNavigate} from "react-router";
import ProductsRequest from "../../API/productsRequest";
import CustomSelect from "../UI/Select/CustomSelect";

const Block2 = ({category}) => {
    const navigate = useNavigate();
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
        <div className="catalog__block-2">
            <div className="catalog__params">
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Сортировка</span>
                    <div className="catalog__params-inputs-wrapper">
                        <CustomSelect
                            options={optionsParams1}
                            selected={paramsSelected1}
                            setSelected={setParamsSelected1}/>
                    </div>
                </div>
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Бренды</span>
                    <div className="catalog__params-inputs-wrapper">
                        <CustomSelect
                            options={optionsParams2}
                            selected={paramsSelected2}
                            setSelected={setParamsSelected2}/>
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
            <ProductsList
                data={products}
                paramsSelected1={paramsSelected1}
                paramsSelected2={paramsSelected2}
                startPrice={startPrice}
                endPrice={endPrice}/>
        </div>
    );
};

export default Block2;