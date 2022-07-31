import "./Navbar.scss";
import menu from "../../assets/images/menu.svg";
import logo from "../../assets/images/logo.png"

import Menu from "../../components/Menu/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({search, handleInput, handleABVFilter,handleAcidityFilter,handleClassicFilter,handleEBCFilter,handleIBUFilter,reset}) => {

const [showMenu, setShowMenu] = useState(false);
const toggleMenu = () => {
    setShowMenu(!showMenu);
}

return (
    <nav className="nav">
        {showMenu && <Menu
            toggleMenu={toggleMenu}
            search={search}
            handleInput={handleInput}
            handleABVFilter={handleABVFilter}
            handleAcidityFilter={handleAcidityFilter}
            handleClassicFilter={handleClassicFilter}
            handleEBCFilter={handleEBCFilter}
            handleIBUFilter={handleIBUFilter}
        />}
        <img onClick={toggleMenu} src={menu} className="nav__item" alt="menu icon" />
        <Link to="/punk-api" className="nav__heading" onClick={reset}>
            PUNK 
        </Link>
        <img src={logo} className="nav__item" alt="punk logo" />
    </nav>
);
};

export default Nav;