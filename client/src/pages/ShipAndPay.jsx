import React, {useEffect} from 'react';
import "../components/ShipAndPay/shipAndPay.scss";

const ShipAndPay = ({content}) => {
    useEffect(() => {
        document.title = 'Доставка и оплата';
    }, []);
    return (
        <div className="shipAndPay">
            <div className="shipAndPay__wrapper container">
                <h2>
                    Доставка и оплата
                </h2>
                <div className="shipAndPay__content"></div>
                <span dangerouslySetInnerHTML={{
                    __html: content,
                }}></span>

            </div>
        </div>
    )
        ;
};

export default ShipAndPay;