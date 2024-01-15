import React from 'react';
import CustomSelect from "../UI/Select/CustomSelect";
import {options} from "axios";

const CartFormSelect = ({title, selected, setSelected, options, errors, errorName, disabled}) => {
    return (
        <div className="cart__form-input-wrapper">
            <span className="cart__form-error">{errors[errorName] && errors[errorName]}</span>
            <span className="cart__form-input-title">{title}<span
                className="required-symbol">*</span></span>
            <CustomSelect options={options} selected={selected}
                          setSelected={setSelected} disabled={disabled}/>
        </div>

    );
};

export default CartFormSelect;