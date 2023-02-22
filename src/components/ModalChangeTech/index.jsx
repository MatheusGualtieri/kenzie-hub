import Form from "../Form";
import { Button } from "../../styles/buttons";
import { Input, InputSelect } from "../../styles/inputs";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { ContainerButtons } from "./style";
import { toast } from "react-toastify";
const ModalChangeTech = ({ register, handleSubmit, errors, item }) => {
  const { updateTech, removeTech, togleModal } = useContext(TechContext);
  const onSubmitFunction = (data) => {
    if (item.status === "Intermediário" && data.status === "Iniciante") {
      toast.error("Só pode atualizar seu status pro prórximo nível");
    } else if (item.status === "Avançado") {
      toast.error("Só pode atualizar seu status pro prórximo nível");
    } else {
      updateTech(item.id, { status: data.status });
      togleModal;
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmitFunction)}>
      <label htmlFor="title">Nome</label>
      <Input
        type="text"
        id="title"
        value={item.title}
        readOnly
        {...register("title")}
      ></Input>
      {errors.title?.message}
      <label htmlFor="title">Selecionar Status</label>
      <InputSelect {...register("status")}>
        <option value={""}>Selecionar Status</option>
        <option value={"Iniciante"}>Iniciante</option>
        <option value={"Intermediário"}>Intermediário</option>
        <option value={"Avançado"}>Avançado</option>
      </InputSelect>
      {errors.status?.message}
      <ContainerButtons>
        <Button pink type="subbmit">
          Atualizar Tecnologia
        </Button>
        <Button
          gray
          type="button"
          onClick={() => {
            removeTech(item.id);
            togleModal;
          }}
        >
          Excluir
        </Button>
      </ContainerButtons>
    </Form>
  );
};
export default ModalChangeTech;
