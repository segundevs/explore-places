import { useState } from 'react';
import { Autocomplete } from "@react-google-maps/api";
import { StyledHeader, StyledNav } from "./Header.style";
import SearchIcon from '@mui/icons-material/Search';

const Header = ({type, setType, setCoordinates }) => {

   const [autocomplete, setAutocomplete]= useState(null);

    const onLoad =(autoC)=> setAutocomplete(autoC)

    const onPlaceChanged=()=>{
        const lat= autocomplete.getPlace().geometry?.location.lat();
        const lng = autocomplete.getPlace().geometry?.location.lng();
        console.log(autocomplete.getPlace().geometry)
        // setCoordinates({lat, lng})
    }

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
            <input type="text" />
            </div>
          {/* </Autocomplete> */}
     
      </div>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
