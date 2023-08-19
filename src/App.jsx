import { useCallback, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import mockTracks from "./util/mock-data";
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playListTracks, setPlayListTracks] = useState([]);

  const search = useCallback((term) => {
    if (!term) return setSearchResults([]);
    const results = mockTracks.tracks.filter((track) => {
      return track.name.toLowerCase().includes(term.toLowerCase());
    });
    setSearchResults(results);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playListTracks.find((savedTrack) => savedTrack.id === track.id)) {
        return;
      }

      setPlayListTracks((prev) => [...prev, track]);
    },
    [playListTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlayListTracks((prev) => {
      return prev.filter((savedTrack) => savedTrack.id !== track.id);
    });
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="header__title">
          Ja<span>mmm</span>ing
        </h1>
      </header>
      <SearchBar className="search-bar" onSearch={search} />
      <div className="app-playlist">
        <SearchResults
          className="search-results"
          searchResults={searchResults}
          onAdd={addTrack}
        />
        <Playlist
          className="playlist"
          playlistTracks={playListTracks}
          onRemove={removeTrack}
        />
      </div>
    </>
  );
};

export default App;