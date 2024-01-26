import React, {useEffect, useState} from 'react';
import NewsRequest from "../API/newsRequest";
import NewsAndPromotionsList from "../components/NewsAndPromotions/NewsAndPromotionsList";
import Pagination from "../components/UI/Pagination/Pagination";

const NewsAndPromotions = () => {
    const [news, setNews] = useState();

    async function newsFetch() {
        const response = await NewsRequest.allNews.getAll();
        setNews(response);
    }

    useEffect(() => {
        newsFetch();
        document.title = 'Новости и акции';

    }, []);

    return (
        <div className="newsAndPromotions">
            <div className="newsAndPromotions__wrapper container">
                <h2>Новости и акции</h2>
                <div className="newsAndPromotions__content">
                    {news
                        && <NewsAndPromotionsList data={news.data}/>}
                    {news
                        && <Pagination data={news.meta} setData={setNews}/>}
                </div>

            </div>
        </div>
    );
};

export default NewsAndPromotions;