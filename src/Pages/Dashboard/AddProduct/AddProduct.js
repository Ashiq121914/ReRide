import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  // image hosting key
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);

  //for date picking
  const DatePicker = new Date();
  const date = `${DatePicker.getDate()}/${
    DatePicker.getMonth() + 1
  }/${DatePicker.getFullYear()}`;

  // for time picking
  var timePicker = new Date();
  const time = timePicker.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleProducts = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            category_id: data.selectCategory,
            image: imgData.data.url,
            title: data.ProductName,
            location: data.location,
            resale_price: data.ResalePrice,
            original_price: data.OriginalPrice,
            years_of_use: data.YearsOfUse,
            product_condition: data.selectCondition,
            post_time: `${date} ${time}`,
            seller_name: user.displayName,
            seller_verified: "",
            seller_phone: data.mobile,
            seller_email: user.email,
            description: data.productDescription,
          };
          console.log(product);
          //save doctor info in database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.ProductName} is added successfully`);
              navigate("/dashboard/myproducts");
            });
        }
      });
  };

  return (
    <div className="w-3/4 mx-auto p-7">
      <h2 className="text-3xl">add a product</h2>
      <form onSubmit={handleSubmit(handleProducts)}>
        {/* for name */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            name="ProductName"
            className="input input-bordered w-full "
            type="text"
            {...register("ProductName", {
              required: "ProductName is required",
            })}
          />
          {errors.ProductName && (
            <p className="text-error">{errors.ProductName.message}</p>
          )}
        </div>
        {/* for Origianl price */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Origianl price</span>
          </label>
          <input
            name="OriginalPrice"
            className="input input-bordered w-full "
            type="text"
            {...register("OriginalPrice", {
              required: "OriginalPrice is required",
            })}
          />
          {errors.OriginalPrice && (
            <p className="text-error">{errors.OriginalPrice.message}</p>
          )}
        </div>
        {/* for resale price */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Resale price</span>
          </label>
          <input
            name="ResalePrice"
            className="input input-bordered w-full "
            type="text"
            {...register("ResalePrice", {
              required: "ResalePrice is required",
            })}
          />
          {errors.ResalePrice && (
            <p className="text-error">{errors.ResalePrice.message}</p>
          )}
        </div>

        {/* for years of use */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Years of use</span>
          </label>
          <input
            name="YearsOfUse"
            className="input input-bordered w-full "
            type="text"
            {...register("YearsOfUse", {
              required: "YearsOfUse is required",
            })}
          />
          {errors.YearsOfUse && (
            <p className="text-error">{errors.YearsOfUse.message}</p>
          )}
        </div>

        {/* select condition */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Condition Type</span>
          </label>
          <select
            className="select select-ghost w-full "
            {...register("selectCondition", {
              required: "selectCondition is required",
            })}
          >
            <option>excellent</option>
            <option>good</option>
            <option>fair</option>
          </select>
          {errors.selectCondition && (
            <p className="text-error">{errors.selectCondition.message}</p>
          )}
        </div>

        {/* for seller mobile */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Seller Phone</span>
          </label>
          <input
            name="mobile"
            className="input input-bordered w-full "
            type="text"
            {...register("mobile", {
              required: "mobile is required",
            })}
          />
          {errors.mobile && (
            <p className="text-error">{errors.mobile.message}</p>
          )}
        </div>

        {/* for location */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">location</span>
          </label>
          <input
            name="location"
            className="input input-bordered w-full "
            type="text"
            {...register("location", {
              required: "location is required",
            })}
          />
          {errors.location && (
            <p className="text-error">{errors.location.message}</p>
          )}
        </div>

        {/* select category */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Select Category</span>
          </label>
          <select
            className="select select-ghost w-full "
            {...register("selectCategory", {
              required: "selectCategory is required",
            })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          {errors.selectCategory && (
            <p className="text-error">{errors.selectCategory.message}</p>
          )}
        </div>
        {/* photo upload */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            name="img"
            className="input input-bordered w-full "
            type="file"
            {...register("image", {
              required: "photo is required",
            })}
          />
          {errors.img && <p className="text-error">{errors.img.message}</p>}
        </div>
        {/* Product description */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product description</span>
          </label>
          <textarea
            name="productDescription"
            className="textarea textarea-bordered"
            placeholder="product Description"
            {...register("productDescription", {
              required: "productDescription is required",
            })}
          ></textarea>

          {errors.productDescription && (
            <p className="text-error">{errors.productDescription.message}</p>
          )}
        </div>

        <input
          className="btn btn-success w-full mt-4"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
