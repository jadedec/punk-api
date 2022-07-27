import "./SearchBox.scss";

const SearchBox = ({search,handleInput}) => {

    return (
        <form className="search-box">
            <label
                htmlFor="searchBox"
                className="search-box__label">
            </label>
            <input
                type="text"
                placeholder="Search..."
                onInput={handleInput}
                value={search}
            />
        </form>
    )
}
export default SearchBox;