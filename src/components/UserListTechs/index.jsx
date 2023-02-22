import { Button } from "../../styles/buttons";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import { ListHeader, TechList } from "./style";
import TechItem from "../TechItem";
const UserListTechs = () => {
  const { togleModal } = useContext(TechContext);
  const { techList } = useContext(TechContext);
  return (
    <>
      <ListHeader>
        <h1>Tecnologias</h1>
        <Button type="button" onClick={togleModal}>
          +
        </Button>
      </ListHeader>
      <TechList>
        {techList
          ? techList.map((item) => (
              <TechItem key={item.id} item={item}></TechItem>
            ))
          : null}
      </TechList>
    </>
  );
};
export default UserListTechs;
