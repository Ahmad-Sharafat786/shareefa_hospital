import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import GenericAvatar from "../../atoms/Avatar";
import { IMAGES } from "../../../assets/images";
import TextInput from "../../atoms/SimpleTextInput";
import { useForm } from "react-hook-form";
import SelectInput from "../../atoms/Select";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ImAttachment } from "react-icons/im";
import CustomButton from "../../atoms/Button";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const ProfileView = () => {
  const [hasErrors, setHasErrors] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    register
  } = useForm({
    defaultValues: {
      attachment: null,
    },
  });
  ;
  useEffect(() => {
    setHasErrors(Object.keys(errors).length > 0);
  }, [errors]);
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick=""
      className="fw-600 font-20"
    >
      Provider
    </Link>,

    <Typography key="3" color="text.primary" fontSize={20}>
      Profile View
    </Typography>,
  ];
  const genderOptions = [
    { value: 10, label: "Male" },
    { value: 20, label: "Female" },
    { value: 30, label: "Other" },
  ];
  const languageOptions = [
    { value: 10, label: "English" },
    { value: 20, label: "Urdu" },
    { value: 30, label: "French" },
  ];
  const onSubmit = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };
  return (
    <div className="generic_boxShadow p-[30px]">
      <div className=" flex justify-between items-center gap-4 pb-4 flex-wrap">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <div className="flex gap-[5px] items-center dark-gray-400 dark-gray-50-bg px-[10px] py-[5px] rounded-md">
          <FaRegEdit />
          <span>Edit</span>
        </div>
      </div>
      <Box gridColumn="span 12">
        <Box display="flex" alignItems="center">
          <GenericAvatar
            alt="Remy Sharp"
            src={IMAGES.PROFILELOGO}
            variant="rounded"
            borderRadius="50px"
            size={{ width: "70px", height: "70px" }}
          />
          <Box mx={5}>
            <Typography
              variant="body1"
              component="h6"
              className="generic-name-color"
              fontWeight="600"
              fontSize={20}
            >
              John Smith
            </Typography>
            <Typography variant="body2" component="p" className="dark-gray-500">
              Psychotherapist
            </Typography>
          </Box>
        </Box>
      </Box>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} className="padding-top-30">
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                name="firstName"
                label="First Name"
                control={control}
                rules={{ required: "First Name is required" }}
                errors={errors}
                type="text"
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                name="LastName"
                label="Last Name"
                control={control}
                rules={{ required: "Last Name is required" }}
                errors={errors}
                type="text"
              />
            </Grid>

            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                type="text"
                name="email"
                label="Email"
                control={control}
                rules={{ required: "Email is required" }}
                errors={errors}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                type="text"
                name="address"
                label="Address"
                control={control}
                rules={{ required: "Address is required" }}
                errors={errors}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                type="text"
                name="address"
                label="Address"
                control={control}
                rules={{ required: "Address 2 is required" }}
                errors={errors}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                type="number"
                name="phone"
                label="Phone"
                control={control}
                rules={{ required: "Phone Number is required" }}
                errors={errors}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                type="number"
                name="phone"
                label="Phone"
                control={control}
                rules={{ required: "Phone Number is required" }}
                errors={errors}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <SelectInput
                name="gender"
                control={control}
                rules={{ required: "Gender is required" }}
                label="Gender"
                errors={errors}
                options={genderOptions}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                type="number"
                name="SSN"
                label="SSN"
                control={control}
                rules={{ required: "SNN is required" }}
                errors={errors}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                type="number"
                name="phone"
                label="12345676890"
                control={control}
                rules={{ required: "Number is required" }}
                errors={errors}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                type="number"
                name="phone"
                label="12345676890"
                control={control}
                rules={{ required: "Number is required" }}
                errors={errors}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextInput
                type="text"
                name="Psychotherapist"
                label="Psychotherapist"
                control={control}
                rules={{ required: "Psychotherapist is required" }}
                errors={errors}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <SelectInput
                name="language"
                control={control}
                rules={{ required: "Language is required" }}
                label="Language"
                errors={errors}
                options={languageOptions}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              {/* <TextInput
                type="text"
                name="Attachment"
                label="Attachment"
                className="relative"
                control={control}
                rules={{ required: "Attachment is required" }}
                errors={errors}
              /> */}
              <Button
                className="w-100 dark-gray-400 button_upload_profile"
                sx={{
                  borderRadius: "50px",
                  border: errors.attachment ? "1px solid red" : "1px solid #E1E5EA",
                  boxShadow: "none",
                  backgroundColor: "white",
                  height: "42px",
                  "&:hover": {
                    boxShadow: "none",
                    color: "white",
                    backgroundColor: "transparent",
                    transition: "none",
                  },
                }}
                component="label"
                variant="contained"
                tabIndex={-1}
                startIcon={
                  <ImAttachment
                    size={15}
                    className={`absolute ${
                      hasErrors ? "top-[15px]" : "top-[15px]"
                    } right-5 dark-gray-400`}
                  />
                }
              >
                Attachment
                <VisuallyHiddenInput
                  type="file"
                  {...register("attachment", {
                    required: "Attachment is required",
                  })}
                  errors={errors}

                />
              </Button>
              {errors.attachment && (
                <Typography variant="p" color="#FF6060" fontSize={12}>
                  {errors.attachment.message}
                </Typography>
              )}
            </Grid>
          </Grid>
          <div className="flex justify-end item padding-top-30">
            <CustomButton
              fontSize="12px"
              text="Update"
              color="white"
              borderRadius="50px"
              width="120px"
              height="38px"
              backgroundColor="var(--primary-color)"
              fontWeight="400"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileView;
