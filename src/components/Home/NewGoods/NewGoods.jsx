import React, {useEffect, useState} from 'react';
import ProductsList from "../../Products/ProductsList";
import ProductsRequest from "../../../API/productsRequest";

const NewGoods = ({setCartTotalPrice, setCartTotalCount}) => {
    const [newGoods, setNewGoods] = useState([]);

    async function newGoodsFetch() {
        const response = await ProductsRequest.newProducts();
        setNewGoods(response.data);
    }

    useEffect(() => {
        newGoodsFetch()
    }, []);


    return (
        <article className='newGoods'>
            <div className="newGoods__wrapper container">
                <h2>Новинки</h2>
                <ProductsList setCartTotalCount={setCartTotalCount} setCartTotalPrice={setCartTotalPrice}
                              data={newGoods}/>
            </div>
        </article>
    );
};

export default NewGoods;