import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import './newsAndPromotions.scss';
import NewsRequest from "../../API/newsRequest";
import Error from "../../pages/Error";

const NewsCard = () => {
    const params = useParams();
    const [data, setData] = useState();
    const [error, setError] = useState();

    async function newsFetch() {
        try {
            const response = await NewsRequest.allNews.getById(params.newsId);
            setData(response.data);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        setData();
        newsFetch();
    }, [params.newsId]);

    return (
        data ?
            <div className="newsCard">
                <div className="newsCard__wrapper container">
                    <h2 className="newsCard__title">
                        {data.title}</h2>

                    <div className="newsCard__content">
                        <div className="newsCard__img-wrapper">
                            <img src={data.preview_image} alt=""/>
                        </div>
                        <p>{data.content}</p>
                    </div>

                </div>
            </div>
            : error ? <Error>Не найдено</Error> : ''
    )
        ;
};

export default NewsCard;