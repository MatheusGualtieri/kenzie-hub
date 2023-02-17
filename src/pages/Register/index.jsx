import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { StyledContainer } from "../../styles/container";
import { Button, ButtonLink } from "../../styles/buttons";
import { Input, InputSelect } from "../../styles/inputs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .matches(/.{8,}/, "Mínimo de 8 caracteres")
    .matches(/[a-z]/, "Deve conter pelo menos um caracter minúsculo")
    .matches(/[A-Z]/, "Deve conter pelo menos um caracter maiúsculo")
    .matches(/(\d)/, "Deve conter pelo menos um número")
    .matches(/\W|_/, "Deve conter no mínimo um caracter especial"),
  passwordConfirmation: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senha diferente"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Modulo necessário"),
});

const Register = () => {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    registerUser(data);
  };
  return (
    <>
      <Header space={true}>
        <ButtonLink to={"/"}>Voltar</ButtonLink>
      </Header>
      <main>
        <StyledContainer>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Crie sua conta</h1>
            <p>Rápido e gratis, vamo nessa</p>
            <label htmlFor="name">Nome</label>
            <Input
              placeholder={"Insira seu nome"}
              id="name"
              type="text"
              {...register("name")}
            ></Input>

            {errors.name?.message}
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              id="email"
              placeholder={"Insira seu email"}
              {...register("email")}
            ></Input>

            {errors.email?.message}
            <label htmlFor="password">Senha</label>
            <Input
              placeholder={"Insira sua senha"}
              id="password"
              type="password"
              {...register("password")}
            ></Input>

            {errors.password?.message}
            <label htmlFor="passwordConfirmation">Confirmar Senha</label>
            <Input
              placeholder={"Insira sua senha novamente"}
              id="passwordConfirmation"
              type="password"
              {...register("passwordConfirmation")}
            ></Input>

            {errors.passwordConfirmation?.message}
            <label htmlFor="bio">Bio</label>
            <Input
              placeholder={"Insira sua bio"}
              id="bio"
              type="text"
              {...register("bio")}
            ></Input>

            {errors.bio?.message}
            <label htmlFor="contact">Contato</label>
            <Input
              placeholder={"Insira seu Contato"}
              id="contact"
              type="text"
              {...register("contact")}
            ></Input>

            {errors.contact?.message}
            <label htmlFor="course_module">Seleione um modulo</label>
            <InputSelect
              name="course_module"
              id="course_module"
              {...register("course_module")}
            >
              <option value="">Selecione um modulo</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo
              </option>
            </InputSelect>

            {errors.module?.message}
            <Button negative type="submit">
              Cadastrar
            </Button>
          </Form>
        </StyledContainer>
      </main>
    </>
  );
};
export default Register;
