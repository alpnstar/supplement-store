import React from 'react';
import starImg from "../../../public/imgs/star.svg";
import resetImg from "../../../public/imgs/reset.svg";

const ProductsItem = ({data, setCartTotalPrice, setCartTotalCount}) => {
    function addToCart(PurchaseType) {
        const newItem = {
            product: {...data},
            details: {
                count: 1,
                PurchaseType: PurchaseType,
            }
        }
        const cartItems = getCartElements();
        presenceCheck();
        setPrice();
        localStorage.setItem('cartElements', JSON.stringify(cartItems));


        setCartTotalCount(prev => {
            const newValue = +prev + 1;
            localStorage.setItem('cartTotalCount', newValue);
            return newValue;
        });

        function getCartElements() {
            !localStorage.getItem('cartElements')
            && localStorage.setItem('cartElements', '[]');
            return JSON.parse(localStorage.getItem('cartElements'));
        }

        function presenceCheck() {
            const check = cartItems.findIndex(item => {
                return item.product.id === newItem.product.id;
            })
            if (check !== -1) {
                const elem = cartItems[check];
                cartItems[check] = {
                    ...elem,
                    details: {
                        ...elem.details,
                        count: elem.details.count + 1,
                    }
                };
                return;
            }
            cartItems.push(newItem);
        }

        function setPrice() {
            const getPrice = localStorage.getItem('cartTotalPrice');
            !getPrice && localStorage.setItem('cartTotalPrice', '0');
            let parsedPrice = JSON.parse(getPrice);
            parsedPrice = +parsedPrice + data.attributes.price;
            setCartTotalPrice(parsedPrice);
            localStorage.setItem('cartTotalPrice', parsedPrice);

        }

    }

    return (
        <article className="products__item">
            <div className="products__item-img-wrapper">
                <img src={data.attributes.image} alt={data.attributes.name}/>
            </div>
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
                        <span className="products__item-price">{data.attributes.price + '₽'} </span>
                        <div className="products__item-price--prev">
                            <s>{data.attributes.old_price + '₽'}</s>
                        </div>
                    </div>

                    <div className="products__item-right-content">
                            <span onClick={() => {
                                addToCart('bulk');
                            }} className="products__item-wholesale">
                                <img src={resetImg} alt=""/>
                                Oпт
                            </span>
                    </div>

                </div>
                <div className="products__item-block-3">
                    <h3 className="products__item-title">{data.attributes.name}</h3>
                    <div className="products__item-description"
                         dangerouslySetInnerHTML={{__html: data.attributes.description}}></div>
                </div>
                <div className="products__item-push-cart-button">
                    <button onClick={() => {
                        addToCart('retail');
                    }}>
                        Добавить в корзину
                    </button>
                </div>

            </div>
        </article>
    );
};

export default ProductsItem;