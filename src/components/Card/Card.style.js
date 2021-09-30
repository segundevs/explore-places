import styled from "styled-components/macro";

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  height: 200px;
  text-align: center;
  background-color: ${({theme}) => theme.colors.bg};
  color: ${({theme}) => theme.colors.color};  
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 40%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

export const DetailsContainer = styled.div`
  width: 60%;
  text-align: left;
  margin: 10px;

  h2{
    font-size: 18px;
    color: ${({theme}) => theme.colors.color}
  }

  div{
    display: flex;
    justify-content: space-between;
  }
`