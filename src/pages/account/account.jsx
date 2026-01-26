import { Camera } from "lucide-react";
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
import { getUserById } from "../../api/accountAPI/accountAPI";
import { API_IMG } from "../../utils/url";
import { Button } from "../../components/ui/button";
const Account = () => {
  const token = localStorage.getItem("token");
  const account = useSelector((store) => store.accountSlice.account);
  const dispatch = useDispatch();
  const data = jwtDecode(token);
  console.log(account);

  useEffect(() => {
    dispatch(getUserById(data.sid));
  }, [dispatch]);
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
          <form>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 lg:flex-row-reverse lg:justify-between items-center">
                <aside className="flex pl-10 lg:p-0">
                  <img
                    width={200}
                    height={200}
                    className="rounded-full w-full shadow-2xl border"
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
                  <h1 className="text-2xl font-bold">Profile Picture</h1>
                  <p className="italic text-sm font-medium">
                    Add PNG/JPG or SVG
                  </p>
                </aside>
              </div>
              <hr />
              <div>
                <h1 className="text-2xl font-bold">Personal Information</h1>
                <div>
                  <aside className="grid lg:grid-cols-2 gap-5 p-5">
                    <Field>
                      <FieldLabel htmlFor="input-field-userName">
                        Username
                      </FieldLabel>
                      <Input
                        id="input-field-userName"
                        type="text"
                        name="userName"
                        defaultValue={account?.userName}
                        placeholder="Username"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="input-field-firstName">
                        First Name
                      </FieldLabel>
                      <Input
                        id="input-field-firstName"
                        type="text"
                        name="firstName"
                        defaultValue={account?.firstName}
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
                        Email
                      </FieldLabel>
                      <Input
                        id="input-field-tel"
                        type="tel"
                        name="tel"
                        defaultValue={'+992 ' + account?.phoneNumber}
                        placeholder="tel"
                      />
                    </Field>  
                    <Field>
                      <FieldLabel htmlFor="input-field-date">
                        Birth Date
                      </FieldLabel>
                      <Input
                        id="input-field-date"
                        type="date"
                        name="date"
                      />
                    </Field>  
                    <Field>
                      <FieldLabel htmlFor="input-field-date">
                        Submit
                      </FieldLabel>
                      
                    <Button type='submit'>EDIT</Button>
                    </Field>  
                  </aside>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Account;