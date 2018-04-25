import React from 'react';
import Song from './Song';

const SongList = (props) => {

  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song.title.label}</option>
  });

  const handleChange = (event) => {
    let index = event.target.value;
    props.onSongSelected(index);
    //using parseInt to return index as a number and then adding + 1 in SongContainer
    props.onIndexSelected(parseInt(index));
  }

  return(
    <select id="song-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">List of all songs. Choose one for more info!</option>
      {options}
    </select>
  )

}

export default SongList;
