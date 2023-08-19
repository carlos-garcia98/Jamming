import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

const Playlist = ({ playlistTracks, onRemove }) => {
  return (
    <div className="playlist">
      <input
        type="text"
        defaultValue={"New Playlist"}
        className="playlist__name"
      />
      <div className="playlist__tracklist">
        <TrackList
          tracks={playlistTracks}
          isRemoval={true}
          onRemove={onRemove}
        />
      </div>
      <button className="playlist__save">Save to Spotify</button>
    </div>
  );
};

export default Playlist;