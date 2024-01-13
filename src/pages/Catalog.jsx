import React from 'react';
import '../components/Catalog/catalog.scss';
import Block2 from "../components/Catalog/Block2";
import Block1 from "../components/Catalog/Block1";
import {useParams} from "react-router";

const Catalog = ({category, setCartTotalPrice, setCartTotalCount}) => {
    console.log(category)
    return (
        <div
            className="catalog">
            <div className="catalog__wrapper container">
                <Block1 category={category}/>
                <Block2
                    category={category}
                    setCartTotalCount={setCartTotalCount}
                    setCartTotalPrice={setCartTotalPrice}/>
            </div>
        </div>
    );
};

export default Catalog;