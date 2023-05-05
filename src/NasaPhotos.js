import React from "react";
import styled from "styled-components";


const  NasaDiv = styled.div`  
  margin: 2rem;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  align-items: center;
 
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  img {
    width: 60%;
    height: auto;
    margin-bottom: 1rem;
  }

  .expalate {
    font-size: 1.1rem;
    color: #666;
    margin-top: 1rem;
    line-height:1.5;
  }
};
`


const NasaPhoto = (props) => {
    return (
        <NasaDiv >
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}/>
            <p className="expalate">{props.photo.explanation}</p>
        </NasaDiv>
    )
}




export default NasaPhoto;