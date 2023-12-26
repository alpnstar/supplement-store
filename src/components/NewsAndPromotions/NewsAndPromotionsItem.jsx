import './newsAndPromotions.scss';
import React from 'react';

const NewsAndPromotions = ({data}) => {
    let date = parseDate(data.publicationDate);

    function parseDate(parseDate) {
        return parseDate.toString().split(' ');
    }

    return (
        <article className="newsAndPromotions__item">
            <img src={data.imgSrc} alt=""/>
            <div className="newsAndPromotions__item-content-wrapper">
                <span className="newsAndPromotions__item-title">
                {data.title}
            </span>
                <div className="newsAndPromotions__item-description">
                    <div className="newsAndPromotions__item-text">
                        {data.description}

                    </div>
                    <span className="newsAndPromotions__item-date">{`${date[2]} ${date[1]} ${date[3]}`}</span>

                </div>
            </div>
        </article>
    );
};

export default NewsAndPromotions;