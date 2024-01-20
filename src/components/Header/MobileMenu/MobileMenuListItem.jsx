import React, {useState} from 'react';
import expandImg from '../../../../public/imgs/expand.svg';
import {list} from "postcss";

const MobileMenuListItem = ({data, listTitle}) => {
    const [expand, setExpand] = useState(false);
    const haveSubCategories = data.attributes && data.attributes.subCategories && data.attributes.subCategories.length !== 0;
    const array = data.attributes && data.attributes.subCategories ? data.attributes.subCategories : data;
    return (
        <li className={`mobileMenu__list-item ${listTitle && 'mobileMenu__list-item--first'}`}>
            <span onClick={() => {
                (haveSubCategories || listTitle) && setExpand(!expand)
            }} className="mobileMenu__list-item-title">
                    {(haveSubCategories || listTitle) &&
                        <img className={`mobileMenu__list-item-img ${expand && 'mobileMenu__list-item-img--expanded'}`} src={expandImg} alt=""/>}
                {listTitle || data.attributes.name}
            </span>
            {array && expand &&
                <ul className="mobileMenu__list">
                    {array.map(item => <MobileMenuListItem key={item.id}
                                                           data={item}/>)}
                < /ul>}

        </li>
    );
};

export default MobileMenuListItem;