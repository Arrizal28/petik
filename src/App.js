import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import "antd/dist/reset.css";
import Succes from "./Pages/Verify/Succes";
import Failed from "./Pages/Verify/Failed";
import Notifications from "./Pages/Account/Profile/Notifications";
import MyOrders from "./Pages/Account/Profile/MyOrders";
import Buyers from "./Pages/Account/Profile/Buyers";
import AccountMobile from "./Mobile/AccountMobile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/verify/succes" element={<Succes />} />
        <Route path="/auth/verify/failed" element={<Failed />} />
        <Route path="/profile" element={<Buyers />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/account" element={<AccountMobile />} />
        <Route path="/account/buyer" element={<Buyers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
