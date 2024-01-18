import React, {useEffect, useRef, useState} from 'react';
import expandImg from "../../../../public/imgs/expand.svg";

const CustomSelect = ({options, altOptions, selected, setSelected, disabled, altSetSelected}) => {
    const ref = useRef();
    const [optionsShow, setOptionsShow] = useState(false);

    function handleOptionsShow(func) {
        return function () {
            if (!disabled) {
                func(prev => !prev);
            }

        }
    }

    function handleOptionSelect(func, option, close) {
        return function () {
            func(option);
            close(false);

        }
    }

    function closeOptions(event, state) {
        if (ref.current && !ref.current.contains(event.target) && optionsShow) {
            setOptionsShow(false);
        }
    }

    useEffect(() => {
        if (optionsShow) {
            document.addEventListener('click', closeOptions);
        } else {
            document.removeEventListener('click', closeOptions);
        }
        return () => document.removeEventListener('click', closeOptions);
    }, [optionsShow]);

    return (
        <div ref={ref} className="custom-select-wrapper">
        <span
            onClick={handleOptionsShow(setOptionsShow)}
            className="custom-select">
            {!altOptions ? selected.name : selected.attributes.name}
            {!disabled && <img
                className={`custom-select-img ${optionsShow && `custom-select-img--active`}`}
                src={expandImg} alt=""/>}
        </span>
            {!disabled && optionsShow &&
                <div className="custom-select-options">
                    <ul>
                        {!altOptions && options
                            ? options.filter((item) => {
                                return item.name !== selected.name;
                            }).map((item, index) =>
                                <li key={index}
                                    onClick={!altSetSelected ? handleOptionSelect(setSelected, item, setOptionsShow) : altSetSelected(item, setOptionsShow)}>{item.name}</li>)
                            : altOptions && altOptions.filter((item) => {
                            return item.attributes.name !== selected.attributes.name;
                        }).map((item, index) =>
                            <li key={index}
                                onClick={!altSetSelected ? handleOptionSelect(setSelected, item, setOptionsShow) : altSetSelected(item, setOptionsShow)}>{item.attributes.name}</li>)}

                    </ul>
                </div>
            }
        </div>

    );
};

export default CustomSelect;