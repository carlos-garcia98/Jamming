import PropTypes from 'prop-types';
import "./Track.css";
import { useCallback } from "react";

const Track = ({ track, isRemoval, onAdd, onRemove }) => {
  const addTrack = useCallback(() => {
    onAdd(track);
  }, [onAdd, track]);

  const removeTrack = useCallback(() => {
    onRemove(track);
  }, [onRemove, track]);

  const renderAction = useCallback(() => {
    if (isRemoval) {
      return (
        <button className="track__action" onClick={removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="track__action" onClick={addTrack}>
          +
        </button>
      );
    }
  }, [isRemoval, addTrack, removeTrack]);

  return (
    <div className="track">
      <h3 className="track__title">{track.name}</h3>
      <p className="track__information">
        {track.artist} | {track.album}
      </p>
      {renderAction()}
    </div>
  );
};

Track.propTypes = {
  track: PropTypes.node,
  isRemoval: PropTypes.node,
  onAdd: PropTypes.node,
  onRemove: PropTypes.node,
}

export default Track;