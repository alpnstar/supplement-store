import React, {Children, cloneElement, useEffect, useMemo, useRef, useState} from 'react'
import Page from './Page'
import {CarouselContext} from './carousel-context'
import './Carousel.scss'

const TRANSITION_DURATION = 300;
const INTERVAL_SLIDE_DELAY = 5000;
let sliderTimeout;

export const Carousel = ({children, widthInput, infinite}) => {
    const [slideDelayActive, setSlideDelayActive] = useState(true);
    const [step, setStep] = useState(0);
    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(widthInput)
    const [height, setHeight] = useState('auto');
    const [pages, setPages] = useState([])
    const [realItems, setRealItems] = useState([]);
    const [clonesCount, setClonesCount] = useState({head: 0, tail: 0})
    const [transitionDuration, setTransitionDuration] = useState(300)
    const [timeoutRevival, setTimeoutRevival] = useState(true);
    const windowElRef = useRef();

    useEffect(() => {
        const items = document.querySelectorAll('.carousel-item-img');
        const array = Array.from(items);
        setRealItems(array.slice(1, array.length - 1));
    }, [pages]);
    useEffect(() => {
        setTimeout(() => {
            if (realItems[step]) {
                let itemHeight = window.getComputedStyle(realItems[step]).height;
                setHeight(itemHeight !== '' && itemHeight !== '0px' && itemHeight !== '0' ? itemHeight : 'initial');
            }
        }, 50)
    }, [step]);
    useEffect(() => {
        const windowStyles = windowElRef.current.style;
        if (height) windowStyles.height = height;
    }, [height]);
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
        sliderTimeout = setTimeout(() => {
            if (offset !== 0) {
                handleRightArrowClick();
            }
            setTimeoutRevival(!timeoutRevival);
        }, INTERVAL_SLIDE_DELAY)


    }, [timeoutRevival]);
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
            setStep(realItems.length - 1 < 0 ? 0 : realItems.length - 1);
            return
        }
        // с элемента n (clone) -> к элементу 1 (реальный)
        if (offset === -(width * (pages.length - 1))) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset(-(clonesCount.head * width))
            }, TRANSITION_DURATION)
            setStep(0);
        }
    }, [offset, infinite, pages, clonesCount, width])

    const handleLeftArrowClick = () => {
        if (slideDelayActive) {
            setSlideDelayActive(false);
            setOffset((currentOffset) => {
                const newOffset = currentOffset + width
                return Math.min(newOffset, 0)
            })
            setStep(step === 0 ? realItems.length - 1 : step - 1);
            setTimeout(() => setSlideDelayActive(true), 600)
        }
    }
    const handleRightArrowClick = () => {
        if (slideDelayActive) {
            setSlideDelayActive(false)
            setOffset((currentOffset) => {
                const newOffset = currentOffset - width
                const maxOffset = -(width * (pages.length - 1))
                return Math.max(newOffset, maxOffset)
            })
            setStep(step === realItems.length - 1 ? 0 : step + 1);
            setTimeout(() => {
                setSlideDelayActive(true);
            }, 600)

        }
    }
    return (
        <CarouselContext.Provider value={{width}}>
            <div className="carousel-main-container">
                <div className="carousel-window" ref={windowElRef}>

                    <div
                        className="carousel-all-pages-container"
                        style={{
                            transform: `translateX(${offset}px)`,
                            transitionDuration: `${transitionDuration}ms`,
                        }}
                    >
                        {pages.map((page, index) => {
                            return <div className="carousel-item-wrapper" key={index}>
                                {page}
                            </div>
                        })}
                    </div>

                </div>
                <svg onClick={() => {
                    clearTimeout(sliderTimeout);
                    handleLeftArrowClick();
                    setTimeout(() => {
                        setTimeoutRevival(!timeoutRevival);
                    }, 3000)
                }} className="carousel-arrow carousel-arrow-left" width="25px" height="40px"
                     viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"
                     data-svg="carousel-slidenav-previous-large">
                    <polyline strokeWidth="2" points="20.527,1.5 2,20.024 20.525,38.547 "/>
                </svg>
                <svg onClick={() => {
                    clearTimeout(sliderTimeout);
                    handleRightArrowClick();
                    setTimeout(() => {
                        setTimeoutRevival(!timeoutRevival);
                    }, 3000)
                }} className="carousel-arrow carousel-arrow-right" width="25px" height="40px"
                     viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"
                     data-svg="carousel-slidenav-next-large">
                    <polyline strokeWidth="2" points="4.002,38.547 22.527,20.024 4,1.5 "/>
                </svg>
                <div className="carousel-bullet-list">
                    {realItems.length !== 0 && realItems.map((i, index) =>
                            <span key={index}
                                  className={`carousel-bullet-item ${step === index ? 'carousel-bullet-item--active' : ''}`}>
            </span>
                    )}
                </div>
            </div>
        </CarouselContext.Provider>
    )
}

Carousel.Page = Page
