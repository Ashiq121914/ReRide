import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import ProductCategoryCard from "./ProductCategoryCard";

const ProductCategories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-20">
      <div>
        <h2 className="text-3xl text-center mb-20">Categories</h2>
      </div>
      <Link
        to="/categoryProducts"
        className="grid lg:grid-cols-3 w-4/5 mx-auto gap-8"
      >
        {categories.map((category) => (
          <ProductCategoryCard
            key={category._id}
            category={category}
          ></ProductCategoryCard>
        ))}
      </Link>
    </div>
  );
};

export default ProductCategories;
