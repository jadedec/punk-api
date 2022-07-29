import "./Navbar.scss";
import menu from "../../assets/images/menu.svg";

import { useState } from "react";
import Menu from "../../components/Menu/Menu";
import logo from "../../assets/images/logo.png"

const Nav = ({search, handleInput, handleABVFilter,handleAcidityFilter,handleClassicFilter,handleEBCFilter,handleIBUFilter}) => {

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
        <h2 className="nav__heading">PUNK </h2>
        <img src={logo} className="nav__item" alt="punk logo" />
    </nav>
);
};

export default Nav;