import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Rating } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import { MapCard, MapContainer } from './Map.style';


const Map = ({coordinates, setCoordinates, setBounds, places}) => {
  
  return (
    <MapContainer>
       <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY}}
          center={coordinates}
          defaultZoom={14}
          options={""}
          onChange={(e)=>{
            setCoordinates({lat: e.center.lat, lng: e.center.lng})
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})  
          }}
        >
          {places && places.map(place => (
            <div lat={place.latitude} lng={place.longitude} key={place.location_id}>
              <MapCard>
                {/* <LocationOnIcon color="primary"/> */}
                {<h5>{place.name.toUpperCase().substring()}</h5>}
                <div>
                <img src={place.photo ? place.photo.images.small.url : "https://source.unsplash.com/kcA-c3f_3FE/"} alt="a visual description of the selected location" />
                 <h5>{place.name.toUpperCase().substring()}</h5>
                <Rating value={place.rating} readOnly size="small"/>
                </div>
              </MapCard>
            </div>
          ))}
        
        </GoogleMapReact>
    </MapContainer>
  )
}

export default Map
