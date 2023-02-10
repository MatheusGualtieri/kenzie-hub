import { StyledContainer } from "../../styles/container";
import { StyledNav } from "./style";
const Header = ({ space, children }) => {
  return (
    <header>
      <StyledContainer>
        <StyledNav space={space}>
          <h1>Kenzie Hub</h1>
          {children}
        </StyledNav>
      </StyledContainer>
    </header>
  );
};
export default Header;
