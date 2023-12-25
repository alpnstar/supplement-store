import React, {useState} from 'react';
import './popularGoods.scss';
import ProductsList from "../Products/ProductsList";

const PopularGoods = () => {
    const [products, setProducts] = useState([{
            imgSrc: './images/product-img.png',
            title: 'ORZAX Ocean B Complex 50 capsules',
            description: 'OCEAN B-КОМПЛЕКСФормула Ocean B-Complex содержит все компоненты группы витаминов',
            availability: false,
            reviews: {
                rating: '4.7/5',
                total: 5,
            },
            price: 950,
            prevPrice: 1250,
        }]
    )
    return (
        <article className="popularGoods">
            <div className="popularGoods__wrapper container">
                <h2>Популярные товары</h2>
                <ProductsList data={products}/>
            </div>
        </article>
    );
};

export default PopularGoods;