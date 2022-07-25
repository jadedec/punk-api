import "./SearchBox.scss";

const SearchBox = ({searchItem,handleInput}) => {

    return (
        <form className="search-box">
            <label
                htmlFor={searchItem}
                className="search-box__label">
                {searchItem}
            </label>
            <input
                type="text"
                placeholder="Search..."
                onInput={handleInput}
                value={searchItem}
            />
        </form>
    )
}
export default SearchBox;