import { StyledContainer } from "../../styles/container";
import { StyledNav, StyledHeader } from "./style";
const Header = ({ space, children, boxShadow, large }) => {
  return (
    <StyledHeader boxShadow={boxShadow}>
      <StyledContainer large={large}>
        <StyledNav space={space}>
          <h1>Kenzie Hub</h1>
          {children}
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};
export default Header;
