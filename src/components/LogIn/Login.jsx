import { React, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import ResetPasswordModal from "../ResetPasswordModal/ResetPasswordModal.jsx";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const [showModal, setShowModal] = useState(false);

  const modalEmailRef = useRef(null);

  const { logIn, googleLogIn, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await logIn(user.email, user.password);
      console.log(userCredentials);
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

  const handleLogInGoogle = async () => {
    try {
      await googleLogIn();
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

  const handleResetPassword = async () => {
    try {
      const modalEmail = modalEmailRef.current.value;
      await resetPassword(modalEmail);
      closeModal();
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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
            <h1 className="text-center text-xl font-semibold">Login Form</h1>
          </div>
          <div className="flex flex-col gap-4">
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
              <div className="flex items-center justify-between mt-2">
                <span>
                  Not registered yet?{" "}
                  <Link to={"/register"}>
                    <span className="text-blue-500 hover:text-blue-700 no-underline">
                      Do it now
                    </span>
                  </Link>
                </span>

                <Link>
                  <span
                    className="text-blue-500 hover:text-blue-700 no-underline"
                    onClick={openModal}
                  >
                    Forgot password?
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <button className="flex items-center mt-5 gap-1 p-5 font-semibold text-white bg-boardColor rounded-md hover:bg-blue-800 w-full h-10 text-center justify-center text-lg">
              Login
            </button>
          </div>
          <div>
            <button
              className="flex items-center mt-5 gap-4 p-5 font-semibold w-full h-10 text-center justify-center text-lg border border-gray-700 rounded-md text-gray-700 hover:border-black hover:text-black"
              onClick={handleLogInGoogle}
            >
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </button>
          </div>
        </form>
        <ResetPasswordModal
          showModal={showModal}
          closeModal={closeModal}
          onSubmit={handleResetPassword}
          emailRef={modalEmailRef}
        />
      </div>
    </>
  );
}

export default Login;
