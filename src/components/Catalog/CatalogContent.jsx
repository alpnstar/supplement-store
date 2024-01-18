import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import productsRequest from '../../API/productsRequest';
import brandsRequest from '../../API/brandsRequest';
import CustomSelect from '../UI/Select/CustomSelect';
import Pagination from '../Pagination/Pagination';
import ProductsList from '../Products/ProductsList';
import Error from '../../pages/Error';

const CatalogContent = ({
                            productsData,
                            setProductsData,
                            isLoaded,
                            setIsLoaded,
                            category,
                            setCartItems,
                            query,
                        }) => {
    const navigate = useNavigate();
    const [brands, setBrands] = useState([
        {attributes: {name: 'Выберите бренд'}},
    ]);
    const [filterParams, setFilterParams] = useState(initialFilterParams());
    const firstDownload = useRef(true);

    function initialFilterParams() {
        const categoryParam = category && category.id
            ? {'filter[category_id]': category.id}
            : {};
        const queryParam = query ? {'filter[name]': query} : {};
        return {...categoryParam, ...queryParam};
    }

    async function brandsFetch() {
        const response = await brandsRequest();
        setBrands((prev) => [...prev, ...response.data]);
    }

    async function productsFetch(params = {}, func) {
        try {
            setIsLoaded(false);
            const response = await productsRequest.allProducts.getAll(params);
            setProductsData(response);
            func();
        } catch (error) {
        } finally {
            setIsLoaded(true);
        }
    }

    useEffect(() => {
        query && resetParams();
    }, [query]);

    useEffect(() => {
        if (!firstDownload.current) {
            productsFetch(filterParams);
        }
    }, [filterParams]);

    useEffect(() => {
        brandsFetch();
        productsFetch(filterParams, () => {
            firstDownload.current = false;
        });
    }, []);

    useEffect(() => {
        if (
            filterParams['filter[category_id]']
            && filterParams['filter[category_id]'] !== category.id
        )
            setFilterParams(initialFilterParams());

    }, [category]);

    const filterOptions1 = [
        {name: 'Выберите сортировку', modifier: ''},
        {name: 'Популярные', modifier: 'popular'},
        {name: 'Новинки', modifier: 'new'},
        {name: 'Высокий рейтинг', modifier: 'high_rating'},
    ];

    const [filterSelected1, setFilterSelected1] = useState(filterOptions1[0]);
    const [brandsSelected, setBrandsSelected] = useState(brands[0]);
    const [filterStartPrice, setFilterStartPrice] = useState('');
    const [filterEndPrice, setFilterEndPrice] = useState('');

    useEffect(() => {
        setFilterParams((prev) => {
            const newParams = {...prev};
            if (brandsSelected.attributes.name !== 'Выберите бренд') {
                newParams['filter[brand_id]'] = brandsSelected.id;
            } else {
                delete newParams['filter[brand_id]'];
            }
            return newParams;
        });
    }, [brandsSelected]);

    useEffect(() => {
        setFilterParams((prev) => {
            const newParams = {...prev};
            if (filterSelected1.modifier !== '') {
                newParams.sort = filterSelected1.modifier;
            } else {
                delete newParams.sort;
            }
            return newParams;
        });
    }, [filterSelected1]);

    useEffect(() => {
        setFilterParams((prev) => {
            const newParams = changePriceRange(prev, 'min', filterStartPrice);
            if (newParams['filter[price_between]'].length <= 1) {
                delete newParams['filter[price_between]'];
            }
            return newParams;
        });
    }, [filterStartPrice]);

    useEffect(() => {
        setFilterParams((prev) => {
            const newParams = changePriceRange(prev, 'max', filterEndPrice);
            if (newParams['filter[price_between]'].length <= 1) {
                delete newParams['filter[price_between]'];
            }
            return newParams;
        });
    }, [filterEndPrice]);

    function changePriceRange(params, foo, value) {
        const prices = params['filter[price_between]']
            ? params['filter[price_between]'].split(',')
            : ['', ''];

        if (foo === 'min') prices[0] = value;
        else if (foo === 'max') prices[1] = value;

        return {...params, 'filter[price_between]': prices.join(',')};
    }

    const handleChangePriceParams = (func) => (event) => {
        const regex = /^[0-9\b]+$/;
        if (event.target.value === '' || regex.test(event.target.value)) {
            func(event.target.value);
        }
    };

    function resetParams() {
        setFilterSelected1(filterOptions1[0]);
        setBrandsSelected(brands[0]);
        setFilterStartPrice('');
        setFilterEndPrice('');
        setFilterParams(initialFilterParams());
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
                            setSelected={setFilterSelected1}
                        />
                    </div>
                </div>
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Бренды</span>
                    <div className="catalog__params-inputs-wrapper">
                        <CustomSelect
                            altOptions={brands}
                            selected={brandsSelected}
                            setSelected={setBrandsSelected}
                        />
                    </div>
                </div>
                <div className="catalog__params-element-wrapper">
                    <span className="catalog__params-title">Сортировка</span>
                    <div className="catalog__params-inputs-wrapper catalog__params-inputs-wrapper--setPrice">
                        <div className="catalog__params-input-wrapper">
                            <input
                                onChange={handleChangePriceParams(setFilterStartPrice)}
                                value={filterStartPrice}
                                className="catalog__params-input catalog__params-input--setPrice"
                                type="text"
                                maxLength={7}
                            />
                        </div>
                        <div className="catalog__params-input-wrapper">
                            <input
                                onChange={handleChangePriceParams(setFilterEndPrice)}
                                value={filterEndPrice}
                                className="catalog__params-input catalog__params-input--setPrice"
                                type="text"
                                maxLength={7}
                            />
                        </div>
                    </div>
                </div>
                <input
                    onClick={resetParams}
                    className="second-style-button"
                    type="button"
                    value="Сбросить"
                />
            </div>
            <div className="catalog__products">
                {productsData && productsData.data && productsData.data.length !== 0 ? (
                    <>
                        <ProductsList
                            data={productsData.data}
                            paramsSelected1={filterSelected1}
                            paramsSelected2={brandsSelected}
                            startPrice={filterStartPrice}
                            endPrice={filterEndPrice}
                            setCartItems={setCartItems}
                        />
                        <Pagination data={productsData.meta} setData={setProductsData}/>
                    </>
                ) : isLoaded ? (
                    <Error>Продукты не найдены</Error>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default CatalogContent;
