import React from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const LoginPage = () => {
  return (
    <div className="login-main row-fluid d-flex justify-content-center">
      <div className="col-md-3 text-center m-4">
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
}

export default LoginPage;