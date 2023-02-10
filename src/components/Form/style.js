import styled from "styled-components";
export const StyledForm = styled.form`
  max-width: 24rem;
  width: 100%;
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-gray-3);
  box-sizing: border-box;
  margin: 0 auto;
  h1,
  p {
    text-align: center;
  }
  p {
    color: var(--color-gray-1);
  }
  @media (min-width: 800px) {
  }
`;
