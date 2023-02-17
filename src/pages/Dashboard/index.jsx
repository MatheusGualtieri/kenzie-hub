import Header from "../../components/Header";
import UserInformation from "../../components/UserInformation";
import { ButtonLink } from "../../styles/buttons";
import { StyledContainer } from "../../styles/container";
import { StyledSection } from "../../styles/sections";
import InDevlopment from "../../components/InDevlopment";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
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
          <InDevlopment></InDevlopment>
        </StyledContainer>
      </main>
    </>
  );
};
export default Dashboard;
