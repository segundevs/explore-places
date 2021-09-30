import { useState, useEffect } from 'react';
 import axios from "axios";

import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import ListView from './components/ListView/ListView';
import Map from './components/Map/Map';

// import { getPlaces } from './utils/api';

function App() {

  const [places, setPlaces] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const [type, setType] = useState('restaurants');

  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
  const [bounds, setBounds] = useState(null)

  const [term, setTerm] = useState('');

  useEffect(()=>{
    const fetchPlaces = async() => {
      try {
        const response = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
    limit: '30',
  },
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
  }
});
        const res = await response.data;
        setPlaces(res.data);
        setError(true)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchPlaces()
    
  },[])

  
  return (
    <div>
      {console.log(places)}
      <GlobalStyle />
     <Header type={type} setType={setType} term={term} setTerm={setTerm}/>
     <ListView places={places} error={error} loading={loading}/>
     <Map error={error} loading={loading} setBounds={setBounds} coordinates={coordinates} setCordinates={setCoordinates}/>
    </div>
  );
}

export default App;
