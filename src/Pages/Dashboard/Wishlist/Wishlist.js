import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Wishlist = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/wishlists?email=${user?.email}`;

  const { data: wishlists = [] } = useQuery({
    queryKey: ["wishlists", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl mb-5">My Wishlist</h3>
      <div className="overflow-x-auto">
        <table className="table w-4/5 mx-auto">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          {wishlists &&
            wishlists?.map((wishlist, i) => (
              <tr key={wishlist._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={wishlist.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                <td>{wishlist.title}</td>
                <td>{wishlist.resale_price}</td>
                <td>
                  {wishlist.resale_price && !wishlist.paid && (
                    <Link
                      className="btn btn-success text-white mt-4"
                      to={`/dashboard/WishlistPayment/${wishlist._id}`}
                    >
                      Pay
                    </Link>
                  )}
                  {wishlist.resale_price && wishlist.paid && (
                    <span className="text-green-500">Paid</span>
                  )}
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
