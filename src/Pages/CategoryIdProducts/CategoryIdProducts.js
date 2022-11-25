import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryProductsCard from "./CategoryProductsCard";

const CategoryIdProducts = () => {
  const categoryProducts = useLoaderData();

  console.log(categoryProducts);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-4/5 lg:mx-auto">
      {categoryProducts.map((categoryProduct) => (
        <CategoryProductsCard
          key={categoryProduct._id}
          categoryProduct={categoryProduct}
        ></CategoryProductsCard>
      ))}
    </div>
  );
};

export default CategoryIdProducts;
