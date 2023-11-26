import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState();

  const { signUp, registerUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdUser = await signUp(user.email, user.password);
      await registerUser(user.email, user.username, createdUser);
      navigate("/");
    } catch (error) {
      setError(error.message);
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="mt-24 w-full flex content-center justify-center">
        <form
          className="w-1/3 shadow-2xl h-auto px-10 py-8 flex content-center flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <div>
            {error && <ToastContainer />}
            <h1 className="text-center text-xl font-semibold">Register Form</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Your username"
                onChange={handleChange}
                className="h-10 rounded-md px-4 border py-2 text-grey-darkest"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                onChange={handleChange}
                className="h-10 rounded-md px-4 border py-2 text-grey-darkest"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                onChange={handleChange}
                className="h-10 rounded-md px-4 border py-2 text-grey-darkest"
                required
              />
              <span>
                Already have an account?{" "}
                <Link to={"/login"}>
                  <span className="text-blue-500 hover:text-blue-700 no-underline">
                    Login now
                  </span>
                </Link>
              </span>
            </div>
          </div>
          <div>
            <button className="flex items-center mt-6 gap-1 p-5 font-semibold text-white bg-boardColor rounded-md hover:bg-blue-800 w-full h-10 text-center justify-center text-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
