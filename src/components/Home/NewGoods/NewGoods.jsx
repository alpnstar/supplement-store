import React, {useEffect, useState} from 'react';
import ProductsList from "../../Products/ProductsList";
import sortByDate from "../../../utils/sortByDate";

const NewGoods = ({data, setCartTotalPrice, setCartTotalCount }) => {
    const [sortedByDate, setSortedByDate] = useState([])
    useEffect(() => {
        setSortedByDate(sortByDate.recent(data, 'publicationName').splice(0,4));
    }, [data]);


    return (
        <article className='newGoods'>
            <div className="newGoods__wrapper container">
                <h2>Новинки</h2>
                <ProductsList setCartTotalCount={setCartTotalCount} setCartTotalPrice ={setCartTotalPrice } data={sortedByDate}/>
            </div>
        </article>
    );
};

export default NewGoods;