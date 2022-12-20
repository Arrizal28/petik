import Sidebar from "../../../Components/Admin/sidebar/Sidebar";
import FlightTable from "../../../Components/Admin/FlightTable/FlightTable";
import "./flightadmin.scss";

const FlightAdmin = () => {
  return (
    <div className="flightadmin">
      <Sidebar />
      <div className="flightadminContainer">
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <FlightTable />
        </div>
      </div>
    </div>
  );
};

export default FlightAdmin;
