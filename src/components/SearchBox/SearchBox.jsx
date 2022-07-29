import "./SearchBox.scss";

const SearchBox = ({label,search,handleInput}) => {

    return (
        <form className="search-box">
            <label
                htmlFor={label}
                className="search-box__label">
                {label}
            </label>
            <input
                type="text"
                placeholder="Search..."
                onInput={handleInput}
                value={search}
                name={label}
                className="search-box__input"
            />
        </form>
    )
}
export default SearchBox;