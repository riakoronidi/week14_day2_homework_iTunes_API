import React from 'react';

const Song = (props) => {
  if(!props.song) return null;


    const images = [];
    for(let image of props.song['im:image']){
      images.push(image.label)
    };
// console.log(images);
    // const result = images.map((image) => image);
    // console.log( image);



  return(
    <article>
      <ul>
        <ol>Song title: {props.song['im:name'].label}</ol>
        <ol>Artist: {props.song['im:artist'].label}</ol>
        <ol>Number in charts: {props.index}</ol>
      </ul>

      {/* <img src={images.map((image) => image)} alt={props.song['im:name'].label}/> */}
    </article>
  )




}

export default Song;
