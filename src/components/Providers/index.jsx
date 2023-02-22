import UserProvider from "../../contexts/UserContext";
import TechProvider from "../../contexts/TechContext";
const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};
export default Providers;
