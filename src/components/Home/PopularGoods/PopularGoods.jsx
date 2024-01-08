import React, {useEffect, useState} from 'react';
import './popularGoods.scss';
import ProductsList from "../../Products/ProductsList";

const PopularGoods = ({data,setCartTotalPrice, setCartTotalCount }) => {
    const [productsSortedByRating, setProductsSortedByRating] = useState([]);

    function sortGoods(data) {
        if (data.length !== 0) {
            const sortedGoods = [...data];
            sortedGoods.sort((a, b) => {
                return b.reviews.rating - a.reviews.rating;
            })
            return sortedGoods.splice(0, 4);

        }
        return [];
    }

    useEffect(() => {
        setProductsSortedByRating(sortGoods(data));
    }, [data])
    return (
        <article className="popularGoods">
            <div className="popularGoods__wrapper container">
                <h2>Популярные товары</h2>
                <ProductsList setCartTotalCount={setCartTotalCount} setCartTotalPrice ={setCartTotalPrice } data={productsSortedByRating}/>
            </div>
        </article>
    );
};

export default PopularGoods;