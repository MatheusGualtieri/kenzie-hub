import { ButtonIcon, Button } from "../../styles/buttons";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledModal, ModalHeader, ModalContainer } from "./style";
import ModalCreateTech from "../ModalCreateTech";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import ModalChangeTech from "../ModalChangeTech";
const formSchema = yup.object().shape({
  title: yup.string().required("Nome"),
  status: yup.string().required("Status obrigatório"),
});

const Modal = () => {
  const { openModalChangeTech, togleModal, tech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledModal>
      <ModalContainer>
        <ModalHeader>
          <p>Cadastrar Tecnologia</p>
          <ButtonIcon onClick={togleModal}>x</ButtonIcon>
        </ModalHeader>
        {openModalChangeTech ? (
          <ModalChangeTech
            item={tech}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          ></ModalChangeTech>
        ) : (
          <ModalCreateTech
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        )}
      </ModalContainer>
    </StyledModal>
  );
};
export default Modal;
