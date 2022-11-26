import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";

import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  console.log(user);
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
                  <Link to="/dashboard/allusers">All Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">All buyer</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Reported product</Link>
                </li>
              </>
            ) : isSeller ? (
              <>
                <li>
                  <Link to="/dashboard/allusers">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Add a product</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/adddoctor">My orders</Link>
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
