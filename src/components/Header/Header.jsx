import { StyledHeader, StyledNav } from "./Header.style";
import { MdSearch } from "react-icons/md";

const Header = ({type, setType, term, setTerm}) => {

  return (
    <StyledHeader>
      <StyledNav>
      <h2>Explora</h2>
      <div>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        <div>
          <MdSearch style={{color: '#424042', margin: 'auto 10px'}}/>
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </div>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
