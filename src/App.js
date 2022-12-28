import "./App.css";
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Succes from "./Pages/Verify/Succes";
import Failed from "./Pages/Verify/Failed";
import Notifications from "./Pages/Profile/Notifications";
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
import ListFlight from "./Pages/Flight/ListFlight";
import Adminhome from "./Pages/Admin/Home/Home";
import ResetPassword from "./Pages/Password/ResetPassword";
import ChangePassword from "./Pages/Password/ChangePassword";
import InputData from "./Pages/Transaction/InputData";
import HistoryOrders from "./Pages/Transaction/Orders";
import FlightAdmin from "./Pages/Admin/Flight/FlightAdmin";
import Listallflight from "./Pages/Flight/Listallflight";
import MyTicket from "./Pages/Transaction/MyTickket";
import Payment from "./Pages/Payment/Payment";
import Transaction from "./Pages/Transaction/Transaction";
import SearchFlight from "./Pages/Flight/SearchFlight";
import Fourzerofour from "./Pages/404/Fourzerofour";
import Form from "./Pages/Admin/Form/Form";

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
              <Route path="/changepassword" element={<ChangePassword />} />
              <Route path="/listflight" element={<ListFlight />} />
              <Route
                path="/adminhome"
                element={
                  <Protected types={["ADMIN"]}>
                    <Adminhome />
                  </Protected>
                }
              />
              <Route path="/listallflight" element={<Listallflight />} />
              <Route path="/searchflight" element={<ListFlight />} />
              <Route
                path="/admin/flight"
                element={
                  <Protected types={["ADMIN"]}>
                    <FlightAdmin />
                  </Protected>
                }
              />
              <Route
                path="/admin/form"
                element={
                  <Protected types={["ADMIN"]}>
                    <Form />
                  </Protected>
                }
              />
              <Route
                path="/admin/form/:id"
                element={
                  <Protected types={["ADMIN"]}>
                    <Form />
                  </Protected>
                }
              />
              <Route path="*" element={<Fourzerofour />} />
              <Route
                path="/account"
                element={
                  <Protected types={["BUYER"]}>
                    <Account />
                  </Protected>
                }
              />
              <Route
                path="/account/profile"
                element={
                  <Protected types={["BUYER"]}>
                    <Buyers />
                  </Protected>
                }
              />
              <Route
                path="/account/profile/edit"
                element={
                  <Protected types={["BUYER"]}>
                    <EditProfile />
                  </Protected>
                }
              />
              <Route
                path="/inputdata/:id"
                element={
                  <Protected types={["BUYER"]}>
                    <InputData />
                  </Protected>
                }
              />
              <Route
                path="/transaction"
                element={
                  <Protected types={["BUYER"]}>
                    <Transaction />
                  </Protected>
                }
              />
              <Route
                path="/history"
                element={
                  <Protected types={["BUYER"]}>
                    <HistoryOrders />
                  </Protected>
                }
              />
              <Route
                path="/ticket/print-ticket/:id"
                element={
                  <Protected types={["BUYER"]}>
                    <MyTicket />
                  </Protected>
                }
              />
              <Route
                path="/notification"
                element={
                  <Protected types={["BUYER"]}>
                    <Notifications />
                  </Protected>
                }
              />
              <Route
                path="/account/settings"
                element={
                  <Protected types={["BUYER"]}>
                    <Settings />
                  </Protected>
                }
              />
              <Route
                path="/payment"
                element={
                  <Protected types={["BUYER"]}>
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
