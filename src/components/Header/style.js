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
