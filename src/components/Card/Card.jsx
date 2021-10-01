import { DetailsContainer, StyledCard } from "./Card.style";
import Rating from '@mui/material/Rating';


const Card = ({place}) => {

  return ( 
    <StyledCard>
        <img src={place.photo ? place.photo.images.large.url : "https://source.unsplash.com/kcA-c3f_3FE/"} alt={place.name} />
        <DetailsContainer>
          {place.name && <h2>{place.name.toUpperCase()}</h2>}
          {place.num_reviews && <div><h4>Reviews: </h4><p>{Number(place.num_reviews)}</p></div>}
          {place.rating && <div><h4>Rating: </h4><Rating value={place.rating} readOnly size="small"/></div>}
          {place.price && <div><h4>Price: </h4><p>{place.price}</p></div>}
          {place.ranking && <div><h4>Ranking: </h4><p>{place.ranking}</p></div>}  
        </DetailsContainer>
    </StyledCard> 
  )
}

export default Card
