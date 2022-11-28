import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import useToken from "../../../hooks/useToken";

const SignUp = () => {
  const { createUser, updateUser, googleSignin } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  // to redirect in the right page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("user created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.userType);
          })
          .catch((error) => setSignUpError(error.message));
      })
      .catch((error) => setSignUpError(error.message));
  };

  // for sending the user data in the database
  const saveUser = (name, email, userType) => {
    const user = { name, email, userType };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  // for google
  const hangleGoogleSignIn = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        const type = "user";
        saveUser(user.displayName, user.email, type);
        console.log(result);

        navigate("/");
      })
      .catch((error) => setSignUpError(error.message));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center text-white">Signup</h2>
        {/* using react hook here*/}
        <form onSubmit={handleSubmit(handleSignup)}>
          {/* name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              name="name"
              className="input input-bordered w-full max-w-xs"
              type="text"
              {...register("name", {
                required: "name is required",
              })}
            />
            {errors.name && <p className="text-error">{errors.name.message}</p>}
          </div>
          {/* email */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              className="input input-bordered w-full max-w-xs"
              type="email"
              {...register("email", {
                required: "email is required",
              })}
            />
            {errors.email && (
              <p className="text-error">{errors.email.message}</p>
            )}
          </div>
          {/* select type of accoutn */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">User Type</span>
            </label>
            <select
              name="userType"
              className="select select-bordered w-full max-w-xs"
              {...register("userType", {
                required: "type is required",
              })}
            >
              <option>user</option>
              <option>seller</option>
            </select>
            {errors.userType && (
              <p className="text-error">{errors.userType.message}</p>
            )}
          </div>
          {/* password */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              className="input input-bordered w-full max-w-xs"
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 charecter long",
                },
              })}
            />
            {errors.password && (
              <p className="text-error">{errors.password.message}</p>
            )}
          </div>

          <input
            className="btn btn-success w-full my-4"
            value="Signup"
            type="submit"
          />
        </form>
        <div>{signUpError && <p className="text-error">{signUpError}</p>}</div>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-white underline">
            please login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={hangleGoogleSignIn}
          className="btn  btn-success btn-outline w-full"
        >
          <FaGoogle className="mr-3 text-2xl"></FaGoogle>
          SignIn with google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
