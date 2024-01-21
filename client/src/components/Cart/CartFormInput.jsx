import React, {useEffect} from 'react';

const CartFormInput = ({
                           title,
                           state,
                           setState,
                           defaultCheck,
                           errors,
                           errorName,
                           type = 'text',
                           handleChange,
                           field,
                           field2,
                           isFieldName,
                           isSurName
                       }) => {
    useEffect(() => {
        handleChange(state, defaultCheck, field, field2, isFieldName, isSurName);
    }, [state]);
    return (
        <div className="cart__form-input-wrapper">
            <span className="form-input-error">
                {errors[errorName] && errors[errorName]}
            </span>
            <span className="cart__form-input-title">{title}<span
                className="required-symbol">*</span></span>
            <input name="name" className="main-style-input" type={type} value={state}
                   onChange={event => setState(event.target.value)}/>
        </div>
    );
};

export default CartFormInput;