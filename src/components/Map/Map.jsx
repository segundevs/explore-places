import GoogleMapReact from 'google-map-react';
import { MapContainer } from './Map.style';


const Map = ({setBounds, coordinates, setCoordinates}) => {

  // const coordinates = { lat: 36.7783, lng: 119.4179}
  return (
    <MapContainer>
       <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          // options={''}
          onChange={(e)=>{
            console.log(e.center.lat)
            // setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
            setCoordinates({lat: e.center.lat, lng: e.center.lng})
          }}
          // onChildClick={''}
        >
        
        </GoogleMapReact>
    </MapContainer>
  )
}

export default Map
