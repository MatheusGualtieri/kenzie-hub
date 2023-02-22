import Header from "../../components/Header";
import UserInformation from "../../components/UserInformation";
import { ButtonLink, Button } from "../../styles/buttons";
import { StyledContainer } from "../../styles/container";
import { StyledSection } from "../../styles/sections";
import Modal from "../../components/Modal";
import { useState } from "react";
const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const togleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <Header space={true} boxShadow={true} large={true}>
        <ButtonLink
          to={"/"}
          onClick={() => {
            window.localStorage.clear();
          }}
        >
          Logout
        </ButtonLink>
      </Header>
      <main>
        <StyledSection>
          <StyledContainer large>
            <UserInformation />
          </StyledContainer>
        </StyledSection>
        <StyledContainer large>
          <h1>Tecnologiaas</h1>
          <Button type="button" onClick={togleModal}>
            +
          </Button>
        </StyledContainer>
      </main>
      {openModal ? <Modal togleModal={togleModal}></Modal> : null}
    </>
  );
};
export default Dashboard;
