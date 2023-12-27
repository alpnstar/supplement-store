import React from 'react';
import Navigation from "../Navigation/Navigation";
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__left-content">
                    <span className="logo">
                        Сайт для Саида
                    </span>
                </div>
                <div className="footer__right-content">
                    <Navigation/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;