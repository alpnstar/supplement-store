import React, {useState} from "react";
import '../components/Error/error.scss';

const Error = ({children}) => {
    const [display, setDisplay] = useState(false);
    setTimeout(() => {
        setDisplay(true);
    },700)
    return (
        <div className="error">
            <div className="error__wrapper container">
                {display ? <h2>{children}</h2> : ''}
            </div>
        </div>
    );
};
export default Error;