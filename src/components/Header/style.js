import styled from "styled-components";
export const StyledNav = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.space ? "space-between" : "center")};
  margin-bottom: 1rem;
  h1 {
    color: var(--color-primary);
  }
`;
export const StyledHeader = styled.header`
  box-shadow: ${(props) =>
    props.boxShadow ? `1px 1px 1px 1px var(--color-gray-3)` : ``};
`;
