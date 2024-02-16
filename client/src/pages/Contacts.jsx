import React, {useEffect} from 'react';
import '../components/Contacts/contacts.scss';

const Contacts = ({content}) => {
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
                            <span dangerouslySetInnerHTML={{
                                __html: content.phone_numbers,
                            }}></span>
                        </div>
                        <div className="contacts__addresses contacts__content-top-block">
                            <h3>Адреса</h3>
                            <span dangerouslySetInnerHTML={{
                                __html: content.addresses,
                            }}>

                            </span>
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