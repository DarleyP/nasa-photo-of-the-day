import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
 import NasaPhoto from './NasaPhotos'

function App() {
  const[ data, setData] = useState(true);


  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then( res => {
      setData(res.data)
    })
    .catch(err => 
      console.error(err))
  }, [])
  return (
    <div className="App">
  { data && < NasaPhoto photo={data}/>}
    </div>
  );
}

export default App;


// date : "2023-05-03"
// explanation: "Galaxies are fascinating. In galaxies, gravity alone holds together massive collections of stars, dust, interstellar gas, stellar remnants and dark matter.  Pictured is NGC 5128, better known as Centaurus A.  Cen A is the fifth brightest galaxy on the sky and is located at a distance of about 12 million light years from Earth. The warped shape of Cen A is the result of a merger between an elliptical and a spiral galaxy.  Its active galactic nucleus harbors a supermassive black hole that is about 55 million times more massive than our Sun.  This central black hole ejects a fast  jet visible in both radio and X-ray light. Filaments of the jet are visible in red in the upper left.  New observations by the Event Horizon Telescope have revealed a brightening of the jet only towards its edges -- but for reasons that are currently unknown and an active topic of research.   At NASA it's: Black Hole Week"
// hdurl: "https://apod.nasa.gov/apod/image/2305/NGC5128_Lorenzi_3000.jpg"
// title : "Centaurus A: A Peculiar Island of Stars"
