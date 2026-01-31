import React from "react";
import MainBtn from "../../components/mainBtn";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";

const Error = () => {
  return (
    <div className="min-h-screen max-w-full flex justify-center flex-col gap-5 items-center">
      <h1 className="text-9xl flex gap-3 text-[#9999] font-bold lg:text-[12rem]">
        4
        <SearchIcon className="lg:w-40 lg:h-50 w-30 h-40 opacity-60" />4
      </h1>
      <p className="text-3xl text-gray-500 font-medium">
        Sorry Page is not found
      </p>

      <Link to={"/"}>
        <MainBtn text={"Go to Home"} />
      </Link>
    </div>
  );
};

export default Error;
