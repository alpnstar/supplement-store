import React, {useEffect, useState} from 'react';
import './homeNews.scss';
import NewsAndPromotionsList from "../../NewsAndPromotions/NewsAndPromotionsList";
import NewsRequest from "../../../API/newsRequest";
import sortByDate from "../../../utils/sortByDate";

const HomeNews = () => {
    const [newsAndPromotions, setNewsAndPromotions] = useState([]);
    const [sortedNewsAndPromotions, setSortedNewsAndPromotions] = useState([]);
    async function newsFetch() {
        const data = await NewsRequest.getAll();
        setNewsAndPromotions(data);
    }

    useEffect(() => {
        newsFetch();
    }, [])
    useEffect(() => {
        setSortedNewsAndPromotions(sortByDate.recent(newsAndPromotions, 'publicationDate').slice(0,3))
    }, [newsAndPromotions]);

    return (
        <article className="homeNews">
            <div className="homeNews__wrapper container">
                <h2>Новости и акции</h2>
                <NewsAndPromotionsList data={sortedNewsAndPromotions}/>
            </div>
        </article>
    );
};

export default HomeNews;