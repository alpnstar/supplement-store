import React, {useState} from 'react';
import './ratingStars.scss';
import RatingStarsItem from "./RatingStarsItem";

const RatingStarsList = ({current, setCurrent, count = 5, edit}) => {
    const [hoverCurrent, setHoverCurrent] = useState(-1);
    const [starsCount, setStarsCount] = useState(Array(count).fill(null));
    return (
        <div className="ratingStars">
            {hoverCurrent && starsCount.map((item, index) => {
                let active = false;
                if (index <= (edit ? hoverCurrent : current)) active = true;
                if (edit)
                    return <RatingStarsItem
                        key={index}
                        index={index}
                        current={current}
                        setCurrent={setCurrent}
                        setHoverCurrent={setHoverCurrent} active={active}/>;

                return <RatingStarsItem
                    key={index}
                    index={index}
                    current={current} active={active}/>
            })}
        </div>
    );
};

export default RatingStarsList;