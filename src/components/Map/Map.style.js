import styled from "styled-components/macro";

export const MapContainer = styled.div`
  width: 100%;
  height: 80vh;
`

export const MapCard = styled.div`
  width: 90px;
  background-color: ${({theme}) => theme.colors.bg};

  img {
    width: 100%;
    height: 30px;
    margin-top: 0;
    object-fit: cover;
  }

  div {
    padding: 5px auto;
  }

  h5 {
    font-size: 8px;
    color: ${({theme}) => theme.colors.bg};
    font-weight: 600;
  }
`