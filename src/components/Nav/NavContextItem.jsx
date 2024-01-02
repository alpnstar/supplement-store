import React, {useState} from "react";
import {useNavigate} from "react-router";
import expandSvg from "../../../public/imgs/expand.svg";
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
                onClick={data.path && makeNavigateHandle(data.path)}
                className="nav__context-item-wrapper">
                {data.title}
                {data.subCategories && <img src={expandSvg} alt=""/>}
            </div>
            {data.subCategories && <NavContext key={Math.random()} state={state} data={data.subCategories}/>
            }
        </li>
    )
}
export default NavContextItem;