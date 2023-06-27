function SearchBar( {referrence} : {referrence:any}) {
  return (
    <input className="search-bar" ref={referrence} type="search" placeholder="Search product" />
  );
}

export default SearchBar;
