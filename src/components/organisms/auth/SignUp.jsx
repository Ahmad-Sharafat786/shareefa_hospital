import * as React from "react";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import { IMAGES } from "../../../assets/images";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import SelectInput from "../../atoms/Select";
import PasswordInput from "../../atoms/PasswordField";
import TextInput from "../../atoms/SimpleTextInput";
import Logo from "../../atoms/Logo";
import { LoaderCenter } from "../../atoms/Loader";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function SignUp() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const [toasterLoader, setToasterLoader] = useState(true);

  const onSubmit = () => {
    setToasterLoader(false);
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };
  const roleOptions = [
    { value: 10, label: "Admin" },
    { value: 20, label: "Doctor" },
    { value: 30, label: "Patient" },
    { value: 40, label: "Staff" },
  ];
  return (
    <>
      <ToastContainer />
      <Box sx={{ width: "100%" }} className="overflow-x-hidden">
        <Grid
         
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="test-new"
        >
          <Grid
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="flex justify-center items-center h-100 custom_vheight"
          >
            <Item>
              <div className="flex justify-center items-center flex-col">
                <Logo />
                <h3 className="font-bold dark-gray-600 font-30 padding-top-30 main_sigin">
                  Sign Up
                </h3>
                <div className="font-16 font-normal padding-top-10 if_not_account">
                  or <span className="text-primary">create an account</span> if
                  not registered yet
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div
                    className="w-100 flex flex-col items-center justify-center margin-top-30"
                    style={{ borderRadius: "50px" }}
                  >
                    <Grid container className="w-75" spacing={2}>
                      <Grid lg={6} md={12} sm={12} xs={12} className="px-0">
                        <TextInput
                          name="firstName"
                          control={control}
                          rules={{ required: "First Name is required" }}
                          label="First Name"
                          errors={errors}
                        />
                      </Grid>
                      <Grid
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        className="lastName_removePadding"
                      >
                        <TextInput
                          name="lastName"
                          control={control}
                          rules={{ required: "Last Name is required" }}
                          label="Last Name"
                          errors={errors}
                        />
                      </Grid>
                      <Grid lg={12} md={12} sm={12} xs={12} className="px-0">
                        <TextInput
                          name="email"
                          control={control}
                          rules={{
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message:
                                "Entered value does not match email format",
                            },
                          }}
                          label="Email"
                          errors={errors}
                        />
                      </Grid>
                      <Grid lg={6} md={12} sm={12} xs={12} className="px-0">
                        <PasswordInput
                          name="password"
                          control={control}
                          rules={{ required: "Password is required" }}
                          label="Password"
                          errors={errors}
                        />
                      </Grid>
                      <Grid
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        className="lastName_removePadding"
                      >
                        <PasswordInput
                          name="confirmPassword"
                          control={control}
                          rules={{
                            required: "Please confirm your password",
                            validate: (value) =>
                              value === watch("password") ||
                              "The passwords do not match",
                          }}
                          label="Confirm Password"
                          errors={errors}
                        />
                      </Grid>
                      <Grid
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        className="px-0 pt-[10px]"
                      >
                        <SelectInput
                          name="role"
                          control={control}
                          rules={{ required: "Role is required" }}
                          label="Role"
                          errors={errors}
                          options={roleOptions}
                        />
                      </Grid>

                      {!toasterLoader ? (
                        <div className="flex justify-center items-center w-100">
                          <LoaderCenter color="var(--primary-color)" />
                        </div>
                      ) : (
                        <button
                          type="submit"
                          className="w-100 bg-primary rounded-full p-2 text_white log_inBtn margin-top-30"
                        >
                          Sign Up
                        </button>
                      )}

                      <div className="horizontal-lines flex margin-top-16 w-100">
                        <div className="line"></div>
                        <div className="or dark-gray-500">
                          or Sign up with with
                        </div>
                        <div className="line"></div>
                      </div>
                      <button className="w-100 bright-gray-50-bg rounded-full p-2 text_white margin-top-12">
                        <div className="flex justify-center gap-3">
                          <span>
                            <FcGoogle size={20} />
                          </span>
                          <div className="dark-gray-500  font-12">
                            Continue with Google
                          </div>
                        </div>
                      </button>
                      <button className="w-100 bright-gray-50-bg rounded-full p-2 text_white margin-top-12">
                        <div className="flex justify-center gap-3">
                          <span>
                            <FaApple size={20} color="black" />
                          </span>
                          <div className="dark-gray-500  font-12">
                            Continue with Apple
                          </div>
                        </div>
                      </button>
                      <div className="flex justify-center items-center margin-top-16 dark-gray-400 if_not_accountEnd w-100">
                        Already have an account? &nbsp;
                        <Link to="/">
                          <span className="font-15 text-primary font-medium Sign_Up">
                            Log In
                          </span>
                        </Link>
                      </div>
                    </Grid>
                  </div>
                </form>
              </div>
            </Item>
          </Grid>

          <Grid
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="bg-image rounded-[50px]"
          >
            <div className="w-100 h-100 flex justify-center items-center relative">
              <img
                src={IMAGES.Doctor}
                alt="Doctor"
                className="absolute doctor-image h-100 right-0 bg-cover"
              />
              <img
                src={IMAGES.Logo}
                alt="Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
