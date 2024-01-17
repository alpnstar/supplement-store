import React, {useState} from 'react';
import starImg from "../../../public/imgs/star.svg";
import resetImg from "../../../public/imgs/reset.svg";
import {useNavigate} from "react-router";

const ProductsItemInner = ({data, setCartItems, full}) => {
    const [purchaseTypeBulk, setPurchaseTypeBulk] = useState(false);
    const [counter, setCounter] = useState(1);

    const navigate = useNavigate();

    function handleChangePurchaseType() {
        return function () {
            setPurchaseTypeBulk(!purchaseTypeBulk);
        }
    }

    function handleNavigate() {
        navigate('../' + data.id);
    }

    function addToCart(isBulk) {
        const newItem = {
            id: Math.random(),
            product: {...data},
            details: {
                quantity: counter,
                is_bulk: isBulk,
            }
        }
        setCartItems(prev => {
            return presenceCheck(prev);
        })

        function presenceCheck(items) {
            const copy = [...items];

            const check = items.findIndex(item => {
                return item.product.id === newItem.product.id
                    && item.details.is_bulk === newItem.details.is_bulk;
            })
            if (check !== -1) {
                copy[check] = {
                    ...copy[check],
                    details: {
                        ...copy[check].details,
                        quantity: copy[check].details.quantity + counter,
                    }
                };
                return copy;
            }
            return [...copy, newItem]
        }
    }

    return (

        <div className="products__item-content">
            <div className="products__item-block-1">
                {data.attributes.status === 'sold-out' ?
                    <span
                        className='products__item-availability products__item-availability--sold-out'>Распродано</span>
                    : data.attributes.status === 'coming-soon'
                        ? <span
                            className='products__item-availability products__item-availability--coming-soon'>Скоро<br/> в поступлении</span>
                        : <span
                            className='products__item-availability'>В наличии</span>

                }

                <div className="products__item-reviews">
                    <img src={starImg} alt=""/>
                    {data.attributes.average_rating}/5 ({data.attributes.reviews_count} отзывов)
                </div>
            </div>
            <div className="products__item-block-2">
                <div className="products__item-left-content">
                        <span
                            className="products__item-price">{(purchaseTypeBulk ? data.attributes.bulk_price : data.attributes.price) + '₽'} </span>
                    <div className="products__item-price--prev">
                        <s>{(purchaseTypeBulk ?
                            ((data.attributes.old_bulk_price !== 0
                                && data.attributes.old_bulk_price + '₽') || '')
                            : ((data.attributes.old_price !== 0 && data.attributes.old_price + '₽') || ''))}</s>
                    </div>
                </div>

                <div className="products__item-right-content">
                            <span onClick={handleChangePurchaseType()} className="products__item-wholesale">
                                <img src={resetImg} alt=""/>
                                {purchaseTypeBulk ? (full ? 'Розничная' : 'Роз') : full ? 'Оптовая' : 'Опт'}
                            </span>
                </div>

            </div>
            <div className="products__item-block-3">
                <h3 className="products__item-title">{data.attributes.name}</h3>
                <div className="products__item-description"
                     dangerouslySetInnerHTML={{__html: data.attributes.description}}></div>
            </div>
            <div className="products__item-inputs">
                <div className="products__item-push-cart-button">
                    <button className="main-style-button"  onClick={() => {
                        addToCart(purchaseTypeBulk);
                    }}>
                        Добавить в корзину
                    </button>
                </div>
                {full &&
                    <div className="cart__goods-item-counter">
                    <span onClick={() => setCounter(prev => {
                        if (counter > 1) return prev - 1;
                        return prev;
                    })} className="cart__goods-item-counter-control">
                        -
                    </span>
                        <span className="cart__goods-item-counter-display">
                        {counter}
                    </span>
                        <span onClick={() => setCounter(prev => {
                            if (counter < 50) return prev + 1;
                            return prev;
                        })} className="cart__goods-item-counter-control">
                        +
                    </span>

                    </div>
                }
            </div>

        </div>
    );
};

export default ProductsItemInner;