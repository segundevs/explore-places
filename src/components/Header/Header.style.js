import styled from "styled-components/macro";


export const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.colors.accent};
  color: ${({theme}) => theme.colors.bg};
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 10px 0;

  div {
    display: flex;
    height: 30px;


    select {
      margin-right: 40px;
      width: 250px;
    }

    div {
      width: 250px;
      background-color: ${({theme}) => theme.colors.bg};
      height: 100%;

      input {
        border: none;
        outline: none;
      }
    }
  }
`
