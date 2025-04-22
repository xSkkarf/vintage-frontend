import MainLayout from "../components/layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Error from "../pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "products/:id?",
        element: <Products />,
        loader: ({params}) => {
            if (!params.id){
                return true;
            }
            if (typeof Number(params.id) == "number" && Number(params.id) > 0) {
                console.log(params.id);
                return params.id;
            } else {
                throw new Response("Bad request", {
                    status: 400,
                    statusText: "Catgory not found"
                })
            }
        }
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter