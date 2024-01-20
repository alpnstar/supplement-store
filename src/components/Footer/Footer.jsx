import React from 'react';
import Nav from "../Header/Nav/Nav";
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__left-content">
                    <span className="logo">
                        Mekka Shop<br/>
                    </span>
                    Copyright © 2023 Все права защищены.
                </div>
                <div className="footer__right-content">
                    <Nav footer={true}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;