import "./Nav.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterBoxes from "../../components/FilterBoxes/FilterBoxes";



const Nav = ({ search, handleInput, handleABVFilter,handleAcidityFilter,handleClassicFilter,handleEBCFilter,handleIBUFilter}) => {
    return (
        <nav className="filter">

            <label htmlFor="filter" className="filter-search">YOUR CHOICE:</label>
            <SearchBox handleInput={handleInput} search={search} className="filter-search" />
            
            <div className="filter-boxList">
                <FilterBoxes label={"High Alcohol" } handleFilter={ handleABVFilter} className="filter-boxList__item"/>
                <FilterBoxes label={ "High Acidity"} handleFilter={ handleAcidityFilter} className="filter-boxList__item"/>
                <FilterBoxes label={ "Classic Range"} handleFilter={ handleClassicFilter} className="filter-boxList__item"/>
                <FilterBoxes label={ "High darkness"} handleFilter={ handleEBCFilter} className="filter-boxList__item"/>
                <FilterBoxes label={ "High Bitterness"} handleFilter={handleIBUFilter} className="filter-boxList__item"/>
            </div>
        </nav>
    );
};

export default Nav;
