import React from 'react';
import {useNavigate} from "react-router";

const Breadcrumbs = ({data}) => {
    const navigate = useNavigate();
    const currentCategory = data && data[data.length - 1]
    return (
        <div className="catalog__breadcrumbs">
            <div
                className="catalog__path">
                <span className="catalog__path-item"
                      onClick={() => navigate('/home')}>Главная</span> / Каталог
                продукции {data && data.map(item => {
                return (
                    !item.isSelected
                        ? <span key={item.name}> / <span className="catalog__path-item"
                                                         onClick={() => navigate('/' + item.path)}> {item.name}</span></span> : '')
            })}
            </div>
            <h2 className="catalog__title-category-main">{currentCategory && currentCategory.name}</h2>
            {currentCategory && currentCategory.subCategories.length !== 0 &&
                <ul className="catalog__subcategories">
                    {currentCategory.subCategories.map(item =>
                        <li
                            key={item.name}
                            className="second-style-button"
                            onClick={() => navigate('/' + item.path)}>{item.name}</li>)}

                </ul>

            }
        </div>

    )
        ;
};

export default Breadcrumbs;