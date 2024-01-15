import React from 'react';

const CartFormInput = ({title, state, setState, errors, errorName}) => {
    return (
        <div className="cart__form-input-wrapper">
            <span className="cart__form-error">
                {errors[errorName] && errors[errorName]}
            </span>
            <span className="cart__form-input-title">{title}<span
                className="required-symbol">*</span></span>
            <input name="name" className="main-style-input" type="text" value={state}
                   onChange={event => setState(event.target.value)}/>
        </div>
    );
};

export default CartFormInput;