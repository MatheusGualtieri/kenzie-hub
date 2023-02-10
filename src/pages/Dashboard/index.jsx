import Header from "../../components/Header";
import UserInformation from "../../components/UserInformation";
import { ButtonLink, Button } from "../../styles/buttons";
import { StyledContainer } from "../../styles/container";
import { StyledSection } from "../../styles/sections";
import InDevlopment from "../../components/InDevlopment";
const Dashboard = ({ user }) => {
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
            <UserInformation user={user} />
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
