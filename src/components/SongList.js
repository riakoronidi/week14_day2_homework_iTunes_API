import React from 'react';

const SongList = (props) => {

  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song.title.label}</option>
  });

  const handleChange = (event) => {
    let index = event.target.value;
    props.onSongSelected(index);
  }

  return(
    <select id="song-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">List of all songs. Choose one for more info!</option>
      {options}
    </select>
  )

}

export default SongList;
