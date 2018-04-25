import React from 'react';
import SongList from '../components/SongList';
import Song from '../components/Song';

class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleSongSelected = this.handleSongSelected.bind(this);
    this.handleIndexSelected = this.handleIndexSelected.bind(this);
    this.state = {
      songs: [],
      currentSong: null,
      currentIndex: 0
    }
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    // .then(json => {debugger})
    .then(json => this.setState({songs: json.feed.entry}));
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({currentSong: selectedSong});
  }

  handleIndexSelected(index){
    const selectedIndex = index;
    this.setState({currentIndex: selectedIndex});
  }

  render(){
    return(
      <React.Fragment>
        <h3>Top 20 UK 2018</h3>
        <SongList songs ={this.state.songs}
          onSongSelected={this.handleSongSelected} onIndexSelected={this.handleIndexSelected}>
        </SongList>
        <Song song={this.state.currentSong} chartPosition={this.state.currentIndex + 1}>
        </Song>
      </React.Fragment>
    )
  }



}

export default SongContainer;
