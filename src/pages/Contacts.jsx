import React, {useEffect} from 'react';
import '../components/Contacts/contacts.scss';

const Contacts = () => {
    useEffect(() => {
        document.title = 'Контакты';
    }, []);

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
                            <a href="https://api.whatsapp.com/send/?phone=%2B79887212020&text&type=phone_number&app_absent=0">
                                <p>+7 (988) 210-20-20 (WhatsApp)</p></a>
                            <a href="tel:+79285848080"><p>+7 (928) 584-80-80</p></a>
                            <a href="tel:+78005055902"><p>+7 (800) 505-59-02</p></a>
                        </div>
                        <div className="contacts__addresses contacts__content-top-block">
                            <h3>Адреса</h3>
                            <a href="https://yandex.ru/maps/21519/kizilyurt/house/ulitsa_vishnevskogo_13/YE8YfgFlT00EQFppfX5xdXxrYQ==/inside/?ll=46.865921%2C43.204017&tab=inside&z=20.09">
                                <p>г. Кизилюрт, ТЦ «Дагбаш», ул. Вишневского, д.13</p></a>
                            <a href="https://yandex.ru/maps/org/mekka/172906795041/?ll=47.421713%2C42.973153&z=16.73">
                                <p>г. Махачкала, Учительская, д.2</p></a>
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