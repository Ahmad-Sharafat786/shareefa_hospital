import * as React from "react";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import { IMAGES } from "../../../assets/images";
import {
  IconButton,
  InputAdornment,
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  Checkbox,
  Button,
  FormHelperText,
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Logo from "../../atoms/Logo";
import { LoaderCenter } from "../../atoms/Loader";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function UpdatePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();
  const [toasterLoader, setToasterLoader] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword, setconfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickConfirmPassword = () => setconfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = () => {
    setToasterLoader(false);
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="test-new"
      >
        <Grid xl={6} lg={6} md={12} sm={12} xs={12}>
          <Item className="vh-100 flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <Logo />
              <h3 className="font-bold dark-gray-600 font-30 padding-top-30 main_forgetPassword">
                Update Your Password?
              </h3>
              <div className="font-15 font-normal padding-top-10 if_not_account">
                Confirm your email, reset password is sent to your email
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                  <Grid
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="flex justify-center items-center padding-top-36"
                  >
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Password is required" }}
                      render={({ field }) => (
                        <FormControl variant="outlined" className="w-75">
                          <InputLabel htmlFor="outlined-adornment-password">
                            Password
                          </InputLabel>
                          <OutlinedInput
                            {...field}
                            error={!!errors.password}
                            className="border-radius-50"
                            sx={{ padding: "4px 14px" }}
                            size="small"
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <FaEye className="text-primary" />
                                  ) : (
                                    <IoIosEyeOff className="text-primary" />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                          />
                          {errors.password && (
                            <FormHelperText error className="text-primary">
                              {errors.password.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="flex justify-center items-center margin-top-14 "
                  >
                    <Controller
                      name="confirmPassword"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === watch("password") ||
                          "The passwords do not match",
                      }}
                      render={({ field }) => (
                        <FormControl
                          sx={{ m: 1 }}
                          variant="outlined"
                          className="w-75 custom_removePadding"
                        >
                          <InputLabel htmlFor="outlined-adornment-confirm-password">
                            Confirm Password
                          </InputLabel>
                          <OutlinedInput
                            {...field}
                            name="confirmPassword"
                            error={!!errors.confirmPassword}
                            sx={{ borderRadius: "50px", padding: "4px 14px" }}
                            size="small"
                            id="outlined-adornment-confirm-password"
                            type={confirmPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickConfirmPassword}
                                  onMouseDown={handleMouseDownConfirmPassword}
                                  edge="end"
                                >
                                  {confirmPassword ? (
                                    <FaEye className="text-primary" />
                                  ) : (
                                    <IoIosEyeOff className="text-primary" />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Confirm Password"
                          />
                          {errors.confirmPassword && (
                            <FormHelperText error className="text-primary">
                              {errors.confirmPassword.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                      )}
                    />
                  </Grid>
                  {!toasterLoader ? (
                    <div className="flex justify-center items-center w-100">
                      <LoaderCenter color="var(--primary-color)" />
                    </div>
                  ) : (
                    <div className="w-100 flex justify-center items-center">
                      <button
                        type="submit"
                        className="w-75 flex justify-center items-center bg-primary rounded-full p-[10px] text_white mt-[35px] Sign_Up"
                        // onClick={handleLoader}
                      >
                        Send Email
                      </button>
                    </div>
                  )}
                </Grid>
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
          <div className="w-100 vh-100 flex justify-center items-center relative">
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
  );
}
