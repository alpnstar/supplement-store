import React, {useEffect} from 'react';
import './mobileMenu.scss';
import MobileMenuListItem from "./MobileMenuListItem";


const MobileMenu = ({state, setState, title, listTitle, categories, children}) => {
    useEffect(() => {
        const bodyClassList = document.getElementsByTagName('body')[0].classList;
        if (state) bodyClassList.add('--hidden');
        return () => {
            bodyClassList.remove('--hidden')
        }
    }, [state]);
    return (
        <div className="mobileMenu">
            <div className="mobileMenu__header">
                <h2>{title}</h2>
                <div onClick={() => setState(false)} className="mobileMenu__exit">
                    <span></span><span></span>
                </div>
            </div>
            <ul className="mobileMenu__list mobileMenu__list--first">
                {categories && <MobileMenuListItem listTitle={listTitle} data={categories}/>}
                {children}
            </ul>
        </div>
    );
};
export default MobileMenu;
