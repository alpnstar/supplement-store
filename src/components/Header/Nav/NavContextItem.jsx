import React, {useState} from "react";
import {useNavigate} from "react-router";
import expandSvg from "../../../../public/imgs/expand.svg";
import NavContext from "./NavContext";

const NavContextItem = ({data}) => {
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    function makeNavigateHandle(param) {
        return function () {
            navigate(param);
        }
    }

    return (
        <li
            onMouseEnter={() => setState(true)}
            onMouseLeave={() => setState(false)}
            className="nav__context-item">
            <div
                onClick={data.attributes.path && makeNavigateHandle(data.attributes.path)}
                className="nav__context-item-wrapper">
                {data.attributes.name}
                {data.attributes.subCategories.length !== 0 && <img src={expandSvg} alt=""/>}
            </div>
            {data.attributes.subCategories.length != 0 &&
                <NavContext state={state} categories={data.attributes.subCategories}/>
            }
        </li>
    )
}
export default NavContextItem;