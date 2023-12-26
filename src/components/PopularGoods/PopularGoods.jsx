import React, {useEffect, useState} from 'react';
import './popularGoods.scss';
import ProductsList from "../Products/ProductsList";
import productImg from '../../../public/imgs/product-img.png';
import product2Img from '../../../public/imgs/product-img-2.png';
import product3Img from '../../../public/imgs/product-img-3.png';
import product4Img from '../../../public/imgs/product-img-4.png';

const PopularGoods = () => {
    const [products, setProducts] = useState([{
            id: 1,
        imgSrc: productImg,
            title: 'ORZAX Ocean B Complex 50 capsules',
            description: 'OCEAN B-КОМПЛЕКСФормула Ocean B-Complex содержит все компоненты группы витаминов',
            availability: false,
            reviews: {
                rating: 3.2,
                total: 1,
            },
            price: '950$',
            prevPrice: '1250$',
        }, {
            id: 2,
            imgSrc: product2Img,
            title: 'ORZAX Ocean B Complex 50 capsules',
            description: 'OCEAN B-КОМПЛЕКСФормула Ocean B-Complex содержит все компоненты группы витаминов',
            availability: false,
            reviews: {
                rating: 2.1,
                total: 2,
            },
            price: '950$',
            prevPrice: '1250$',
        }, {
            id: 3,
            imgSrc: product3Img,
            title: 'ORZAX Ocean B Complex 50 capsules',
            description: 'OCEAN B-КОМПЛЕКСФормула Ocean B-Complex содержит все компоненты группы витаминов',
            availability: false,
            reviews: {
                rating: 1.9,
                total: 6,
            },
            price: '950$',
            prevPrice: '1250$',
        }, {
            id: 4,
            imgSrc: product4Img,
            title: 'ORZAX Ocean B Complex 50 capsules',
            description: 'OCEAN B-КОМПЛЕКСФормула Ocean B-Complex содержит все компоненты группы витаминов',
            availability: false,
            reviews: {
                rating: 2,
                total: 2,
            },
            price: '950$',
            prevPrice: '1250$',
        }]
    )
    const [productsSortedByRating, setProductsSortedByRating] = useState([]);

    function sortGoods(data) {
        const sortedGoods = [...data];
        sortedGoods.sort((a, b) => {
            return b.reviews.rating - a.reviews.rating;
        })
        return sortedGoods.splice(0,4);
    }

    useEffect(() => {
        setProductsSortedByRating(sortGoods(products));
    }, [products])
    return (
        <article className="popularGoods">
            <div className="popularGoods__wrapper container">
                <h2>Популярные товары</h2>
                <ProductsList data={productsSortedByRating}/>
            </div>
        </article>
    );
};

export default PopularGoods;