import React from 'react';
import Nav from "../Nav/Nav";
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
                    <Nav/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;