function FilterBtn( {filterBtn } : { filterBtn: any}) {
  return (
      <div onClick={filterBtn} className="filter-btn">
        Filter
      </div>
  );
}

export default FilterBtn;
