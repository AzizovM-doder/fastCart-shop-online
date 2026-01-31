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
      <div className="rounded-2xl border border-black/10 bg-white shadow-sm py-15 px-5 dark:border-white/10 dark:bg-zinc-950">
        <form onSubmit={confirmLoginUser} className="space-y-4 ">
          <h1 className="text-4xl font-bold">Log in to Exclusive</h1>
          <p className="font-medium">Enter your details below</p>
          <div className="flex flex-col w-full gap-5">
            <input
              name="email"
              placeholder="User Name"
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-zinc-900 outline-none transition
                  placeholder:text-zinc-400 focus:border-black/20 focus:ring-4 focus:ring-black/5
                  dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500
                  dark:focus:border-white/20 dark:focus:ring-white/10"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-zinc-900 outline-none transition
                  placeholder:text-zinc-400 focus:border-black/20 focus:ring-4 focus:ring-black/5
                  dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500
                  dark:focus:border-white/20 dark:focus:ring-white/10"
            />

            <button
              className="w-full rounded-lg px-5 py-3 font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-70
                bg-[#DB4444] hover:brightness-95 active:brightness-90 focus:outline-none focus:ring-4 focus:ring-black/10
                dark:focus:ring-white/10"
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
      </div>
    </main>
  );
};

export default Login;
