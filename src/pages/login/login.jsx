import React from 'react'
import MainBtn from '../../components/mainBtn'

const Login = () => {
  return (
    
    <main className="p-5 py-20 w-full lg:max-w-xl m-auto">
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
          <button className='text-[#DB4444] font-medium'>Forget Password?</button>
          <MainBtn text={"Log In"} />
        </div>
      </form>
    </main>
  )
}

export default Login