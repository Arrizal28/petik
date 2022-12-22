import Sidebar from "../../../Components/Admin/sidebar/Sidebar";
import FlightTable from "../../../Components/Admin/FlightTable/FlightTable";
import "./flightadmin.scss";
import { Button } from "antd";

const FlightAdmin = () => {
  return (
    <div className="flightadmin">
      <Sidebar />
      <div className="flightadminContainer">
        <div className="listContainer">
          <div className="d-flex justify-content-between">
            <div className="listTitle">Latest Transactions</div>
            <Button type="primary">Add New Flight Schedule</Button>
          </div>
          <FlightTable />
        </div>
      </div>
    </div>
  );
};

export default FlightAdmin;
