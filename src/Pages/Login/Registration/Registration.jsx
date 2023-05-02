import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { toast } from "react-toastify";
import useFirebase from "../../../Hook/useFirebase";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const { handleGoogleLogin, handleGithubLogin } = useFirebase();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth(app);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        setError("");
        toast.success("Successfully Registered");
        updateProfileInfo();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleName = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handlePhoto = (event) => {
    const photo = event.target.value;
    setPhoto(photo);
  };

  const handleEmail = (event) => {
    const email = event.target.value;
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      setError("Please enter a valid email");
      return;
    }

    setEmail(email);
    setError("");
  };

  const handlePassword = (event) => {
    const password = event.target.value;

    if (!/(?=.{6,})/.test(password)) {
      setError("Password must be at least 6 characters");
      return;
    }

    setPassword(password);
    setError("");
  };

  const updateProfileInfo = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <input
                onBlur={handleName}
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <input
                onBlur={handleEmail}
                type="text"
                placeholder="Email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                onBlur={handlePassword}
                type="text"
                placeholder="Password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                onBlur={handlePhoto}
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">
                  Already have an account?{" "}
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Sign up</button>
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
              Signup with Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-outline btn-secondary"
            >
              <FaGithub className="mr-2"></FaGithub>
              Signup with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
