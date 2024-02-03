import React, {useContext} from 'react';
import {CarouselContext} from '../carousel-context'
import './Page.scss'

export const Page = ({children}) => {
    const {width} = useContext(CarouselContext)
    return (
        <div
            className="page__main-container"
            style={{
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
            }}
        >
            {children}
        </div>
    )
}
