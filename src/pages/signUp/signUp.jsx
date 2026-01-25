import React from "react";
import MainBtn from "../../components/mainBtn";
import { Link } from "react-router-dom";

const SignUp = () => {
  const submitRegister = (e) => {
    e.preventDefault();
    const requestRegisterData = {
      userName: e.target['name'].value,
      phoneNumber: e.target['number'].value,
      email: e.target['email'].value,
      password: e.target['password'].value,
      confirmPassword: e.target['confirmPassword'].value,
    };
  };
  return (
    <main className="p-5  lg:min-h-160 lg:pt-15 lg:mb-25 flex flex-col justify-center items-center w-full lg:w-xl m-auto *:w-full">
      <form
        onSubmit={submitRegister}
        className="flex flex-col items-start gap-5"
      >
        <h1 className="text-4xl font-bold">Create an account</h1>
        <p className="font-medium">Enter your details below</p>
        <div className="flex flex-col w-full gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-2 rounded-sm py-3 px-5 w-full"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone number"
            className="border-2 rounded-sm py-3 px-5 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-2 rounded-sm py-3 px-5 w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-2 rounded-sm py-3 px-5 w-full"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="border-2 rounded-sm py-3 px-5 w-full"
          />
          <button
            className="px-5 py-3 bg-[#DB4444] text-white font-medium rounded-sm"
            type="submit"
          >
            Create Account
          </button>

          <p className="text-center flex justify-center gap-5">
            Already have account?{" "}
            <Link to={"/login"} className="underline text-gray-500">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
