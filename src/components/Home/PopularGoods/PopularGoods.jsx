import React, {useEffect, useState} from 'react';
import './popularGoods.scss';
import ProductsList from "../../Products/ProductsList";
import ProductsRequest from "../../../API/productsRequest";

const PopularGoods = ({setCartTotalPrice, setCartTotalCount}) => {
    const [popularGoods, setPopularGoods] = useState([]);

    async function popularGoodsFetch() {
        const response = await ProductsRequest.popularProducts();
        setPopularGoods(response.data);
    }

    useEffect(() => {
        popularGoodsFetch();
    }, []);
    return (
        <article className="popularGoods">
            <div className="popularGoods__wrapper container">
                <h2>Популярные товары</h2>
                <ProductsList setCartTotalCount={setCartTotalCount} setCartTotalPrice={setCartTotalPrice}
                              data={popularGoods}/>
            </div>
        </article>
    );
};

export default PopularGoods;