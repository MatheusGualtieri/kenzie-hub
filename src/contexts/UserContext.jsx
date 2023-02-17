import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
  const registerUser = async (data) => {
    await api
      .post("/users", data)
      .then((response) => {
        console.log(response);
        if (response.status < 400) {
          toast.success("Usuário cadastrado com sucesso");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro no cadastro do usuário");
      });
  };
  return (
    <UserContext.Provider
      value={{ registerUser, loginUser, user, setUser, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
