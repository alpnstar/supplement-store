import React from 'react';
import {useNavigate} from "react-router";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const CatalogHeader = ({productsData}) => {
    const navigate = useNavigate();

    return (
        // <Breadcrumbs data= {productsData.breadcrumbs} />
        <div className="catalog__block-1">
            {productsData.breadcrumbs && <Breadcrumbs data={productsData.breadcrumbs}/>}
        </div>

    );
};

export default CatalogHeader;