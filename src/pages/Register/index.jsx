import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/Form";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const registerUser = async (data) => {
    await api
      .post("/users", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  const onSubmitFunction = (data) => {
    registerUser(data);
  };
  return (
    <>
      <div>
        <Link to={"/"}>Voltar</Link>
      </div>
      <main>
        <div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <label htmlFor="name">Nome</label>
            <input
              placeholder={"Insira seu nome"}
              id="name"
              type="text"
              {...register("name")}
            ></input>

            {errors.name?.message}
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
            <label htmlFor="passwordConfirmation">Confirmar Senha</label>
            <input
              placeholder={"Insira sua senha novamente"}
              id="passwordConfirmation"
              type="password"
              {...register("passwordConfirmation")}
            ></input>

            {errors.passwordConfirmation?.message}
            <label htmlFor="bio">Bio</label>
            <input
              placeholder={"Insira sua bio"}
              id="bio"
              type="text"
              {...register("bio")}
            ></input>

            {errors.bio?.message}
            <label htmlFor="contact">Contato</label>
            <input
              placeholder={"Insira seu Contato"}
              id="contact"
              type="text"
              {...register("contact")}
            ></input>

            {errors.contact?.message}
            <label htmlFor="course_module">Seleione um modulo</label>
            <select
              name="course_module"
              id="course_module"
              {...register("course_module")}
            >
              <option value="">Selecione um modulo</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>

            {errors.module?.message}
            <button type="submit">Enviar</button>
          </Form>
        </div>
      </main>
    </>
  );
};
export default Register;
