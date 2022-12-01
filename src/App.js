import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import "antd/dist/reset.css";
import Succes from "./Pages/Verify/Succes";
import Failed from "./Pages/Verify/Failed";
import LoginTest from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/verify/succes" element={<Succes />} />
        <Route path="/auth/verify/failed" element={<Failed />} />
        <Route path="/logintest" element={<LoginTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
