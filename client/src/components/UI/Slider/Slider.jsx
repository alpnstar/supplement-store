import React, {useEffect, useRef, useState} from 'react';
import './slider.scss';
import leftImg from "../../../../public/imgs/leftSliderArrow.svg";
import rightImg from "../../../../public/imgs/rightSliderArrow.svg";

const Slider = ({items = []}) => {
    const [position, setPosition] = useState(0);
    useEffect(() => {
        const list = document.querySelector('.slider__list');
        const elem = document.querySelectorAll('.slider__item')[position];
        list.style.left = position * -100 + '%';
        const elemHeight = window.getComputedStyle(elem).height;
        if (elemHeight > '20px') {
            list.style.height = elemHeight;
        }
    }, [position]);

    return (
        <div className="slider">
            <span className="slider__list-arrow-left" onClick={() => position > 0 && setPosition(prev => prev - 1)}>
                <img src={leftImg} alt=""/>
            </span>
            <span className="slider__list-arrow-right"
                  onClick={() => {
                      if (position < items.length - 1) {
                          setPosition(prev => prev + 1)
                      }else {
                          setPosition(0)
                      }
                  }}>
                <img src={rightImg} alt=""/>
            </span>
            <div className="slider__list slider__list--onHover">


            </div>
        </div>
    );
};

export default Slider;