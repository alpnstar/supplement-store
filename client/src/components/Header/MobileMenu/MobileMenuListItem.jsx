import React, {useState} from 'react';
import expandImg from '../../../../public/imgs/expand.svg';
import {useNavigate} from "react-router";

const MobileMenuListItem = ({data, listTitle, setState}) => {
    const navigate = useNavigate();
    const [expand, setExpand] = useState(false);
    const haveSubCategories = data.attributes && data.attributes.subCategories && data.attributes.subCategories.length !== 0;
    const array = data.attributes && data.attributes.subCategories ? data.attributes.subCategories : data;

    function handleNavigate() {
        data.attributes && navigate(data.attributes.path);
        setState(false);
    }

    function handleSetExpand() {
        (haveSubCategories || listTitle) && setExpand(!expand)
    }

    return (
        <li className={`mobileMenu__list-item ${listTitle && 'mobileMenu__list-item--first'}`}>
            <span
                className="mobileMenu__list-item-title">
                <span onClick={() => listTitle ? handleSetExpand() : handleNavigate()}
                      className="mobileMenu__list-item-title-text">
                    {listTitle || data.attributes.name}
                </span>
                {(haveSubCategories || listTitle) &&
                    <div onClick={() => handleSetExpand()} className="mobileMenu__list-item-expand-area">
                        <img
                            className={`mobileMenu__list-item-img ${expand && 'mobileMenu__list-item-img--expanded'}`}
                            src={expandImg} alt=""/>
                    </div>
                }
            </span>
            {array && expand &&
                <ul className="mobileMenu__list">
                    {array.map(item => <MobileMenuListItem key={item.id}
                                                           setState={setState}
                                                           data={item}/>)}
                < /ul>}

        </li>
    );
};

export default MobileMenuListItem;