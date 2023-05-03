import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const useFirebase = () => {
  const { providerLogin } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Successfully Login");
        setUserInfo(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Successfully Login");
        setUserInfo(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return { userInfo, handleGoogleLogin, handleGithubLogin };
};

export default useFirebase;
