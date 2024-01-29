import React, {useEffect, useRef, useState} from 'react';
import '../components/Catalog/catalog.scss';
import CatalogContent from "../components/Catalog/CatalogContent";
import CatalogHeader from "../components/Catalog/CatalogHeader";
import useFetching from "../hooks/useFetching";
import productsRequest from "../API/productsRequest";
import axios from "axios";

const Catalog = ({category, setCartItems}) => {
    const [filterParams, setFilterParams] = useState({'filter[category_id]': category.id});
    const [productsData, setProductsData] = useState({});
    const isFirstDownload = useRef(true);
    const [productsFetching, productsIsLoading, productsError] = useFetching(
        async (params = {}, url) => {
            let data;
            if (!url) data = await productsRequest.allProducts.getAll(params);
            else {
                const response = await axios.get(url);
                data = response.data;
            }
            setProductsData(data);
            if (isFirstDownload.current) isFirstDownload.current = false;
        }
    );


    useEffect(() => {
        productsFetching(filterParams);
        document.title = category.attributes.name;
    }, []);
    return (
        <div
            className="catalog">
            <div className="catalog__wrapper container">
                <CatalogHeader category={category} productsData={productsData}/>
                <CatalogContent
                    productsData={productsData}
                    setProductsData={setProductsData}
                    productsFetching={productsFetching}
                    isLoading={productsIsLoading}
                    isFirstDownload={isFirstDownload}
                    filterParams={filterParams}
                    setFilterParams={setFilterParams}
                    category={category}
                    setCartItems={setCartItems}
                />
            </div>
        </div>
    );
};

export default Catalog;