import React from "react";
import MainBtn from "../../components/mainBtn";

const EditProfile = () => {
  return (
    <aside className="shadow-sm w-full lg:w-220 p-5 flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-[#DB4444] text-xl font-bold">Profile</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <input
            type="text"
            defaultValue={account?.userName || "No User Name"}
            placeholder="First Name"
            className="py-3 px-5 border-2 rounded-sm w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="py-3 px-5 w-full border-2 rounded-sm"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <input
            type="email"
            placeholder="Email address"
            className="py-3 px-5 border-2 rounded-sm w-full"
          />
          <input
            type="text"
            placeholder="Street address"
            className="py-3 px-5 w-full border-2 rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-col py-5 gap-5">
        <h1 className="text-xl font-bold">Password Changes</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <input
            type="password"
            placeholder="Current passwod"
            className="py-3 px-5 border-2 rounded-sm w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <input
            type="password"
            placeholder="New passwod"
            className="py-3 px-5 border-2 rounded-sm w-full"
          />
          <input
            type="password"
            placeholder="Confirm new passwod"
            className="py-3 px-5 w-full border-2 rounded-sm"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <MainBtn text={"Send Massage"} />
      </div>
    </aside>
  );
};

export default EditProfile;
