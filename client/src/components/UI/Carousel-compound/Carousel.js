import React, {Children, cloneElement, useEffect, useRef, useState} from 'react'
import Page from './Page'
import {CarouselContext} from './carousel-context'
import './Carousel.scss'
import leftImg from "../../../../public/imgs/leftSliderArrow.svg";
import rightImg from "../../../../public/imgs/rightSliderArrow.svg";

const TRANSITION_DURATION = 300

export const Carousel = ({children, infinite}) => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [step, setStep] = useState(0);
    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(1190)
    const [pages, setPages] = useState([])
    const [items, setItems] = useState();
    const [clonesCount, setClonesCount] = useState({head: 0, tail: 0})
    const [transitionDuration, setTransitionDuration] = useState(300)
    const [intervalStarted, setIntervalStarted] = useState(false);
    const windowElRef = useRef()
    useEffect(() => {
        setItems(document.querySelectorAll('.item'));
    }, [pages]);
    useEffect(() => {
        if (windowElRef.current.style && items && items[step]) {
            windowElRef.current.style.height = window.getComputedStyle(items[step]).height;
        }
    }, [step]);
    useEffect(() => {
        if (infinite) {
            setPages([
                cloneElement(children[Children.count(children) - 1]), // head: 1
                ...children,
                cloneElement(children[0]), // tail: 1
            ])
            setClonesCount({head: 1, tail: 1})
            return
        }
        setPages(children)
    }, [children, infinite])
    useEffect(() => {
        if (!intervalStarted && pages.length !== 0) {
            setInterval(() => {
                handleRightArrowClick();
            }, 10000)
            setIntervalStarted(true);
        }
    }, [items]);
    useEffect(() => {
        const resizeHandler = () => {
            const windowElWidth = windowElRef.current.offsetWidth
            setWidth(windowElWidth)
            setOffset(-(clonesCount.head * width)) // to prevent wrong offset
        }
        resizeHandler()
        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    useEffect(() => {
        if (transitionDuration === 0) {
            setTimeout(() => {
                setTransitionDuration(TRANSITION_DURATION)
            }, TRANSITION_DURATION)
        }
    }, [transitionDuration])

    useEffect(() => {
        if (!infinite) return

        // с элемента 0 (clone) -> к предпоследнему (реальный)
        if (offset === 0) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset(-(width * (pages.length - 1 - clonesCount.tail)))
            }, TRANSITION_DURATION)
            setStep(pages.length - 1 - clonesCount.tail);
            return
        }
        // с элемента n (clone) -> к элементу 1 (реальный)
        if (offset === -(width * (pages.length - 1))) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset(-(clonesCount.head * width))
            }, TRANSITION_DURATION)
            setStep(1);
        }
    }, [offset, infinite, pages, clonesCount, width])

    const handleLeftArrowClick = () => {
        if (isLoaded) {
            setIsLoaded(false);
            setOffset((currentOffset) => {
                const newOffset = currentOffset + width
                return Math.min(newOffset, 0)
            })
            setStep(step > 0 ? step - 1 : step);
            setTimeout(() => setIsLoaded(true), 600)
        }
    }
    const handleRightArrowClick = () => {
        if (isLoaded) {
            setIsLoaded(false)
            setOffset((currentOffset) => {
                const newOffset = currentOffset - width
                const maxOffset = -(width * (pages.length - 1))
                return Math.max(newOffset, maxOffset)
            })
            setTimeout(() => setIsLoaded(true), 600)
            setStep(step + 1);
        }
    }

    return (
        <CarouselContext.Provider value={{width}}>
            <div className="main-container">
                <div className="window" ref={windowElRef}>

                    <div
                        className="all-pages-container"
                        style={{
                            transform: `translateX(${offset}px)`,
                            transitionDuration: `${transitionDuration}ms`,
                        }}
                    >
                        {pages}
                    </div>

                </div>
                <img className="arrow arrow-left" src={leftImg} alt="" onClick={handleLeftArrowClick}/>
                <img className="arrow arrow-right" src={rightImg} alt="" onClick={handleRightArrowClick}/>
            </div>
        </CarouselContext.Provider>
    )
}

Carousel.Page = Page
