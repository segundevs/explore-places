import {StyledContainer} from './ListView.style';
import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card from '../Card/Card';

const ListView = ({places, error}) => {

   const responsive = {
  desktop: {
    // breakpoint: { max: 1200, min: 960 },
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    // breakpoint: { max: 960, min: 480 },
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    // breakpoint: { max: 480, min: 0 },
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

  return (

    <StyledContainer>
      <Carousel
    responsive={responsive}
    swipeable={true}
    draggable={true}
    infinite={true}
    >
      {places && places.map(place => (
        <Card place={place} key={place.location_id}/>
      ))}
    </Carousel>   
    </StyledContainer>
  )
}

export default ListView
