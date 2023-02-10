import styled from "styled-components";
export const StyledUserInformation = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    color: var(--color-gray-2);
  }
  @media (min-width: 800px) {
    padding: 2rem 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;
