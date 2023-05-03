import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import Home from "../Pages/Home/Home";
import Chefs from "../Pages/Home/Chefs";
import FoodCategories from "../Pages/Home/FoodCategories";
import CategoryFood from "../Pages/CategoryFood/CategoryFood";

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
        path: "/category/:id",
        element: <CategoryFood></CategoryFood>,
        loader: ({ params }) =>
          fetch(
            `https://tastebite-server-side.vercel.app/categories/${params.id}`
          ),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
