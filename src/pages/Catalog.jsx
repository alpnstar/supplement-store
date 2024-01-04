import React from 'react';
import '../components/Catalog/catalog.scss';
import Block2 from "../components/Catalog/Block2";
import Block1 from "../components/Catalog/Block1";

const Catalog = ({category}) => {
    return (
        <div
            className="catalog">
            <div className="catalog__wrapper container">
                <Block1 category={category}/>
                <Block2 category={category}/>
            </div>
        </div>
    );
};

export default Catalog;