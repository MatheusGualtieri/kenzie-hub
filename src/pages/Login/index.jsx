import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/Form";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
const formSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const loginUser = async (data) => {
    await api
      .post("/sessions", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  const onSubmitFunction = (data) => {
    loginUser(data);
  };
  return (
    <>
      <main>
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
            <button type="submit">Enviar</button>
          </Form>
        </div>
        <div>
          <Link to={"/register"}>Cadastrar</Link>
        </div>
      </main>
    </>
  );
};
export default Login;
