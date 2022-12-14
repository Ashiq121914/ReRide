import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading/Loading";

const AllBuyer = () => {
  const url = `https://resale-market-server-ashiq121914.vercel.app/allbuyer`;

  const {
    data: allbuyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allbuyer"],
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
            </tr>
          </thead>
          <tbody>
            {allbuyers.map((allbuyer, i) => (
              <tr key={allbuyer._id}>
                <td>{i + 1}</td>
                <td>{allbuyer.name}</td>
                <td>{allbuyer.email}</td>
                <td
                  onClick={() => handleDeleteUser(allbuyer)}
                  className="btn btn-error text-white"
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

export default AllBuyer;
