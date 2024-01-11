import React, {useEffect, useState} from 'react';
import './recentNews.scss';
import NewsAndPromotionsList from "../../NewsAndPromotions/NewsAndPromotionsList";
import NewsRequest from "../../../API/newsRequest";

const RecentNews = () => {
    const [recentNews, setRecentNews] = useState([]);

    async function recentNewsFetch() {
        const response = await NewsRequest.recentNews();
        setRecentNews(response.data);
    }

    useEffect(() => {
        recentNewsFetch();
    }, []);

    return (
        <article className="homeNews">
            <div className="homeNews__wrapper container">
                <h2>Новости и акции</h2>
                {recentNews.length !== 0 ? <NewsAndPromotionsList data={recentNews}/> : 'Не найдено'}
            </div>
        </article>
    );
};

export default RecentNews;