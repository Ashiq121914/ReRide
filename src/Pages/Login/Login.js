import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { signIn, googleSignin } = useContext(AuthContext);

  // for error in this page
  const [loginError, setLoginError] = useState("");

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  // for redirect
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        toast.success("user login success");
      })
      .catch((error) => setLoginError(error.message));
  };

  // // for google
  // const hangleGoogleSignIn = () => {
  //   googleSignin()
  //     .then((result) => {
  //       const user = result.user;
  //       setLoginUserEmail(user.email);
  //       navigate("/");
  //     })
  //     .catch((error) => setLoginError(error.message));
  // };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl">Login</h2>
        {/* help of react hook form */}
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              className="input input-bordered w-full max-w-xs"
              type="email"
              {...register("email", { required: "email is required" })}
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              className="input input-bordered w-full max-w-xs"
              type="password"
              {...register("password", {
                required: "please input your password",
                minLength: {
                  value: 6,
                  message: "password must be 6 charecters or longer",
                },
              })}
            />
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>

          <input
            className="btn btn-success w-full"
            value="Login"
            type="submit"
          />
        </form>
        <div>{loginError && <p className="text-error">{loginError}</p>}</div>
        <p>
          New to Re-Ride?{" "}
          <Link to="/signup" className="text-white">
            create new account
          </Link>
        </p>
        {/* <div className="divider">OR</div> */}
        {/* <div
          onClick={hangleGoogleSignIn}
          className="btn btn-success btn-outline w-full"
        >
          Login with google
        </div> */}
      </div>
    </div>
  );
};

export default Login;
