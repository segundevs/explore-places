import { DetailsContainer, StyledCard } from "./Card.style";

const Card = ({place}) => {

  

  return ( 
    <StyledCard>
        <img src={place.photo ? place.photo.images.large.url : "https://source.unsplash.com/kcA-c3f_3FE/"} alt={place.name} />
        <DetailsContainer>
          {place.name ? <h2>{place.name}</h2> : <h2>Not Available</h2>}
          {place.num_reviews ? <div><h4>Reviews: </h4><p>{place.num_reviews}</p></div> : <div><h4>Reviews: </h4><p>Not available</p></div>}
          {place.rating ? <div><h4>Rating: </h4><p>{place.rating}</p></div> : <div><h4>Rating: </h4><p>Not available</p></div>}
          {place.price ? <div><h4>Price: </h4><p>{place.price}</p></div> : <div><h4>Price: </h4><p>Not available</p></div>}
          {place.ranking ? <div><h4>Ranking: </h4><p>{place.ranking_position}</p></div> : <div><h4>Ranking: </h4><p>Not available</p></div>}
        </DetailsContainer>
    </StyledCard> 
  )
}

export default Card
