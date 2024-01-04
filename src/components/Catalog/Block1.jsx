import React from 'react';
import {useNavigate} from "react-router";

const Block1 = ({category}) => {
    const navigate = useNavigate();
    return (
        <div className="catalog__block-1">
            <div
                className="catalog__path">
                <span className="catalog__path-item"
                      onClick={() => navigate('/home')}>Главная</span> / Каталог
                продукции{category.prev && category.prev.map(item => item && <span key={item.title}> / <span  className="catalog__path-item" onClick={() => navigate(item.path)}> {item.title}</span></span>)}
            </div>
            <h2 className="catalog__title-category-main">{category.title}</h2>
            <ul className="catalog__subcategories">
                {category.subCategories && category.subCategories.map(item => <li
                    key ={item.title}
                    className="catalog__subcategories-item"
                    onClick={() => navigate(item.path)}>{item.title}</li>)}
            </ul>
        </div>

    );
};

export default Block1;