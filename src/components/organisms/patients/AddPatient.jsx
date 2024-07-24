import * as React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import CustomModal from "../../atoms/Modal";
import TextInput from "../../atoms/SimpleTextInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../atoms/Button";

export default function AddPatient({ open, handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  return (
    <CustomModal
      open={open}
      onClose={handleClose}
      title="Add Patient"
      description="After adding the patient, they will be able to register and use the platform."
      titleClassName="modalTitle"
      modalStyle={{
        "@media (max-width: 426px)": {
          width: "300px", // Set width to auto for small screens
          padding: "20px", // Set height to auto for small screens
        },
        "@media (max-width: 375px)": {
          width: "250px", // Set width to auto for small screens
          padding: "20px", // Set height to auto for small screens
        },
      }}
    >
      <Grid container spacing={2} className="margin-top-12">
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className="relative border-radius-50">
            <TextInput
              name="firstName"
              control={control}
              rules={{ required: "First Name is required" }}
              label="First Name"
              errors={errors}
            />
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className="relative border-radius-50">
            <TextInput
              name="lastName"
              control={control}
              rules={{ required: "Last Name is required" }}
              label="Last Name"
              errors={errors}
            />
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className="relative border-radius-50">
            <TextInput
              name="Email Address"
              control={control}
              rules={{ required: "Email Address is required" }}
              label="Email Address"
              errors={errors}
            />
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className="relative border-radius-50">
            <TextInput
              name="Phone Number"
              control={control}
              rules={{ required: "Phone Number is required" }}
              label="Phone Number"
              errors={errors}
            />
          </div>
        </Grid>
      </Grid>
      <div>
        <CustomButton
          text="Add Patient"
          width="100%"
          borderRadius="50px"
          className="text_white margin-top-30 responsive_modal_patient"
          height="38px"
          backgroundColor="var(--primary-color)"
        />
      </div>
    </CustomModal>
  );
}
