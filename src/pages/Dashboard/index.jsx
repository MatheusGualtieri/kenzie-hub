import Header from "../../components/Header";
import UserInformation from "../../components/UserInformation";
import { ButtonLink, Button } from "../../styles/buttons";
import { StyledContainer } from "../../styles/container";
import { StyledSection } from "../../styles/sections";
import Modal from "../../components/Modal";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import UserListTechs from "../../components/UserListTechs";
import { StyledMain } from "../../styles/main";
const Dashboard = () => {
  const { openModal } = useContext(TechContext);
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
      <StyledMain>
        <StyledSection>
          <StyledContainer large>
            <UserInformation />
          </StyledContainer>
        </StyledSection>
        <StyledContainer large>
          <UserListTechs />
        </StyledContainer>
      </StyledMain>
      {openModal ? <Modal></Modal> : null}
    </>
  );
};
export default Dashboard;
