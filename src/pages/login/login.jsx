import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { loginUser } from "../../api/authAPI/authAPI";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.authSlice);

  const confirmLoginUser = async (e) => {
    e.preventDefault();
    const loginRequestData = {
      userName: e.target["email"].value,
      password: e.target["password"].value,
    };

    try {
      const res = await dispatch(loginUser(loginRequestData)).unwrap();
      if (res?.token) {
        localStorage.setItem("token", res.token);
      }
      window.location = "/";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="px-5 lg:min-h-160 lg:mb-25 flex flex-col items-center justify-center w-full lg:w-xl m-auto *:w-full">
      <Dialog open={loading}>
        <DialogContent className="flex flex-col items-center justify-center gap-3 border-none bg-background/80 backdrop-blur-sm">
          <Loader2 className="w-8 h-8 animate-spin" />
          <span className="text-sm font-medium">Checking credentials...</span>
        </DialogContent>
      </Dialog>

      <form
        onSubmit={confirmLoginUser}
        className="flex flex-col items-start gap-5"
      >
        <h1 className="text-4xl font-bold">Log in to Exclusive</h1>
        <p className="font-medium">Enter your details below</p>
        <div className="flex flex-col w-full gap-5">
          <input
            name="email"
            placeholder="User Name"
            className="border-2 rounded-sm py-3 px-5 w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-2 rounded-sm py-3 px-5 w-full"
          />

          <button
            className="px-5 py-3 bg-[#DB4444] text-white font-medium rounded-sm"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="text-center flex justify-center gap-5">
            Don't have account?
            <Link to={"/signUp"} className="underline text-gray-500">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
