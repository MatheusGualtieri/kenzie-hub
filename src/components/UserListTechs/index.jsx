import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import TechItem from "../TechItem";
const UserListTechs = () => {
  const { user } = useContext(UserContext);
  return (
    <ul>
      {user.techs.map((item) => {
        <TechItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
