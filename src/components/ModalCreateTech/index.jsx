import Form from "../Form";
import { Button } from "../../styles/buttons";
import { Input, InputSelect } from "../../styles/inputs";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
const ModalCreateTech = ({ register, handleSubmit, errors }) => {
  const { createTech } = useContext(TechContext);

  const onSubmitFunction = (data) => {
    createTech(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmitFunction)}>
      <label htmlFor="title">Nome</label>
      <Input
        type="text"
        id="title"
        placeholder={"Insira o nome da Tecnologia"}
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
      <Button pink type="subbmit">
        Cadastrar Tecnologia
      </Button>
    </Form>
  );
};
export default ModalCreateTech;
