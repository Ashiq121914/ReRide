import React from "react";

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
    <div className="card lg:card-side bg-base-100 shadow-xl">
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
        <p>{seller_name}</p>

        <div className="card-actions justify-center">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsCard;
