import { StyledUserInformation } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
const UserInformation = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledUserInformation>
      <h1>Olá, {user.name}</h1>
      <p>{user.course_module}</p>
    </StyledUserInformation>
  );
};
export default UserInformation;
