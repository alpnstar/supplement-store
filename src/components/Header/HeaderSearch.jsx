import React, {useEffect, useState} from 'react';
import ProductsRequest from "../../API/productsRequest";

const HeaderSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const [result, setResult] = useState();

    async function productFetch(value) {
        const response = await ProductsRequest.allProducts.getBySearch(value);
        setResult(response.data);
    }

    return (
        <div className="header__search">
            <input value={searchValue} onChange={(event) => {
                setSearchValue(event.target.value);
                productFetch(event.target.value);
            }}
                   placeholder="Введите название или артикул" type="text"/>
            <div className="header__search-result">

            </div>
        </div>
    );
};

export default HeaderSearch;