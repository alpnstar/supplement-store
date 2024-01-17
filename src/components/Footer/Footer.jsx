import React from 'react';
import Nav from "../Nav/Nav";
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__left-content">
                    <span className="logo">
                        Mekka Shop
                    </span>
                </div>
                <div className="footer__right-content">
                    <Nav footer={true}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;