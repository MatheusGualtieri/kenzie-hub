import { TechListItem } from "./style";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
const TechItem = ({ item }) => {
  const { toggleModalTech, setTech, togleModal } = useContext(TechContext);
  const onClickFunction = () => {
    setTech(item);
    toggleModalTech();
    togleModal();
  };
  return (
    <TechListItem key={item.id} onClick={onClickFunction}>
      <p>{item.title}</p>
      <p>{item.status}</p>
    </TechListItem>
  );
};
export default TechItem;
