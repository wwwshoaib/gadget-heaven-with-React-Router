import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import DashBoard from "./components/DashBoard/DashBoard";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Statistics from "./components/Statistics/Statistics";
import Root from "./components/Root/Root";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import AllProducts from "./components/AllProducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../category.json'),
        children: [


          {
            path: '/category/:category',
            element: <Products></Products>,
            loader: () => fetch('../productsData.json'),

          },

        ]
      },
      {
        path: 'products/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../productsData.json')

      },


      {
        path: 'allproducts',
        element: <AllProducts></AllProducts>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        loader: () => fetch('/productsData.json')
      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);