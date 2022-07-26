import "./Nav.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterBoxes from "../../components/FilterBoxes/FilterBoxes";



const Nav = ({ search, handleInput, handleABVFilter,handleAcidityFilter,handleClassicFilter,handleEBCFilter,handleIBUFilter}) => {
    return (
        <nav className="nav">

            <label htmlFor="filter">YOUR CHOICE:</label>
            <SearchBox handleInput={handleInput} search={search} />
            
            <div className="filter-boxList">
                <FilterBoxes label={"High Alcohol" } handleFilter={ handleABVFilter} />
                <FilterBoxes label={ "High Acidity"} handleFilter={ handleAcidityFilter} />
                <FilterBoxes label={ "Classic Range"} handleFilter={ handleClassicFilter} />
                <FilterBoxes label={ "High darkness"} handleFilter={ handleEBCFilter} />
                <FilterBoxes label={ "High Bitterness"} handleFilter={handleIBUFilter} />
            </div>
        </nav>
    );
};

export default Nav;
