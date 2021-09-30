import {StyledContainer} from './ListView.style';
import Slider from "react-slick";
import Card from '../Card/Card';

const ListView = ({places, error}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    // centerMode: true
  };

  return (
    <Slider {...settings}>
      {places && places.map((place => (
        <StyledContainer key={place.location_id}>
           <Card place={place}/>
        </StyledContainer>  
      )))}
    </Slider>
  )
}

export default ListView
