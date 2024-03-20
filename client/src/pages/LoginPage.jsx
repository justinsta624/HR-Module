import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const LoginPage = () => {
  return (
    <div className="login-main row-fluid d-flex justify-content-center">
      <div className="col-md-3 text-center m-4">
        <h2>Please Login / Sign Up</h2>
        <hr />
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
}

export default LoginPage;