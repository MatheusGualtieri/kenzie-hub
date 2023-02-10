import Header from "../../components/Header";
import { Link } from "react-router-dom";
const Dashboard = ({ user }) => {
  return (
    <>
      <Header>
        <Link
          to={"/"}
          onClick={() => {
            window.localStorage.clear();
          }}
        >
          Logout
        </Link>
      </Header>
      <main>
        <div>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </div>
      </main>
    </>
  );
};
export default Dashboard;
