import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { MdOutlineVerified } from "react-icons/md";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const CategoryProductsCard = ({ categoryProduct, setProduct }) => {
  const { user } = useContext(AuthContext);
  const {
    image,
    title,
    location,
    resale_price,
    origianal_price,
    years_of_use,
    product_condition,
    post_time,
    seller_name,
    seller_verified,
    seller_phone,
    seller_email,
    description,
  } = categoryProduct;

  // getting particular user
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http:/localhost:5000/users/${seller_email}`);
      const data = await res.json();
      user.push(data.items[0]);
      return data;
    },
  });

  // for wishlist
  const handleWishList = (categoryProduct) => {
    const {
      image,
      title,
      location,
      resale_price,
      origianal_price,
      years_of_use,
      product_condition,
      post_time,
      seller_name,
      seller_verified,
      seller_phone,
      seller_email,
      description,
    } = categoryProduct;
    const wishlist = {
      image,
      title,
      location,
      resale_price,
      origianal_price,
      years_of_use,
      product_condition,
      post_time,
      seller_name,
      seller_verified,
      seller_phone,
      seller_email,
      description,
      userEmail: user.email,
    };
    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setProduct(null);
          toast.success("added to the wishlist");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-20">
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{location}</p>
        <p>{resale_price}</p>
        <p>{origianal_price}</p>
        <p>{years_of_use}</p>
        <p>{post_time}</p>
        <p className=" mb-5">
          {seller_name}{" "}
          {seller_verified && (
            <MdOutlineVerified className="bg-green-700 inline text-white text-xl ml-1"></MdOutlineVerified>
          )}
        </p>

        <div>
          <div className="card-actions justify-center">
            <label
              onClick={() => setProduct(categoryProduct)}
              className="btn btn-primary"
              htmlFor="booking-modal"
            >
              Book Now
            </label>
          </div>
          <div>
            <button
              onClick={() => handleWishList(categoryProduct)}
              className="btn btn-primary mt-3"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsCard;
