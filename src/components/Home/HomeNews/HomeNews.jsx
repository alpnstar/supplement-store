import React, {useState} from 'react';
import './homeNews.scss';
import NewsAndPromotionsList from "../../NewsAndPromotions/NewsAndPromotionsList";

const HomeNews = () => {
    const [newsAndPromotions, setNewsAndPromotions] = useState([
        {
            id: 1,
            imgSrc: 'https://s3-alpha-sig.figma.com/img/3655/2844/5beedf94d076c45e0aad9799ce152ed0?Expires=1704672000&Signature=Sn5ag9dhkF8pKQxJbddJsBQYK5rs~-t9OuUWDROumM051xO7wv6nzqc7nlnllV6gby8twWNraZzu9QofcN5QzM3JmBpmgMkUqte-o0Xa5PmPWoJkaj46YsXmeLDlhNSyQSoEPKkOgLESiOM~pnHG9aFfaoNRvV4USWt4~OSSoUQ2oWjM4Eb4~KjWSXQD2q01A96DFl6EW3VD3PcW~aHMvwjxdpjt0E2LXL4RhxOjDKUJl~cdslIptj1P3U1vhvqPgBnLX~DkSPhs9WIhCA44rXZeJI6IUYSJ89shLIc3JI0xjzPa93miewkJfnRBeUOCfDbaVJzWsYXFufJYjGF-Jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            title: 'Различия между БАДами и лекарствами',
            description: 'Пищевые добавки охотно используются многими людьми. Выглядят как лекарства, поэтому БАДы часто',
            publicationDate: new Date('2021-5-8:5:00'),
        }, {
            id: 2,
            imgSrc: 'https://s3-alpha-sig.figma.com/img/3655/2844/5beedf94d076c45e0aad9799ce152ed0?Expires=1704672000&Signature=Sn5ag9dhkF8pKQxJbddJsBQYK5rs~-t9OuUWDROumM051xO7wv6nzqc7nlnllV6gby8twWNraZzu9QofcN5QzM3JmBpmgMkUqte-o0Xa5PmPWoJkaj46YsXmeLDlhNSyQSoEPKkOgLESiOM~pnHG9aFfaoNRvV4USWt4~OSSoUQ2oWjM4Eb4~KjWSXQD2q01A96DFl6EW3VD3PcW~aHMvwjxdpjt0E2LXL4RhxOjDKUJl~cdslIptj1P3U1vhvqPgBnLX~DkSPhs9WIhCA44rXZeJI6IUYSJ89shLIc3JI0xjzPa93miewkJfnRBeUOCfDbaVJzWsYXFufJYjGF-Jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            title: 'Различия между БАДами и лекарствами',
            description: 'Пищевые добавки охотно используются многими людьми. Выглядят как лекарства, поэтому БАДы часто',
            publicationDate: new Date('2023-6-1:5:00'),
        }, {
            id: 3,
            imgSrc: 'https://s3-alpha-sig.figma.com/img/3655/2844/5beedf94d076c45e0aad9799ce152ed0?Expires=1704672000&Signature=Sn5ag9dhkF8pKQxJbddJsBQYK5rs~-t9OuUWDROumM051xO7wv6nzqc7nlnllV6gby8twWNraZzu9QofcN5QzM3JmBpmgMkUqte-o0Xa5PmPWoJkaj46YsXmeLDlhNSyQSoEPKkOgLESiOM~pnHG9aFfaoNRvV4USWt4~OSSoUQ2oWjM4Eb4~KjWSXQD2q01A96DFl6EW3VD3PcW~aHMvwjxdpjt0E2LXL4RhxOjDKUJl~cdslIptj1P3U1vhvqPgBnLX~DkSPhs9WIhCA44rXZeJI6IUYSJ89shLIc3JI0xjzPa93miewkJfnRBeUOCfDbaVJzWsYXFufJYjGF-Jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            title: 'Различия между БАДами и лекарствами',
            description: 'Пищевые добавки охотно используются многими людьми. Выглядят как лекарства, поэтому БАДы часто',
            publicationDate: new Date('2023-4-9:5:00'),
        }
    ]);



    return (
        <article className="homeNews">
            <div className="homeNews__wrapper container">
                <h2>Новости и акции</h2>
                <NewsAndPromotionsList data={newsAndPromotions}/>
            </div>
        </article>
    );
};

export default HomeNews;