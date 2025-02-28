import React from "react";
import InputField from "../components/InputFiels";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const { register } = useForm();
  return (
    <div className="flex md900:flex-row flex-col gap-2 h-screen justify-center items-center px-10 xl:px-72">
      <div className="w-full flex justify-center">
        <img
          src="https://login.rapidhr.com/assets/login/organization.svg"
          alt=""
        />
      </div>

      <div className="border-l-2 border-gray-300 h-[50%] md900:block hidden mx-4"></div>

      <div className="w-full grid">
        <form action="" className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-blue-500 text-4xl drop-shadow-md flex justify-center">
              AMS
            </h1>
            <h1 className="font-bold text-blue-500 text-xl flex justify-center">
              Login
            </h1>
            <p className="text-center text-gray-500">
              Welcome back! Please login to your account
            </p>
          </div>
          <InputField
            register={register}
            name="email"
            inputClassName="w-full text-xs rounded-sm"
            labelName="Email Address *"
            placeholder="Enter your organization email"
          />
          <InputField
            register={register}
            name="password"
            inputClassName="w-full text-xs rounded-sm"
            labelName="Password  *"
            placeholder="Enter your Password"
          />
          <Button
            labelName="Login"
            className="bg-blue-600 text-white w-full flex items-center justify-center text-center"
          />
          <p className="text-center">
            Don't have an account yet ?
            <Link to="/register" className="text-blue-600">
              Signup Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
