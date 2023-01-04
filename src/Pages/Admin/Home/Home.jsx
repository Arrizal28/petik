import Sidebar from "../../../Components/Admin/sidebar/Sidebar";
import "./home.scss";
import Usertable from "../../../Components/Admin/UserTable/Usertable";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">All Users</div>
          <Usertable />
        </div>
      </div>
    </div>
  );
};

export default Home;
