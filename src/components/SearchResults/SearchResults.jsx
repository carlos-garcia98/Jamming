import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

const SearchResults = ({ searchResults, onAdd }) => {
  return (
    <div className="search-results">
      <h2 className="search-results__title">Results</h2>
      <div className="search-results__tracklist">
        <TrackList tracks={searchResults} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default SearchResults;