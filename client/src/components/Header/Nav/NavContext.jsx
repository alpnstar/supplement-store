import React, {useState} from "react";
import NavContextItem from "./NavContextItem";

const NavContext = ({categories, state}) => {
    const [thisState, setThisState] = useState(false);
    const currentState = state != undefined ? state : thisState;
    return (
        <div
            className={`nav__context ${currentState && `nav__context--active`}`}>
            <div className="nav__context-wrapper">
                <ul>
                    {categories && categories.map(item => <NavContextItem key={item.id} data={item}/>)}
                </ul>
            </div>
        </div>

    )
}
export default NavContext;