import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import Home from "../Pages/Home/Home";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute";
import InvalidPage from "../Pages/InvalidPage/InvalidPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecipe></ChefRecipe>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tastebite-server-side.vercel.app/chef/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <InvalidPage></InvalidPage>,
      },
    ],
  },
]);

export default router;
