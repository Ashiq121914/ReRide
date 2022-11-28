import React from "react";

const AdvertisedItemCard = ({ advertisedItem }) => {
  const {
    image,
    location,
    resale_price,
    seller_name,
    title,
    original_price,
    post_time,
    product_condition,
  } = advertisedItem;
  return (
    <>
      {advertisedItem.advertised && (
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Price:{resale_price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisedItemCard;
