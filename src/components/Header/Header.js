import "./Header.css";

const Header = ({ setCat, setSortBy, categories, sortOptions }) => {
  return (
    <nav className="product-filter">
      <h1>NoCode-Shop</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select id="cat" onChange={(v) => setCat(v.target.value)}>
            {categories.map((category) => (
              <option
                className="option"
                key={category}
                value={`${category}`}
              >{`${category}`}</option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select onChange={(v) => setSortBy(v.target.value)}>
            {sortOptions.map((sort) => (
              <option className="option" key={sort} value={sort}>
                {`${sort}`}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
