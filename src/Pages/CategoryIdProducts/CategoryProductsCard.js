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
    post_time,
    seller_name,
    seller_state,
  } = categoryProduct;

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
    fetch("https://resale-market-server-ashiq121914.vercel.app/wishlist", {
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
        <h2 className="card-title text-white text-3xl">{title}</h2>
        <p className="text-white text-xl">Location: {location}</p>
        <p className="text-white text-xl">Resale Price: {resale_price}</p>
        <p className="text-white text-xl">Original Price: {origianal_price}</p>
        <p className="text-white text-xl">Use time: {years_of_use}</p>
        <p className="text-white text-xl">Time of the post: {post_time}</p>
        <p className=" mb-5 text-white text-xl">
          Seller Name: {seller_name}{" "}
          {seller_state && (
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
              className="btn btn-primary mt-3 mx-auto"
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
