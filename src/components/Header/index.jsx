import { StyledContainer } from "../../styles/container";
import { StyledNav } from "./style";
const Header = ({ children }) => {
  return (
    <header>
      <StyledContainer>
        <StyledNav>
          <h1>Kenzie Hub</h1>
          {children}
        </StyledNav>
      </StyledContainer>
    </header>
  );
};
export default Header;
