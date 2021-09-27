import styled from "styled-components/macro";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  height: 200px;
  text-align: center;
  background-color: ${({theme}) => theme.colors.bg};
  color: ${({theme}) => theme.colors.accent};
  font-size: 1.2rem;
  font-weight: 700;
  border: 1px solid ${({theme}) => theme.colors.accent};

  img {
    width: 100%;
    height: 80%;
  }
`