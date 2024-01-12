import cartRemoveImg from "../../../public/imgs/cart-remove.svg";
import React from "react";

const CartGoodsItem = ({data, goods, setCartElements, setCartTotalCount, setCartTotalPrice}) => {
    const product = data.product;
    const details = data.details;

    function increaseCount() {
        let newItems = [];
        goods.forEach(item => {
            if (item.id !== data.id) {
                newItems.push(item);
            } else {
                newItems.push({
                    ...item,
                    details: {
                        ...item.details,
                        quantity: item.details.quantity + 1,
                    }
                })
            }
        })
        updateCart(newItems, (prev) => +prev + (details.is_bulk ? product.attributes.bulk_price : product.attributes.price))
    }

    function decreaseCount() {
        let newItems = [];
        goods.forEach(item => {
            if (item.id !== data.id) {
                newItems.push(item);
            } else {
                if (details.quantity > 1) {
                    newItems.push({
                        ...item,
                        details: {
                            ...item.details,
                            quantity: item.details.quantity - 1,
                        }
                    })
                }
            }
        })
        updateCart(newItems, (prev) =>
            +prev - (details.is_bulk ? product.attributes.bulk_price : product.attributes.price))


    }

    function removeItem() {
        let newItems = goods.filter(item => item.id !== data.id);
        const curPrice = details.is_bulk ? product.attributes.bulk_price : product.attributes.price;
        updateCart(newItems, (prev) =>
            +prev - curPrice * details.quantity)

    }

    function updateCart(items, priceCalc) {
        setCartElements(items);
        localStorage.setItem('cartElements', JSON.stringify(items));

        setCartTotalCount(() => {
            const newCount = items.length;
            localStorage.setItem('cartTotalCount', newCount);
            return newCount;
        });

        setCartTotalPrice(prev => {
            const newPrice = priceCalc(prev);
            localStorage.setItem('cartTotalPrice', newPrice);
            return newPrice;
        })
    }

    return (
        <div className="cart__goods-item">
            <div className="cart__goods-item-content-left">
                <img className="cart__goods-item-img"
                     src={product.attributes.image}
                     alt=""/>
                <div className="cart__goods-item-text-content">
                    <span
                        className="cart__goods-item-title">{product.attributes.name}</span>
                    <span
                        className="cart__goods-item-viewPrice">{details.is_bulk ? 'Оптовая' : 'Розничная'} цена</span>
                </div>
            </div>
            <div className="cart__goods-item-content-right">
                <div className="cart__goods-item-counter">
                    <span onClick={() => decreaseCount()} className="cart__goods-item-counter-control">
                        -
                    </span>
                    <span className="cart__goods-item-counter-display">
                        {details.quantity}
                    </span>
                    <span onClick={() => increaseCount()} className="cart__goods-item-counter-control">
                        +
                    </span>

                </div>
                <div className="cart__goods-item-price">
                    {(details.is_bulk ? product.attributes.bulk_price : product.attributes.price) * details.quantity} ₽
                </div>
                <img onClick={removeItem} src={cartRemoveImg} alt="" className="cart__goods-item-deleteImg"/>
            </div>
        </div>
    )
}
export default CartGoodsItem