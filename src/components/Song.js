import React from 'react';

const Song = (props) => {
  if(!props.song) return null;


    const images = [];
    for(let image of props.song['im:image']){
      images.push(image.label)
    };
    console.log(images);



    const getIndex = () => {
      let index = 0;
      props.OnIndex(index);
      // return index;
    }

  return(
    <article>
      <ul>
        <ol>Song title: {props.song['im:name'].label}</ol>
        <ol>Artist: {props.song['im:artist'].label}</ol>
        <ol>Number in charts: {getIndex}</ol>
        <ol><img style={{width:"70px", margin: "10px"}} src={images[0]} alt={props.song['im:name'].label}/></ol>
      </ul>
      {/* <img src={images.map((image) => image)} alt={props.song['im:name'].label}/> */}
    </article>
  )




}

export default Song;
