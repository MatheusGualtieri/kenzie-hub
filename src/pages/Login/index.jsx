import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/Form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, ButtonLink } from "../../styles/buttons";
import { Input } from "../../styles/inputs";
import Header from "../../components/Header";
import { StyledContainer } from "../../styles/container";
const formSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

const Login = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const loginUser = async (data) => {
    setLoading(true);
    await api
      .post("/sessions", data)
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
        window.localStorage.setItem("@TOKEN", response.data.token);
        window.localStorage.setItem("@USERID", response.data.user.id);
        toast.success("Usuário logado com sucesso!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao logar o usuário. Verifica seu email ou senha");
      })
      .finally(setLoading(false));
  };
  const onSubmitFunction = (data) => {
    loginUser(data);
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
