import * as React from "react";
import { IMAGES } from "../../../assets/images";
import styled from "@mui/system/styled";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdOutlineMail } from "react-icons/md";
import Logo from "../../atoms/Logo";
import { LoaderCenter } from "../../atoms/Loader";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [toasterLoader, setToasterLoader] = useState(true);

  const onSubmit = () => {
    ;
    setToasterLoader(false);
    setTimeout(() => {
      window.location.href = "/reset-password";
    }, 1500);
  };
  return (
    <Box>
      <Grid container className="test-new">
        <Grid
          xl={6}
          lg={6}
          md={12}
          sm={12}
          xs={12}
          className="flex justify-center items-center vh-100"
        >
          <Item className="w-75">
            <div className="flex justify-center items-center flex-col">
              <Logo />
              <h3 className="font-semibold dark-gray-600 text-[27px] padding-top-30 main_forgetPassword">
                Forgot Your Password?
              </h3>
              <div className="font-15 font-normal padding-top-14 if_not_account">
                Confirm your email, reset password is sent to your email
              </div>

              <div className="w-100" style={{ borderRadius: "50px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Entered value does not match email format",
                      },
                    }}
                    render={({ field }) => (
                      <FormControl
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        
                      >
                        <TextField
                          id="forget-email"
                          label="Email"
                          variant="outlined"
                          className="margin-top-16 w-100"
                          size="small"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                              message: "Invalid email address",
                            },
                          })}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdOutlineMail />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {errors.email && (
                          <FormHelperText error className="text-primary">
                            {errors.email.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                  {!toasterLoader ? (
                    <LoaderCenter color="var(--primary-color)" />
                  ) : (
                    <button
                      type="submit"
                      className="w-100 bg-primary rounded-full p-[10px] text_white mt-5 Sign_Up"
                      // onClick={handleLoader}
                    >
                      Send Email
                    </button>
                  )}
                </form>
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
          className="bg-image rounded-[50px] "
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
