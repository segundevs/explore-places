// import { Autocomplete } from "@react-google-maps/api";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { StyledHeader, StyledNav } from "./Header.style";
import SearchIcon from '@mui/icons-material/Search';

const Header = ({type, setType, setCoordinates, coordinates }) => {

   const [value, setValue] = useState('germany');

   const [response, setResponse] = useState({})

    
   useEffect(() => {
      const fetchPlaces = async () => {
        try{
          const res = await axios.get('https://forward-reverse-geocoding.p.rapidapi.com/v1/search', { params: {
        q: `germany`, 'accept-language': 'en'},
        headers: {
        'x-rapidapi-host': 'forward-reverse-geocoding.p.rapidapi.com',
        'x-rapidapi-key': '5ed8cbe68emshabb22139a5af869p1b8fefjsn5e34ca94d78a'
      }
       });

       const data = await res.data;

       setResponse(data)

        } catch(err) {
          console.log(err)
        }
  }
  fetchPlaces()
    }, [])

  

  return (
    <StyledHeader>
      <StyledNav>
      <h2>Explora</h2>
      <div>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
       
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} > */}
            <div>
            <SearchIcon style={{color: '#424042', margin: 'auto 10px'}}/>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
          {/* </Autocomplete> */}
     
      </div>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
