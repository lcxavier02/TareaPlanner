import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Button from "../Button/Button";
import { FormProvider, useForm } from "react-hook-form";

function Login() {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <Navbar />
      <FormProvider {...methods}>
        <div className="mt-24 w-full flex content-center justify-center">
          <form
            action="/authenticate"
            className="w-1/3 shadow-2xl h-96 px-10 py-8 flex content-center flex-col justify-between"
          >
            <div>
              <h1 className="text-center text-xl font-semibold">Login Form</h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your email"
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
                  placeholder="Password"
                  className="h-10 rounded-md px-4 border py-2 text-grey-darkest"
                  required
                />
              </div>
            </div>
            <div>
              <button
                onClick={onSubmit}
                className="flex items-center gap-1 p-5 font-semibold text-white bg-buttonLog rounded-md hover:bg-blue-800 w-full h-10 text-center"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
    </>
  );
}

export default Login;
