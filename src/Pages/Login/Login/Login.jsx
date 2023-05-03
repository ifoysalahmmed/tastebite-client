import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-toastify";
import useFirebase from "../../../Hook/useFirebase";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const { handleGoogleLogin, handleGithubLogin } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        setError("");
        toast.success("Successfully Login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  return (
    <div className="hero min-h-screen bg-lime-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-violet-200">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onBlur={handleEmail}
                type="text"
                placeholder="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onBlur={handlePassword}
                type="text"
                placeholder="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">
                  Don't have an account?{" "}
                  <Link
                    to="/registration"
                    className="label-text-alt link link-hover"
                  >
                    Please Register
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text-alt text-warning">{error}</p>
              </label>
            </div>
          </form>
          <div className="btn-group btn-group-vertical mx-4 mb-4">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-accent w-full mb-2"
            >
              <FaGoogle className="mr-2"></FaGoogle>
              Login with Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-outline btn-secondary"
            >
              <FaGithub className="mr-2"></FaGithub>
              Login with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
