import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register";
import store from './Redux/store'
import Forgotpassword from "./Components/Forgot password/Forgotpassword";
import Resetpassword from "./Components/resetpassword/Resetpassword";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import 'antd/dist/reset.css'

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgotpassword' element={<Forgotpassword/>} />
        <Route path='/resetpassword' element={<Resetpassword/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
