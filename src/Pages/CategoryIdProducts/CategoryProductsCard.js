import React from "react";
import { MdOutlineVerified } from "react-icons/md";
const CategoryProductsCard = ({ categoryProduct }) => {
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

        <div className="card-actions justify-center">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsCard;
