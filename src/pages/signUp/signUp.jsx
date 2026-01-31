import React from "react";
import MainBtn from "../../components/mainBtn";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { registerUser } from "../../api/authAPI/authAPI";
import toast from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.authSlice);
  const navigate = useNavigate();

  const submitRegister = async (e) => {
    e.preventDefault();
    const requestRegisterData = {
      userName: e.target["name"].value,
      phoneNumber: e.target["number"].value,
      email: e.target["email"].value,
      password: e.target["password"].value,
      confirmPassword: e.target["confirmPassword"].value,
    };
    if(e.target.password.value == e.target.confirmPassword.value){

      try {
        await dispatch(registerUser(requestRegisterData)).unwrap();
        navigate("/login");
      } catch (err) {
        console.error(err);
      }
    }
    else{
      toast.error("Password is wrong!")
    }
  };

  return (
    <main className="min-h-screen w-full px-4">
      <Dialog open={loading}>
        <DialogContent className="flex flex-col items-center justify-center gap-3 border-none bg-transparent shadow-none">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur px-6 py-5">
            <Loader2 className="w-8 h-8 animate-spin text-white" />
            <span className="text-sm font-medium text-white">
              Creating account...
            </span>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-full m-auto py-5 lg:max-w-xl">
        <div className="rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Create an account
              </h1>
              <p className="mt-2 font-medium text-zinc-600 dark:text-zinc-400">
                Enter your details below
              </p>
            </div>

            <form onSubmit={submitRegister} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-zinc-900 outline-none transition
                  placeholder:text-zinc-400 focus:border-black/20 focus:ring-4 focus:ring-black/5
                  dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500
                  dark:focus:border-white/20 dark:focus:ring-white/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="number"
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-zinc-900 outline-none transition
                  placeholder:text-zinc-400 focus:border-black/20 focus:ring-4 focus:ring-black/5
                  dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500
                  dark:focus:border-white/20 dark:focus:ring-white/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-zinc-900 outline-none transition
                  placeholder:text-zinc-400 focus:border-black/20 focus:ring-4 focus:ring-black/5
                  dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500
                  dark:focus:border-white/20 dark:focus:ring-white/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-zinc-900 outline-none transition
                  placeholder:text-zinc-400 focus:border-black/20 focus:ring-4 focus:ring-black/5
                  dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500
                  dark:focus:border-white/20 dark:focus:ring-white/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Confirm password
                </label>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-zinc-900 outline-none transition
                  placeholder:text-zinc-400 focus:border-black/20 focus:ring-4 focus:ring-black/5
                  dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500
                  dark:focus:border-white/20 dark:focus:ring-white/10"
                />
              </div>

              <button
                className="w-full rounded-lg px-5 py-3 font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-70
                bg-[#DB4444] hover:brightness-95 active:brightness-90 focus:outline-none focus:ring-4 focus:ring-black/10
                dark:focus:ring-white/10"
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Account"}
              </button>

              <p className="pt-2 text-center text-sm text-zinc-700 dark:text-zinc-300">
                Already have account?{" "}
                <Link
                  to="/login"
                  className="font-medium underline underline-offset-4 text-gray-500 hover:brightness-90"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div> 
      </div>
    </main>
  );
};

export default SignUp;
