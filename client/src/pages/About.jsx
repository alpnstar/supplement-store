import React, {useEffect} from 'react';
import '../components/About/about.scss';

const About = ({content}) => {
    useEffect(() => {
        document.title = 'О магазине';
    }, []);

    return (
        <div className="about">
            <div className="about__wrapper container">
                <h2>О магазине</h2>
                <div className="about__content">
                    <span dangerouslySetInnerHTML={{
                        __html: content,
                    }}></span>

                </div>
            </div>
        </div>
    );
};

export default About;