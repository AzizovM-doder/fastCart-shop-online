import React from 'react'
import MainBtn from '../../components/mainBtn'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className="px-5 lg:min-h-160 lg:mb-25 flex flex-col items-center justify-center w-full lg:w-xl m-auto *:w-full">
      <form className="flex flex-col items-start gap-5">
        <h1 className="text-4xl font-bold">Log in to Exclusive</h1>
        <p className="font-medium">Enter your details below</p>
        <div className="flex flex-col w-full gap-5">
          <input
            type="email"
            placeholder="Email or phone number"
            className="border-2 rounded-sm py-3 px-5 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 rounded-sm py-3 px-5 w-full"
          />
          <button
            className="px-5 py-3 bg-[#DB4444] text-white font-medium rounded-sm"
            type="submit"
          >
            Log In
          </button>
          <p className="text-center flex justify-center gap-5">
            Don't have account?{" "}
            <Link to={"/signUp"} className="underline text-gray-500">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  )
}

export default Login