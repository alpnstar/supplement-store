import React from 'react';
import '../components/Contacts/contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__wrapper container">
                <h2>
                    Контакты
                </h2>
                <div className="contacts__content">
                    <div className="contacts__content-top">
                        <div className="contacts__phones contacts__content-top-block">
                            <h3>Номера телефонов</h3>
                            <p>+7 (988) 210-20-20 (WhatsApp)</p>
                            <p>+7 (928) 584-80-80</p>
                            <p>8 (800) 505-59-02</p>
                        </div>
                        <div className="contacts__addresses contacts__content-top-block">
                            <h3>Адреса</h3>
                            <p>г. Кизилюрт, ТЦ «Дагбаш», ул. Вишневского, д.13</p>
                            <p>г. Махачкала, Учительская, д.2</p>
                        </div>
                    </div>
                    <div className="contacts__content-bottom">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;