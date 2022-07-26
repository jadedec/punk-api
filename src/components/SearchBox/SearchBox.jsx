import "./SearchBox.scss";

const SearchBox = ({search,handleInput}) => {

    return (
        <form className="search-box">
            <label
                htmlFor={search}
                className="search-box__label">
                {search}
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