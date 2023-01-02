import Sidebar from "../../../Components/Admin/sidebar/Sidebar";
import FlightTable from "../../../Components/Admin/FlightTable/FlightTable";
import "./flightadmin.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const FlightAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="flightadmin">
      <Sidebar />
      <div className="flightadminContainer">
        <div className="listContainer">
          <div className="d-flex justify-content-between">
            <div className="listTitle">All Flight Schedule</div>
            <Button
              type="primary"
              onClick={() => {
                navigate("/admin/form");
              }}
            >
              Add New Flight Schedule
            </Button>
          </div>
          <FlightTable />
        </div>
      </div>
    </div>
  );
};

export default FlightAdmin;
