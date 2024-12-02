import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../home/Home";
import AuthLayout from "../auth/AuthLayout";
import SignIn from "../auth/singup&in/SignIn";
import SignUp from "../auth/singup&in/SignUp";
import MainLayout from "../mainLayout/MainLayout";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/authleyout" element={<AuthLayout />}>
            <Route path="/authleyout/signup" element={<SignUp />} />
            <Route path="/authleyout/signin" element={<SignIn />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
