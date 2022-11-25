import React from "react";

const ProductCategoryCard = ({ category }) => {
  const { category_name, image } = category;
  return (
    <div className="card  glass">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body mx-auto">
        <h2 className="card-title text-3xl text-white">{category_name}</h2>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
