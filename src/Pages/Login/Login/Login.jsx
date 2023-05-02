import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        setError("");
        toast.success("Successfully Login");
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                    Register
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
          <div className="btn-group btn-group-vertical">
            <button className="btn btn-outline btn-accent w-full">
              <FaGoogle className="mr-2"></FaGoogle>
              Login using Google
            </button>
            <button className="btn btn-outline btn-secondary">
              <FaGithub className="mr-2"></FaGithub>
              Login using Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
