import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./UserContext";
export const TechContext = createContext();
const TechProvider = ({ children }) => {
  const { token, setLoading } = useContext(UserContext);
  const createTech = async (data) => {
    setLoading(true);
    await api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
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
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
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
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  };
  return (
    <TechContext.Provider value={{ createTech, updateTech, removeTech }}>
      {children}
    </TechContext.Provider>
  );
};
export default TechProvider;
