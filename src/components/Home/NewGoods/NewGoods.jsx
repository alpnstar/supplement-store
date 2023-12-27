import React, {useEffect, useState} from 'react';
import ProductsList from "../../Products/ProductsList";
import sortByDate from "../../../utils/sortByDate";

const NewGoods = ({data}) => {
    const [sortedByDate, setSortedByDate] = useState([])
    useEffect(() => {
        setSortedByDate(sortByDate.recent(data, 'publicationName'));
    }, [data]);

   /* function sortByDate(data) {
        const sorted = [...data];
        sorted.sort((a, b) => {
            if (a.publicationDate > b.publicationDate) {
                return -1;
            } else if (a.publicationDate < b.publicationDate) {
                return 1;
            }
            return 0;
        })
        return sorted;
    }*/


    return (
        <article className='newGoods'>
            <div className="newGoods__wrapper container">
                <h2>Новинки</h2>
                <ProductsList data={sortedByDate}/>
            </div>
        </article>
    );
};

export default NewGoods;