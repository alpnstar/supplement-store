import React from 'react';
import '../components/SuccessOrder/successOrder.scss';
import {useNavigate} from "react-router";

const SuccessOrder = () => {
    const navigate = useNavigate();
    return (
        <div className="successOrder">
            <div className="successOrder__wrapper container">
                <div className="successOrder__content">
                    <div className="successOrder__text">
                        <h1>Ваш заказ успешно оформлен!</h1>
                        <p>В ближайшее время с вами свяжется наш менеджер, чтобы уточнить детали и подтвердить заказ</p>
                    </div>
                    <button onClick={() => navigate('/home')}
                            className="successOrder__button main-style-button">Вернуться на главную
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessOrder;