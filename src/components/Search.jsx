const SearchBar = ({ setQuery }) => (
    <input placeholder="Search..." onChange={e => setQuery(e.target.value)} />
  );
  
  export default SearchBar;
  