import { useState, useEffect } from "react";
import axios from "axios";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import ListView from "./components/ListView/ListView";
import Map from "./components/Map/Map";

function App() {
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [places, setPlaces] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [type, setType] = useState("restaurants");

  // const [value, setValue]= useState('new york');

  //Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({ lat: coords.latitude, lng: coords.longitude });
    });
  }, []);

  //Get geolocation

  // const fetchGeo = axios.get('https://forward-reverse-geocoding.p.rapidapi.com/v1/search', { params: {
  //   q: `${value}`, 'accept-language': 'en'},
  //   headers: {
  //   'x-rapidapi-host': 'forward-reverse-geocoding.p.rapidapi.com',
  //   'x-rapidapi-key': '5ed8cbe68emshabb22139a5af869p1b8fefjsn5e34ca94d78a'
  // }
  //  }).then((data => console.log(data))).catch(err => console.log(err));

  //get map
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(
          `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
          {
            params: {
              bl_latitude: bounds.sw.lat,
              bl_longitude: bounds.sw.lng,
              tr_longitude: bounds.ne.lng,
              tr_latitude: bounds.ne.lat,
            },
            headers: {
              "x-rapidapi-host": process.env.REACT_APP_API_HOST,
              "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            },
          }
        );
        const res = await response.data;
        const data = res.data;
        setPlaces(
          data.filter(
            (place) => place.name && place.num_reviews > 0 && place.rating
          )
        );
        setError(true);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [type, coordinates, bounds]);
  // type, coordinates, bounds

  return (
    <div>
      {console.log(places)}
      <GlobalStyle />
      <Header
        type={type}
        setType={setType}
        //  value={value}
        //  setValue={setValue}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        //  fetchGeo={fetchGeo}
      />

      <ListView places={places} error={error} loading={loading} />

      <Map
        error={error}
        loading={loading}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        places={places}
        setBounds={setBounds}
      />
    </div>
  );
}

export default App;
