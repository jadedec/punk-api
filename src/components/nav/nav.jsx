import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";



const Nav = ({handleInput,searchItem}) => {
    return (
    <nav className="nav">
        <SearchBox handleInput={handleInput} searchItem={searchItem} />
    </nav>
    );
};

export default Nav;
