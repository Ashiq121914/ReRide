import { useQuery } from "@tanstack/react-query";

import React, { useContext } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/products?email=${user?.email}`;

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products", user?.email],
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
  if (isLoading) {
    return <Loading></Loading>;
  }

  // deleting product
  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${product.title} deleted successfully`);
        }
      });
  };
  // for advertisement
  const handleAdvertiseProduct = (product) => {
    fetch("http://localhost:5000/advertiseProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        toast.success(
          `${product.title} is added to advertise page successfully`
        );
      });
  };
  return (
    <div>
      <h3 className="text-3xl mb-5">My Products</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Original Price</th>
              <th>Resale Price</th>
              <th>Posted time</th>
              <th>Sales Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    {" "}
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.title}</td>
                  <td>{product.original_price}</td>
                  <td>{product.resale_price}</td>
                  <td>{product.post_time}</td>
                  <td className="btn mt-3 mr-4 ">{`available`}</td>
                  <td
                    onClick={() => handleAdvertiseProduct(product)}
                    className="btn btn-accent mt-3"
                  >
                    Advertise
                  </td>
                  <td
                    onClick={() => handleDeleteProduct(product)}
                    className="btn btn-error text-white ml-3 mt-3"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
