import './SearchBar.css';
import { useState, useCallback } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState("");
  
    const handleTermChange = useCallback((e) => {
      setTerm(e.target.value);
    }, []);
  
    const search = useCallback(
      (e) => {
        e.preventDefault();
        onSearch(term);
      },
      [onSearch, term]
    );
  
    return (
      <>
        <form className="form">
          <input
            type="text"
            id="search-bar"
            name="user-search"
            className="form__search-input"
            placeholder="Search a song"
            value={term}
            onChange={handleTermChange}
          />
          <button type="submit" className="form__submit-button" onClick={search}>
            Search
          </button>
        </form>
      </>
    );
  };
  
  export default SearchBar;