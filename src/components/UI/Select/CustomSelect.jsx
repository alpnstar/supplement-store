import React, {useEffect, useRef, useState} from 'react';
import expandImg from "../../../../public/imgs/expand.svg";

const CustomSelect = ({options, selected, setSelected, disabled}) => {
    const ref = useRef();
    const [optionsShow, setOptionsShow] = useState(false);

    function handleOptionsShow(func) {
        return function () {
            func(prev => !prev);

        }
    }

    function handleOptionSelect(func, option, close) {
        return function () {
            func(option);
            close(false);

        }
    }

    function closeOptions(event, state) {
        if (!ref.current.contains(event.target) && optionsShow) {
            setOptionsShow(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeOptions);
        return () => document.removeEventListener('click', closeOptions);
    }, [optionsShow]);

    return (
        <div ref={ref} className="custom-select-wrapper">
        <span
            onClick={handleOptionsShow(setOptionsShow)}
            className="custom-select">
            {selected.title}
            {!disabled && <img
                className={`custom-select-img ${optionsShow && `custom-select-img--active`}`}
                src={expandImg} alt=""/>}
        </span>
            {!disabled && optionsShow &&
                <div className="custom-select-options">
                    <ul>
                        {options.filter((item) => {
                            return item !== selected;
                        }).map((item, index) =>
                            <li key={index}
                                onClick={handleOptionSelect(setSelected, item, setOptionsShow)}>{item.title}</li>)}
                    </ul>
                </div>
            }
        </div>

    );
};

export default CustomSelect;