import * as React from "react";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import { IMAGES } from "../../../assets/images";
import {
  IconButton,
  InputAdornment,
  FormControl,
  OutlinedInput,
  InputLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { TOASTER_STYLING_VALUES } from "../../../config";

import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { useState } from "react";
import TextInput from "../../atoms/EmailField";
import PasswordInput from "../../atoms/PasswordField";
import Logo from "../../atoms/Logo";
import { LoaderCenter } from "../../atoms/Loader";
import CustomButton from "../../atoms/Button";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [toasterLoader, setToasterLoader] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = (data) => {
    setToasterLoader(false);
    setTimeout(() => {
      if (data.email === "user@gmail.com") {
        const userData = { ...data, token: "token", userType: "user" };
        localStorage.setItem("dummy_user", JSON.stringify(userData));
        window.location.href = "/appointments";
      } else {
        toast.error("Invalid Email or Password", TOASTER_STYLING_VALUES);
        setToasterLoader(true);
      }
    }, 1500);
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box style={{ overflow: "hidden" }}>
          <Grid container>
            <Grid
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
              className="flex justify-center items-center"
            >
              <Item>
                <div className="flex justify-center items-center flex-col">
                  <Logo />

                  <h3 className="font-bold dark-gray-600 font-30 main_sigin">
                    Sign In
                  </h3>
    
                  <div className="font-16 font-normal padding-top-10 if_not_account">
                    or{" "}
                    <span className="text-primary font-medium">
                      create an account
                    </span>{" "}
                    if not registered yet
                  </div>
                  <div className="w-100 relative border-radius-50 custom_width_logIn">
                    <TextInput
                      id="email"
                      label="Email"
                      register={register}
                      errors={errors}
                    />

                    <PasswordInput
                      margin="15px 0px"
                      name="password"
                      label="Password"
                      control={control}
                      rules={{
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters long",
                        },
                      }}
                      errors={errors}
                      showPassword={showPassword}
                      handleClickShowPassword={handleClickShowPassword}
                    />

                    <div className="flex gap-3 padding-top-12 items-center justify-between">
                      <div>
                        <Checkbox
                          className="css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root px-0"
                          size="sm"
                        />{" "}
                        <span className="dark-gray-400 font-12">
                          Remember me
                        </span>
                      </div>
                      <div>
                        <Link
                          to="/forget-password"
                          className="forgot-password-color font-12"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    {!toasterLoader ? (
                      <LoaderCenter color="var(--primary-color)" />
                    ) : (
                      <button
                        type="submit"
                        className="w-100 bg-primary rounded-full mt-[2.5rem] p-[10px] text_white log_inBtn"
                      >
                        Login
                      </button>
                    )}
                    <div className="horizontal-lines flex margin-top-16">
                      <div className="line"></div>
                      <div className="or dark-gray-500">or login with</div>
                      <div className="line"></div>
                    </div>
                    <button className="w-100 bright-gray-50-bg rounded-full p-2 text_white margin-top-12">
                      <div className="flex justify-center items-center gap-3">
                        <span>
                          <FcGoogle size={20} />
                        </span>
                        <div className="dark-gray-500 font-12">
                          Continue with Google
                        </div>
                      </div>
                    </button>
                    <button className="w-100 bright-gray-50-bg rounded-full p-2 text_white margin-top-12">
                      <div className="flex justify-center items-center gap-3">
                        <span>
                          <FaApple size={20} color="black" />
                        </span>
                        <div className="dark-gray-500 font-12">
                          Continue with Apple
                        </div>
                      </div>
                    </button>
                    <div className="flex justify-center items-center padding-top-12 already-account if_not_accountEnd">
                      Don’t have an account?&nbsp;
                      <Link to="/register">
                        <span className="font-15 fw-500 text-primary Sign_Up">
                          Sign up.
                        </span>
                      </Link>
                    </div>
                  </div>
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
              <div className="w-100 vh-100  flex justify-center items-center relative">
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
      </form>
    </div>
  );
}
