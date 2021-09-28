import { useState, useEffect } from 'react';

import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import ListView from './components/ListView/ListView';
import Map from './components/Map/Map';

import { getPlaces } from './utils/api';

function App() {

  const [places, setPlaces] = useState([]);
  const [error, setError] = useState('');

  const [type, setType] = useState('restaurants');

  const [term, setTerm] = useState('');

  useEffect(()=>{
    const fetchPlaces = async() => {
      try {
        await getPlaces().then(data => {
          setPlaces(data)
        })
      } catch (err) {
        setError(err.message)
      }
    }

    fetchPlaces()
    
  },[])

  
  return (
    <div>
      {console.log(places)}
      <GlobalStyle />
     <Header type={type} setType={setType} term={term} setTerm={setTerm}/>
     <ListView places={places} error={error}/>
     <Map />
    </div>
  );
}

export default App;
