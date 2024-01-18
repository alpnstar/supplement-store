import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import ProductsRequest from "../API/productsRequest";
import CatalogContent from "../components/Catalog/CatalogContent";
import '../components/SearchFullResult/searchFullResult.scss';

const SearchFullResult = () => {
    const params = useParams();

    const [result, setResult] = useState();
    const [isLoaded, setIsLoaded] = useState(true);
    const [total, setTotal] = useState({
        loaded: false,
    });
    useEffect(() => {
        if (!total.loaded && result) {
            setTotal(prev => {
                return {
                    loaded: true,
                    total: result.meta.total,
                }

            })

        }
    }, [result]);
    useEffect(() => {
        document.title = `${'«' + params.query + '»'}${' — Mekka Shop | Сеть магазинов восточных товаров'}`;
    }, []);


    return (
        <div>
            <div className="searchResult">
                <div className="searchResult__wrapper container">
                    <div className="searchResult__header">
                        <h2>По запросу «{params.query}» найдено {total.total && total.total} товаров</h2>
                    </div>
                    <div className="searchResult__content">
                        <CatalogContent isLoaded={isLoaded} setIsLoaded={setIsLoaded} setProductsData={setResult}
                                        productsData={result} query={params.query}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFullResult;