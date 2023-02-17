import UserProvider from "../../contexts/UserContext";

const Providers = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
export default Providers;
