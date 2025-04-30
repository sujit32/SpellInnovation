import { Route, Routes } from "react-router";
import AppLayout from "./components/layout/appLayout";

import Ui from "./pages/admin/Ui";

import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/dashboard/DAshboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/ui" element={<Ui />} />    
      </Route>
      <Route path="/login" element={<Login />}/>
      <Route path="/forgetpassword" element={<ForgetPassword />}/>
      <Route path="/resetpassword" element={<ResetPassword />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  );
};

export default App;
