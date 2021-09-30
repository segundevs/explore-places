import LocationOnIcon from '@material-ui/icons/LocationOn';
import GoogleMapReact from 'google-map-react';
import { MapContainer } from './Map.style';


const Map = ({coordinates, setCoordinates, setBounds, places}) => {
  
  return (
    <MapContainer>
       <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          onChange={(e)=>{
            setCoordinates({lat: e.center.lat, lng: e.center.lng})
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})  
          }}
        >
          {places && places.map(place => (
            <div lat={place.latitude} lng={place.longitude} key={place.location_id}>
              <LocationOnIcon />
            </div>
          ))}
        
        </GoogleMapReact>
    </MapContainer>
  )
}

export default Map
