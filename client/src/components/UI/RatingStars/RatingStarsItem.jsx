import React from 'react';

const RatingStarsItem = ({active, index, setHoverCurrent, current, setCurrent}) => {
    return (
        <div

            className={`ratingStars__item ${active ? 'ratingStars__item--active' : ''}`}>
            <svg
                onMouseEnter={() => {
                    setHoverCurrent && setHoverCurrent(index)
                }}
                onMouseLeave={() => setHoverCurrent && setHoverCurrent(current !== null ? current - 1 : -1)}
                onClick={() => {
                    if (setCurrent) {
                        if (current - 1 === index) return setCurrent(-1);
                        setCurrent(index + 1);
                    }
                }}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.788 3.21009C11.236 2.13309 12.764 2.13309 13.212 3.21009L15.294 8.21609L20.698 8.65009C21.862 8.74309 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74309 3.302 8.65009L8.706 8.21609L10.788 3.21009Z"/>
            </svg>
        </div>
    );
};

export default RatingStarsItem;