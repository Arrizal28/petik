import Sidebar from "../../../Components/Admin/sidebar/Sidebar";
import "./home.scss";
import Widget from "../../../Components/Admin/widget/Widget";
import Usertable from "../../../Components/Admin/UserTable/Usertable";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="listContainer">
          <div className="listTitle">All Users</div>
          <Usertable />
        </div>
      </div>
    </div>
  );
};

export default Home;
