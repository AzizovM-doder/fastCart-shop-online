import { Camera, LogOut } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { jwtDecode } from "jwt-decode";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, putUpdateUser } from "../../api/accountAPI/accountAPI";
import { API_IMG } from "../../utils/url";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const token = localStorage.getItem("token");
  const account = useSelector((store) => store.accountSlice.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = token ? jwtDecode(token) : null;

  const [preview, setPreview] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const editUserProfileSubmit = async (e) => {
    e.preventDefault();
    const file = e.target["uploadImage"]?.files?.[0];

    const formData = new FormData();
    if (file) formData.append("Image", file);
    formData.append("FirstName", e.target["firstName"].value);
    formData.append("LastName", e.target["lastName"].value);
    formData.append("Email", e.target["email"].value);
    formData.append("PhoneNumber", e.target["phoneNumber"].value);
    formData.append("Dob", e.target["dob"].value);

    await dispatch(putUpdateUser(formData));
    if (data?.sid) dispatch(getUserById(data.sid));
    setPreview(null);
  };

  useEffect(() => {
    if (data?.sid) dispatch(getUserById(data.sid));
  }, [dispatch, data?.sid]);

  const imgSrc = preview
    ? preview
    : account?.image
    ? `${API_IMG}/${account?.image}`
    : "https://api.dicebear.com/7.x/initials/svg?seed=User";

  return (
    <main className="lg:max-w-7xl py-10 m-auto">
      <Breadcrumb className="max-w-full pl-3 lg:pl-0 lg:-mr-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Account</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="lg:max-w-7xl lg:m-auto p-5 flex w-full *:w-full flex-col lg:flex-row gap-15">
        <div className="backdrop-blur-lg shadow-xl border-2 rounded-2xl p-5 lg:p-10 max-w-full bg-white/60">
          <form className="flex flex-col gap-5" onSubmit={editUserProfileSubmit}>
            <aside className="flex flex-col gap-5 lg:flex-row-reverse lg:justify-between items-center">
              <aside className="flex pl-10 lg:p-0">
                <img
                  width={200}
                  height={200}
                  className="rounded-full h-50 shadow-2xl object-cover border bg-white"
                  src={imgSrc}
                  alt="profile"
                />

                <div className="relative top-33 right-13 group">
                  <div className="text-white active:scale-90 p-3 bg-zinc-900 rounded-full shadow-lg">
                    <Camera className="h-8 w-8" />
                  </div>

                  <input
                    className="w-10 absolute opacity-0 top-5 h-10 z-10 cursor-pointer"
                    type="file"
                    name="uploadImage"
                    accept="image/*"
                    onChange={onFileChange}
                  />
                </div>
              </aside>

              <aside>
                <h1 className="text-2xl font-bold">
                  User:{" "}
                  <span className="text-3xl capitalize">
                    {account?.userName}
                  </span>
                </h1>
                <p className="italic text-sm font-medium text-zinc-600">
                  Upload PNG/JPG/SVG
                </p>
              </aside>
            </aside>

            <hr />

            <div>
              <h1 className="text-2xl font-bold">Personal Information</h1>

              <div className="grid lg:grid-cols-2 gap-5 p-5">
                <Field>
                  <FieldLabel htmlFor="input-field-firstName">
                    First Name
                  </FieldLabel>
                  <Input
                    id="input-field-firstName"
                    type="text"
                    name="firstName"
                    defaultValue={account?.firstName}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="input-field-lastName">
                    Last Name
                  </FieldLabel>
                  <Input
                    id="input-field-lastName"
                    type="text"
                    name="lastName"
                    defaultValue={account?.lastName}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="input-field-email">
                    Email
                  </FieldLabel>
                  <Input
                    id="input-field-email"
                    type="email"
                    name="email"
                    defaultValue={account?.email}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="input-field-tel">
                    Phone Number
                  </FieldLabel>
                  <Input
                    id="input-field-tel"
                    type="text"
                    name="phoneNumber"
                    defaultValue={account?.phoneNumber}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="input-field-date">
                    Birth Date
                  </FieldLabel>
                  <Input
                    id="input-field-date"
                    defaultValue={account?.dob}
                    type="date"
                    name="dob"
                  />
                </Field>

                <Field>
                  <FieldLabel>Save</FieldLabel>
                  <Button type="submit" className="w-full">
                    EDIT
                  </Button>
                </Field>

                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login", { replace: true });
                  }}
                  className="lg:col-span-2 flex gap-2"
                >
                  <LogOut />
                  Log Out
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Account;
