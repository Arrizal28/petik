import "./App.css";
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Succes from "./Pages/Verify/Succes";
import Failed from "./Pages/Verify/Failed";
import Notifications from "./Pages/Profile/Notifications";
import MyOrders from "./Pages/Transaction/MyOrders";
import store from "./Redux/store";
import Buyers from "./Pages/Profile/Buyers";
import Settings from "./Pages/Settings/Settings";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NavbarBottom from "./Mobile/Layout/NavbarMobile";
import Account from "./Pages/Account/Account";
import Protected from "./Components/Protected/Protected";
import EditProfile from "./Pages/Profile/EditProfile";
import ForgotPassword from "./Pages/Password/ForgotPassword";
import ListFlight from "./Pages/ListFlight/ListFlight";
import Adminhome from "./Pages/Admin/Home/Home";
import ResetPassword from "./Pages/Password/ResetPassword";
import InputData from "./Pages/Transaction/InputData";
import HistoryOrders from "./Pages/Transaction/HistoryOrders";
import FlightAdmin from "./Pages/Admin/Flight/FlightAdmin";
import Listallflight from "./Pages/ListAllFlight/Listallflight";
import MyTicket from "./Pages/Transaction/MyTickket";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/auth/verify/succes" element={<Succes />} />
              <Route path="/auth/verify/failed" element={<Failed />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/listflight" element={<ListFlight />} />
              <Route path="/adminhome" element={<Adminhome />} />
              <Route path="/listallflight" element={<Listallflight />} />
              <Route path="/searchflight" element={<ListFlight />} />
              <Route path="/admin/flight" element={<FlightAdmin />} />
              <Route
                path="/account"
                element={
                  <Protected>
                    <Account />
                  </Protected>
                }
              />
              <Route
                path="/account/profile"
                element={
                  <Protected>
                    <Buyers />
                  </Protected>
                }
              />
              <Route
                path="/account/profile/edit"
                element={
                  <Protected>
                    <EditProfile />
                  </Protected>
                }
              />
              <Route path="/inputdata/:id" element={<InputData />} />
              <Route
                path="/transaction"
                element={
                  <Protected>
                    <MyOrders />
                  </Protected>
                }
              />
              <Route
                path="/history"
                element={
                  <Protected>
                    <HistoryOrders />
                  </Protected>
                }
              />
              <Route
                path="/ticket/print-ticket/:id"
                element={
                  <Protected>
                    <MyTicket />
                  </Protected>
                }
              />
              <Route
                path="/notification"
                element={
                  <Protected>
                    <Notifications />
                  </Protected>
                }
              />
              <Route
                path="/account/settings"
                element={
                  <Protected>
                    <Settings />
                  </Protected>
                }
              />
              <Route
                path="/payment"
                element={
                  <Protected>
                    <Payment />
                  </Protected>
                }
              />
            </Routes>
            <NavbarBottom />
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
