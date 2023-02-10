import { StyledUserInformation } from "./style";
const UserInformation = ({ user }) => {
  return (
    <StyledUserInformation>
      <h1>Olá, {user.name}</h1>
      <p>{user.course_module}</p>
    </StyledUserInformation>
  );
};
export default UserInformation;
