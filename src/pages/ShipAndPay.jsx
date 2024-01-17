import React from 'react';
import "../components/ShipAndPay/shipAndPay.scss";

const ShipAndPay = () => {
    return (
        <div className="shipAndPay">
            <div className="shipAndPay__wrapper container">
                <h2>
                    Доставка и оплата
                </h2>
                <div className="shipAndPay__content">
                    <p>В нашем магазине есть доставка почтой, транспортными компаниями и разнообразные способы оплаты
                        заказа для вашего удобства.</p>
                    &nbsp;
                    <p>Наш сайт пользуется расчетами сайта <a href="https://postcalc.ru/">Postcalc.RU</a></p>
                </div>
            </div>
        </div>
    )
        ;
};

export default ShipAndPay;