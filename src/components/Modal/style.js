import styled from "styled-components";
export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 1;
  form {
    height: 85%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
  }
`;
export const ModalHeader = styled.div`
  padding: 1rem;
  height: 15%;
  background-color: var(--color-gray-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;
export const ModalContainer = styled.div`
  height: 18rem;
  width: 100%;
  max-width: 23rem;
`;
