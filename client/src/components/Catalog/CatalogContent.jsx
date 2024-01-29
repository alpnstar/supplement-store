import React, {useEffect, useState} from 'react';
import brandsRequest from '../../API/brandsRequest';
import CustomSelect from '../UI/Select/CustomSelect';
import Pagination from '../UI/Pagination/Pagination';
import ProductsList from '../Products/ProductsList';
import Error from '../../pages/Error';
import filterDisplayImg from '../../../public/imgs/filterDisplay.svg';
import MobileMenu from "../Header/MobileMenu/MobileMenu";
import useFetching from "../../hooks/useFetching";


const sortFilterOptions = [
    {name: 'Выберите сортировку', modifier: ''},
    {name: 'Популярные', modifier: 'popular'},
    {name: 'Новинки', modifier: 'new'},
    {name: 'Высокий рейтинг', modifier: 'high_rating'},
];
const CatalogContent = ({
                            productsData,
                            setProductsData,
                            productsFetching,
                            isLoading,
                            category,
                            setCartItems,
                            filterParams,
                            setFilterParams,
                            isFirstDownload = false,
                            query,
                        }) => {
    const [brands, setBrands] = useState([
        {attributes: {name: 'Выберите бренд'}},
    ]);
    const [brandsFetching, brandsIsLoading, brandsError] = useFetching(
        async () => {
            const response = await brandsRequest();
            setBrands((prev) => [...prev, ...response.data]);
        }
    );

    const [filterDisplay, setFilterDisplay] = useState(false);

    const [sortFilterSelected, setSortFilterSelected] = useState(sortFilterOptions[0]);
    const [filterStartPrice, setFilterStartPrice] = useState('');
    const [filterEndPrice, setFilterEndPrice] = useState('');

    const [brandsSelected, setBrandsSelected] = useState(brands[0]);


    useEffect(() => {
        query && resetParams();
    }, [query]);

    useEffect(() => {
        if (!isFirstDownload.current) productsFetching(filterParams);
    }, [filterParams]);

    useEffect(() => {
        brandsFetching();
    }, []);

    useEffect(() => {
        if (
            filterParams['filter[category_id]']
            && filterParams['filter[category_id]'] !== category.id
        )
            setFilterParams(initialFilterParams());

    }, [category]);


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
            if (sortFilterSelected.modifier !== '') {
                newParams.sort = sortFilterSelected.modifier;
            } else {
                delete newParams.sort;
            }
            return newParams;
        });
    }, [sortFilterSelected]);

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

    function initialFilterParams() {
        const categoryParam = category && category.id
            ? {'filter[category_id]': category.id}
            : {};
        const queryParam = query ? {'filter[name]': query} : {};
        return {...categoryParam, ...queryParam};
    }

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
        setSortFilterSelected(sortFilterOptions[0]);
        setBrandsSelected(brands[0]);
        setFilterStartPrice('');
        setFilterEndPrice('');
        setFilterParams(initialFilterParams());
    }

    const catalogParamsHTML = <div className="catalog__params">
        <div className="catalog__params-element-wrapper">
            <span className="catalog__params-title">Сортировка</span>
            <div className="catalog__params-inputs-wrapper">
                <CustomSelect
                    options={sortFilterOptions}
                    selected={sortFilterSelected}
                    setSelected={setSortFilterSelected}
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

    return (
        <div className="catalog__block-2">
            <button onClick={() => setFilterDisplay(true)} className="catalog__filter-display second-style-button"><img
                src={filterDisplayImg} alt=""/>
                Фильтры
            </button>
            {filterDisplay
                && <MobileMenu title='Фильтры' state={filterDisplay} setState={setFilterDisplay}>
                    {catalogParamsHTML}
                </MobileMenu>}
            {catalogParamsHTML}
            <div className="catalog__products">
                {productsData && productsData.data && productsData.data.length !== 0 ? (
                    <>
                        <ProductsList
                            data={productsData.data}
                            paramsSelected1={sortFilterSelected}
                            paramsSelected2={brandsSelected}
                            startPrice={filterStartPrice}
                            endPrice={filterEndPrice}
                            setCartItems={setCartItems}
                        />
                        <Pagination data={productsData.meta} setData={setProductsData}/>
                    </>
                ) : isLoading ? (
                    <Error>Продукты не найдены</Error>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default CatalogContent;
