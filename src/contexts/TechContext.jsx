import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./UserContext";
export const TechContext = createContext();
const TechProvider = ({ children }) => {
  const { token, setLoading, setTechList, techList } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [openModalChangeTech, setOpenModalChangeTech] = useState(false);
  const [tech, setTech] = useState({});
  const togleModal = () => {
    setOpenModal(!openModal);
    if (openModalChangeTech) {
      setTech({});
      setOpenModalChangeTech(false);
    }
  };

  const toggleModalTech = () => {
    setOpenModalChangeTech(true);
  };

  const createTech = async (data) => {
    setLoading(true);
    await api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTechList([...techList, response.data]);
        toast.success("Tecnologia criada com sucesso!");
        togleModal();
      })
      .catch((error) => {
        toast.error("Erro ao criar a tecnologia");
      })
      .finally(setLoading(false));
  };
  const updateTech = async (techId, data) => {
    setLoading(true);
    await api
      .put(`/users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newTechList = techList.map((item) => {
          if (item.id === techId) {
            return { ...item, ...data };
          } else {
            return item;
          }
        });
        setTechList(newTechList);
        toast.success("Tecnologia atualizada com sucesso!");
        togleModal();
      })
      .catch((error) => {
        toast.error("Erro ao atualizar a tecnologia");
      })
      .finally(setLoading(false));
  };
  const removeTech = async (techId) => {
    setLoading(true);
    await api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newTechList = techList.filter((item) => item.id !== techId);
        setTechList(newTechList);
        toast.success("Tecnologia removida com sucesso!");
        togleModal();
      })
      .catch((error) => {
        toast.error("Erro ao deletar a tecnologia");
      })
      .finally(setLoading(false));
  };
  return (
    <TechContext.Provider
      value={{
        createTech,
        updateTech,
        removeTech,
        techList,
        openModalChangeTech,
        setOpenModalChangeTech,
        togleModal,
        openModal,
        toggleModalTech,
        tech,
        setTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
export default TechProvider;
