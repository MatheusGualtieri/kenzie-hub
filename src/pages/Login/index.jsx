import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/Form";
import { Button, ButtonLink } from "../../styles/buttons";
import { Input } from "../../styles/inputs";
import Header from "../../components/Header";
import { StyledContainer } from "../../styles/container";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const formSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

const Login = () => {
  const { loginUser, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    loginUser(data);
  };
  return (
    <>
      <Header></Header>
      <main>
        <StyledContainer>
          <div>{loading ? <h1>Carregando</h1> : <></>}</div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
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
            <Button pink type="submit">
              Entrar
            </Button>
            <p>Ainda não possui uma conta?</p>
            <ButtonLink gray={"true"} to={"/register"}>
              Cadastre-se
            </ButtonLink>
          </Form>
        </StyledContainer>
      </main>
    </>
  );
};
export default Login;
