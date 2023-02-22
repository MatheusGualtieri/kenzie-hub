import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const tokenOnLocalStorage = window.localStorage.getItem("@TOKEN");
  const [token, setToken] = useState(
    tokenOnLocalStorage ? tokenOnLocalStorage : null
  );
  const [techList, setTechList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const autoLoginUser = async (token) => {
      await api
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          setTechList(response.data.techs);

          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          window.localStorage.removeItem("@TOKEN");
        });
    };
    token ? autoLoginUser(token) : null;
  }, []);
  const loginUser = async (data) => {
    setLoading(true);
    await api
      .post("/sessions", data)
      .then((response) => {
        setUser(response.data.user);
        setTechList(response.data.user.techs);
        window.localStorage.setItem("@TOKEN", response.data.token);
        window.localStorage.setItem("@USERID", response.data.user.id);
        toast.success("Usuário logado com sucesso!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((error) => {
        toast.error("Erro ao logar o usuário. Verifica seu email ou senha");
      })
      .finally(setLoading(false));
  };
  const registerUser = async (data) => {
    await api
      .post("/users", data)
      .then((response) => {
        if (response.status < 400) {
          toast.success("Usuário cadastrado com sucesso");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Erro no cadastro do usuário");
      });
  };
  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        user,
        setUser,
        loading,
        setLoading,
        token,
        setTechList,
        techList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
