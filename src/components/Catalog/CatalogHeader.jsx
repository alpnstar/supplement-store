import React from 'react';
import {useNavigate} from "react-router";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const CatalogHeader = ({productsData}) => {
    const navigate = useNavigate();

    return (
        productsData.breadcrumbs && <Breadcrumbs data={productsData.breadcrumbs}/>
    );
};

export default CatalogHeader;