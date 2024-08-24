import css from './SearchBox.module.css'
const SearchBox = ({ filtredContactValue, handleChange }) => {

  return (
    <div className={css.filterField}>
      <h3 className="filterFieldTitle">Find contact by name</h3>
      <input
        className={css.filterFieldInput}
        onChange={handleChange}
        type="text"
        placeholder="Enter name"
        value={filtredContactValue}
      />
    </div>
  );
};

export default SearchBox;
