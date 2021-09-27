
import Slider from "react-slick";
import {Card} from './ListView.style';
import Logo from '../../images/place.jpg'

const ListView = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true
  };

  const cards = [
    {name: 'Nigerian Cuisine', title: 'Package'},
    {name: 'Nigerian Cuisine', title: 'Package'},
    {name: 'Nigerian Cuisine', title: 'Package'},
    {name: 'Nigerian Cuisine', title: 'Package'},
    {name: 'Nigerian Cuisine', title: 'Package'},
    {name: 'Nigerian Cuisine', title: 'Package'}
  ]

  return (
    <Slider {...settings}>
      {cards.map((card => (
        <div>
          <Card>
          <img src={Logo} alt="unsplash" />
          <div>{card.name}</div>
          <div>{card.title}</div>
        </Card>
        </div>
        
      )))}
    </Slider>
  )
}

export default ListView
