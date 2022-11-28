import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading/Loading";

const AllSeller = () => {
  const url = `https://resale-market-server-ashiq121914.vercel.app/allseller`;

  const {
    data: allSellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allSeller"],
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

  // deleting user
  const handleDeleteUser = (user) => {
    fetch(
      `https://resale-market-server-ashiq121914.vercel.app/users/${user._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${user.name} deleted successfully`);
        }
      });
  };

  // for verify
  const handleVerify = (email) => {
    fetch(
      `https://resale-market-server-ashiq121914.vercel.app/users/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Seller verify successfull.");
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allSellers.map((allSeller, i) => (
              <tr key={allSeller._id}>
                <td>{i + 1}</td>
                <td>{allSeller.name}</td>
                <td>{allSeller.email}</td>
                <td
                  onClick={() => handleDeleteUser(allSeller)}
                  className="btn btn-error text-white mt-2"
                >
                  Delete
                </td>
                <td
                  onClick={() => handleVerify(allSeller.email)}
                  className="btn btn-success text-white mt-2 ml-5"
                >
                  Verify
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
