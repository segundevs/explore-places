import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
    limit: '30',
    child_rm_ages: '7,10',
    currency: 'USD',
    subcategory: 'hotel,bb,specialty',
    zff: '4,6',
    hotel_class: '1,2,3',
    amenities: 'beach,bar_lounge,airport_transportation',
    adults: '1'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '5ed8cbe68emshabb22139a5af869p1b8fefjsn5e34ca94d78a'
  }
};

export const getPlaces = async() => {
    const response = await axios.get(url, options);
    const res = await response.data
    return res.data;       
  }