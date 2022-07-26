
import "./FilterBoxes.scss";

const FilterBoxes = ({ handleFilter,label }) => {
  return (
    <form className="filter-box">
      <label
        htmlFor="filter"
        className="filter-box__label">
        {label}
      </label>

      <input
        className="filter-box__checkbox"
        type="checkbox"
        onChange={handleFilter}
      />
    </form>
  );
};

export default FilterBoxes;
