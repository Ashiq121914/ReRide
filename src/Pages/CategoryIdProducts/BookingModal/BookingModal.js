import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const phone = form.phone.value;
    const meetingLocation = form.meetingLocation.value;

    const booking = {
      userName,
      userEmail,
      productName,
      productPrice,
      phone,
      meetingLocation,
      productPhoto: product.image,
    };
    form.reset();
    fetch("https://resale-market-server-ashiq121914.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setProduct(null);
          toast.success("booking confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{product.title}</h3>
          <form
            className="grid grid-cols-1 gap-4 mt-10"
            onSubmit={handleBooking}
          >
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              value={user?.displayName}
              className="input input-bordered w-full"
              disabled
            />
            <label>User Email</label>
            <input
              name="userEmail"
              type="email"
              value={user?.email}
              className="input input-bordered w-full"
              disabled
            />
            <label>Product Name</label>
            <input
              name="productName"
              type="text"
              value={product.title}
              className="input input-bordered w-full"
              disabled
            />
            <label>Product resale price</label>
            <input
              name="productPrice"
              type="text"
              value={product.resale_price}
              className="input input-bordered w-full"
              disabled
            />
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <label>Meeting location</label>
            <input
              type="text"
              name="meetingLocation"
              placeholder="Type here"
              className="input input-bordered w-full"
            />

            <br />
            <input
              type="submit"
              value="Submit"
              className="w-full max-w-xs btn btn-accent text-white mx-auto"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
