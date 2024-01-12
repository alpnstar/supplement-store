import React from "react";
const Error = ({children}) => {
    return (
        <div className="error">
            <div className="error_wrapper container">
                {children}
            </div>
        </div>
    );
};
export default Error;