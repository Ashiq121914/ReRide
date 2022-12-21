import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";

import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content   ">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    className="text-white text-lg"
                    to="/dashboard/allseller"
                  >
                    All Seller
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white text-lg"
                    to="/dashboard/addbuyer"
                  >
                    All buyer
                  </NavLink>
                </li>
              </>
            ) : isSeller ? (
              <>
                <li>
                  <NavLink
                    className="text-white text-lg"
                    to="/dashboard/myproducts"
                  >
                    My Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white text-lg"
                    to="/dashboard/addproduct"
                  >
                    Add a product
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className="text-white text-lg"
                    to="/dashboard/myorders"
                  >
                    My orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-white text-lg"
                    to="/dashboard/wishlist"
                  >
                    Wishlist
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
