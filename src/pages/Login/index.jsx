import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/Form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, ButtonLink } from "../../styles/buttons";
import Header from "../../components/Header";
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
        <div>{loading ? <h1>Carregando</h1> : <></>}</div>
        <div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder={"Insira seu email"}
              {...register("email")}
            ></input>

            {errors.email?.message}
            <label htmlFor="password">Senha</label>
            <input
              placeholder={"Insira sua senha"}
              id="password"
              type="password"
              {...register("password")}
            ></input>
            {errors.password?.message}
            <Button pink type="submit">
              Enviar
            </Button>
          </Form>
        </div>
        <div>
          <ButtonLink gray={"true"} to={"/register"}>
            Cadastrar
          </ButtonLink>
        </div>
      </main>
    </>
  );
};
export default Login;
