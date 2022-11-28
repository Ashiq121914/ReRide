import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyer from "../../Pages/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/AllSeller/AllSeller";
import Blog from "../../Pages/Blog/Blog";
import CategoryIdProducts from "../../Pages/CategoryIdProducts/CategoryIdProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import WishlistPayment from "../../Pages/Dashboard/Payment/WishlistPayment";
import Wishlist from "../../Pages/Dashboard/Wishlist/Wishlist";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import AdminRoute from "../AdminRoute.js/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <CategoryIdProducts></CategoryIdProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://resale-market-server-ashiq121914.vercel.app/category/${params.id}`
          );
        },
      },
    ],
  },
  {
    path: "dashboard",
    errorElement: <DisplayError></DisplayError>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addbuyer",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://resale-market-server-ashiq121914.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: "/dashboard/WishlistPayment/:id",
        element: <WishlistPayment></WishlistPayment>,
        loader: ({ params }) =>
          fetch(
            `https://resale-market-server-ashiq121914.vercel.app/wishlists/${params.id}`
          ),
      },
    ],
  },
]);
