import React from "react";
import InputField from "../components/InputFiels";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    reset();
    console.log("Form Data:", data);
  };

  return (
    <div className="grid md900:grid-cols-2 gap-4 place-items-center h-screen">
      <div className="w-full grid">
        <img
          src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/09/StartFreeTrail.svg"
          alt="Signup Illustration"
        />
      </div>

      <div className="w-full grid px-6">
        <h1 className="py-10 text-blue-500 text-3xl grid place-content-center font-bold">
          Sign Up
        </h1>

        <div className="flex flex-col gap-4 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4 w-full">
              <div className="w-full">
                <InputField
                  register={register}
                  name="firstname"
                  labelName="First Name *"
                  inputClassName="w-full text-xs rounded-sm"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="w-full">
                <InputField
                  register={register}
                  name="lastname"
                  labelName="Last Name *"
                  inputClassName="w-full text-xs rounded-sm"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <InputField
              register={register}
              name="organizationname"
              inputClassName="w-full text-xs rounded-sm"
              labelName="Organization Name *"
              placeholder="Enter your organization name"
            />

            <InputField
              register={register}
              name="email"
              inputClassName="w-full text-xs rounded-sm"
              labelName="Email Address *"
              placeholder="Enter your organization email"
            />

            <InputField
              register={register}
              name="phonenumber"
              type="text"
              inputClassName="w-full text-xs rounded-sm"
              labelName="Phone Number *"
              placeholder="Enter your phone number"
            />

            <fieldset className="mt-4">
              <legend className="font-semibold">
                Choose subscription type * :
              </legend>
              <div className="flex gap-4 pt-2 items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    {...register("subscription_type", {
                      required: "Please select an option",
                    })}
                    value="HRMS and Recruitment"
                  />
                  HRMS and Recruitment
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    {...register("subscription_type", {
                      required: "Please select an option",
                    })}
                    value="HRMS"
                  />
                  HRMS
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    {...register("subscription_type", {
                      required: "Please select an option",
                    })}
                    value="Recruitment"
                  />
                  Recruitment
                </label>
              </div>
            </fieldset>

            <InputField
              register={register}
              name="password"
              type="password"
              inputClassName="w-full text-xs rounded-sm"
              labelName="Password *"
              placeholder="Enter your password"
            />

            <div className="pt-4">
              <Button
                type="submit"
                labelName="SIGN UP"
                labelClassName="text-center"
                className="bg-blue-500 text-white flex justify-center items-center w-full"
              />
            </div>
          </form>

          <div className="flex flex-col justify-center gap-4 items-center">
            <h1>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 cursor-pointer">
                Sign In
              </Link>
            </h1>
            <p className="text-center text-sm text-gray-600">
              By signing up, you agree to our Privacy Policy, Refund Policy, and
              Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
