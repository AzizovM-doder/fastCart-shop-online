import { Camera, LogOut, Trash2 } from "lucide-react";
import React, { useEffect } from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
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
import {
  deleteUserProfile,
  getUserById,
  putUpdateUser,
} from "../../api/accountAPI/accountAPI";
import { API_IMG, saveToken } from "../../utils/url";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const token = localStorage.getItem("token");
  const account = useSelector((store) => store.accountSlice.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = token ? jwtDecode(token) : null;
  console.log(data);
  
  const editUserProfileSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Image", e.target["uploadImage"].files?.[0]);
    formData.append("FirstName", e.target["firstName"].value);
    formData.append("LastName", e.target["lastName"].value);
    formData.append("Email", e.target["email"].value);
    formData.append("PhoneNumber", e.target["phoneNumber"].value);
    formData.append("Dob", e.target["dob"].value);
    dispatch(putUpdateUser(formData));
    e.target.reset()
    window.location = '/account'
  };

  useEffect(() => {
    if (data?.sid) {
      dispatch(getUserById(data.sid));
    }
  }, [dispatch, data?.sid]);

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
        <div className="backdrop-blur-lg shadow-xl border-2 rounded-2xl p-5 lg:p-10 max-w-full">
          <div>
            <div className="flex flex-col gap-5">
              <form
                className="flex flex-col gap-5"
                onSubmit={editUserProfileSubmit}
              >
                <aside className="flex flex-col gap-5 lg:flex-row-reverse lg:justify-between items-center">
                  <aside className="flex pl-10 lg:p-0">
                    <img
                      width={200}
                      height={200}
                      className="rounded-full min-h-50  shadow-2xl object-cover border"
                      src={`${API_IMG}/${account?.image}`}
                    />
                    <div className="relative top-33 right-13 group">
                      <div className="text-white active:scale-90 p-3 justify-self-start bg-slate-600 rounded-full">
                        <Camera className="h-8  w-8" />
                      </div>
                      <input
                        className="w-10 absolute opacity-0 top-5  h-10 z-10"
                        type="file"
                        name="uploadImage"
                      />
                    </div>
                  </aside>
                  <aside>
                    <h1 className="text-2xl font-bold">
                      User :{" "}
                      <span className="text-3xl capitalize">
                        {account?.userName}
                      </span>
                    </h1>
                    <p className="italic text-sm font-medium">
                      Add PNG/JPG or SVG
                    </p>
                  </aside>
                </aside>
                <hr />
                <div>
                  <h1 className="text-2xl font-bold">Personal Information</h1>
                  <div>
                    <div className="grid lg:grid-cols-2 gap-5 p-5">
                      <Field>
                        <FieldLabel htmlFor="input-field-userName">
                          First Name
                        </FieldLabel>
                        <Input
                          id="input-field-userName"
                          type="text"
                          name="firstName"
                          defaultValue={account?.firstName}
                          placeholder="Username"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="input-field-lastName">
                          lastName
                        </FieldLabel>
                        <Input
                          id="input-field-lastName"
                          type="text"
                          name="lastName"
                          defaultValue={account?.lastName}
                          placeholder="firstName"
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
                          placeholder="firstName"
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
                          placeholder="Phone Number"
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
                        <FieldLabel>Submit</FieldLabel>
                        <Button type="submit">EDIT</Button>
                      </Field>

                      <Button
                        variant="destructive"
                        onClick={() => {
                          localStorage.removeItem('token')
                          navigate('/')
                        }}
                        className={"col-span-2"}
                      >
                        <LogOut/>
                        Log Out
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Account;
