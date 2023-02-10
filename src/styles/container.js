import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: ${(props) => (props.large ? `1200px` : `24rem`)};
  width: ${(props) => (props.large ? `80%` : `100%`)};
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
`;
