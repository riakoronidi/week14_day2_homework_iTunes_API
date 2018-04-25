import React from 'react';

const Song = (props) => {
  if(!props.song) return null;


    const images = [];
    for(let image of props.song['im:image']){
      images.push(image.label)
    };
//this is to return all the images from the images array in to the screen
    // const imageArray = images.map(image => {
    //   return <img src={image}/>
    // })


// this is to get the index for putting the song in the chart position
    // const getIndex = () => {
    //   const result = props.index + 1
    //   return result;
    // }

  return(
    <article>
      <ul>
        <ol>Song title: {props.song['im:name'].label}</ol>
        <ol>Artist: {props.song['im:artist'].label}</ol>
        <ol >Number in charts: {props.chartPosition}</ol>
        <ol><img style={{width:"170px", margin: "10px"}} src={images[2]} alt={props.song['im:name'].label}/></ol>
        {/* <ol>{imageArray}</ol> */}
      </ul>
    </article>
  )




}

export default Song;
