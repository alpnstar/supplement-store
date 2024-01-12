import React from "react";
import CartGoodsItem from "./CartGoodsItem";

const CartGoodsList = ({goods, setCartTotalPrice, setCartElements, setCartTotalCount}) => {
    return (
        <div className="cart__goods-list">
            {goods.length !== 0 ? goods.map(item => <CartGoodsItem
                key={item.id}
                goods={goods}
                setCartTotalPrice={setCartTotalPrice}
                setCartTotalCount={setCartTotalCount}
                setCartElements={setCartElements}
                data={item}/>) : <h2 className="cart__goods-empty-title">Корзина пуста</h2>}
        </div>

    )
}
export default CartGoodsList;