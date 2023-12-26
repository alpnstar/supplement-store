import React from 'react';
import starImg from "../../../public/imgs/star.svg";
import resetImg from "../../../public/imgs/reset.svg";

const ProductsItem = ({data}) => {
    return (
        <article className="products__item">
            <div className="products__item-img-wrapper">
                <img src={data.imgSrc} alt={data.title}/>
            </div>
            <div className="products__item-content">
                <div className="products__item-block-1">
                    <span
                        className={`products__item-availability ${data.availability ? '' : 'products__item-availability--false'}`}>{data.availability ? 'В наличии' : 'Нет в наличии'}</span>
                    <div className="products__item-reviews">
                        <img src={starImg} alt=""/>
                        {data.reviews.rating} ({data.reviews.total} отзывов)
                    </div>
                </div>
                <div className="products__item-block-2">
                    <div className="products__item-left-content">
                        <span className="products__item-price">{data.price} </span>
                        <div className="products__item-price--prev">
                            <s>{data.prevPrice}</s>
                        </div>
                    </div>
                    <div className="products__item-right-content">
                            <span className="products__item-wholesale">
                                <img src={resetImg} alt=""/>
                                Oпт
                            </span>
                    </div>

                </div>
                <div className="products__item-block-3">
                    <h3 className="products__item-title">{data.title}</h3>
                    <p className="products__item-description">{data.description}</p>
                </div>
                <div className="products__item-push-cart-button">
                    <button>
                        Добавить в корзину
                    </button>
                </div>

            </div>
        </article>
    );
};

export default ProductsItem;