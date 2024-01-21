import React from "react";
import CartGoodsItem from "./CartGoodsItem";

const CartGoodsList = ({cartItems, setCartItems}) => {
    return (
        <div className="cart__goods-list">
            {cartItems.length !== 0 ? cartItems.map(item =>
                <CartGoodsItem
                    key={item.id}
                    cartItems={cartItems}
                    setCartElements={setCartItems}
                    data={item}/>) : <h2 className="cart__goods-empty-title">Корзина пуста</h2>}
        </div>

    )
}
export default CartGoodsList;