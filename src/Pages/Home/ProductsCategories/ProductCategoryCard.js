import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ category }) => {
  const { category_name, image, category_id } = category;
  return (
    <Link to={`/category/${category_id}`}>
      <div className="card  glass h-80">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body mx-auto">
          <h2 className="card-title text-3xl text-white">{category_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCategoryCard;
