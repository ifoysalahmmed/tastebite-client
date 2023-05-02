import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const useFirebase = () => {
  const { providerLogin } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
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
