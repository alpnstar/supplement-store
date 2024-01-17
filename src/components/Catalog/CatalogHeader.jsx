import React from 'react';
import {useNavigate} from "react-router";

const CatalogHeader = ({productsData}) => {
    const navigate = useNavigate();
    const currentCategory = productsData.breadcrumbs && productsData.breadcrumbs[productsData.breadcrumbs.length - 1]

    return (
        <div className="catalog__block-1">
            <div
                className="catalog__path">
                <span className="catalog__path-item"
                      onClick={() => navigate('/home')}>Главная</span> / Каталог
                продукции {productsData.breadcrumbs && productsData.breadcrumbs.map(item => {
                return (
                    !item.isSelected
                        ? <span key={item.name}> / <span className="catalog__path-item"
                                                         onClick={() => navigate('/' + item.path)}> {item.name}</span></span> : '')
            })}
            </div>
            <h2 className="catalog__title-category-main">{currentCategory && currentCategory.name}</h2>
            <ul className="catalog__subcategories">
                {currentCategory && currentCategory.subCategories.map(item => <li
                    key={item.name}
                    className="second-style-button"
                    onClick={() => navigate('/' + item.path)}>{item.name}</li>)}
            </ul>
        </div>

    );
};

export default CatalogHeader;