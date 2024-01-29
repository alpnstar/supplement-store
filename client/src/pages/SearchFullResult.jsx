import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import CatalogContent from "../components/Catalog/CatalogContent";
import '../components/SearchFullResult/searchFullResult.scss';
import useFetching from "../hooks/useFetching";
import ProductsRequest from "../API/productsRequest";

const SearchFullResult = () => {
    const params = useParams();
    const [filterParams, setFilterParams] = useState({'filter[name]': params.query});
    const [result, setResult] = useState();
    const [productsFetching, productsIsLoading, productsError] = useFetching(async (params = {}) => {
        const response = await ProductsRequest.allProducts.getAll(params);
        setResult(response);
    })
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
        productsFetching(filterParams);
        document.title = `${'«' + params.query + '»'}${' — Лекавит | Сеть магазинов восточных товаров'}`;
    }, []);
    useEffect(() => {
        setTotal({
            loaded: false,
        })
    }, [params.query]);


    return (
        <div>
            <div className="searchResult">
                <div className="searchResult__wrapper container">
                    <div className="searchResult__header">
                        <h2>По запросу «{params.query}» найдено {total.total && total.total} товаров</h2>
                    </div>
                    <div className="searchResult__content">
                        <CatalogContent isLoading={productsIsLoading}
                                        filterParams={filterParams}
                                        setFilterParams={setFilterParams}
                                        productsFetching={productsFetching}
                                        productsData={result}
                                        setProductsData={setResult}
                                        query={params.query}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFullResult;