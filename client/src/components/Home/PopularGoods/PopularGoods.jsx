import React, {useEffect, useState} from 'react';
import './popularGoods.scss';
import ProductsList from "../../Products/ProductsList";
import ProductsRequest from "../../../API/productsRequest";

const PopularGoods = ({setCartItems}) => {
    const [popularGoods, setPopularGoods] = useState([]);

    async function popularGoodsFetch() {
        const response = await ProductsRequest.popularProducts();
        setPopularGoods(response.data);
    }

    useEffect(() => {
        popularGoodsFetch();
    }, []);
    return (
        <>
            {
                popularGoods.length !== 0 &&
                <article className="popularGoods">
                    <div className="popularGoods__wrapper container">
                        <h2>Популярные товары</h2>
                        <ProductsList setCartItems={setCartItems}
                                      data={popularGoods}/>
                    </div>
                </article>
            }
        </>
    );
};

export default PopularGoods;