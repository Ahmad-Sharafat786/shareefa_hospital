import React from "react";
import CustomModal from "../../atoms/Modal";
import { Grid, Typography } from "@mui/material";
import TextInput from "../../atoms/SimpleTextInput";
import { useForm } from "react-hook-form";
import SelectInput from "../../atoms/Select";
import GenericDatePicker from "../../atoms/DatePicker";
import CustomButton from "../../atoms/Button";

const AddPrescriptionModal = ({ open, handleClose }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();
  const genderOptions = [
    { value: 10, label: "Male" },
    { value: 20, label: "Female" },
    { value: 30, label: "Other" },
  ];
  const medicationOptions = [
    { value: 1, label: "Medication A" },
    { value: 2, label: "Medication B" },
    { value: 3, label: "Medication C" },
  ];
  const dosageOptions = [
    { value: 1, label: "Dosage 1" },
    { value: 2, label: "Dosage 2" },
    { value: 3, label: "Dosage 3" },
  ];
  const formOptions = [
    { value: 1, label: "Form 1" },
    { value: 2, label: "Form 2" },
    { value: 3, label: "Form 3" },
  ];

  const routeOptions = [
    { value: 1, label: "Route 1" },
    { value: 2, label: "Route 2" },
    { value: 3, label: "Route 3" },
  ];

  const frequencyOptions = [
    { value: 1, label: "Frequency 1" },
    { value: 2, label: "Frequency 2" },
    { value: 3, label: "Frequency 3" },
  ];

  const durationOptions = [
    { value: 1, label: "Duration 1" },
    { value: 2, label: "Duration 2" },
    { value: 3, label: "Duration 3" },
  ];
  return (
    <div>
      <CustomModal
       
        open={open}
        onClose={handleClose}
        title="Add Prescription"
        description="Fill the detail to add prescription"
        modalStyle={{
          maxHeight: "100vh",
          overflowY: "scroll",
          width: "800px",
         
          
        }}
      >
        <Typography
          variant="body1"
          component="h6"
          className="text-[#4D4D4D]"
          fontWeight="500"
          fontSize="16px"
          paddingTop={3}
        >
          Patient Information
        </Typography>
        <Grid container spacing={2} className="padding-top-16">
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TextInput
             
              name="FirstName"
              control={control}
              rules={{ required: "First Name is required" }}
              label="First Name"
              errors={errors}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <GenericDatePicker width="100%" height="auto" borderRadius="50px" />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <SelectInput
              name="gender"
              control={control}
              rules={{ required: "Gender is required" }}
              label="Gender"
              errors={errors}
              options={genderOptions}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TextInput
              name="Address"
              control={control}
              rules={{ required: "Address is required" }}
              label="Address"
              errors={errors}
            />
          </Grid>
        </Grid>

        <Typography
          variant="body1"
          component="h6"
          className="text-[#4D4D4D]"
          fontWeight="500"
          fontSize="16px"
          paddingTop={3}
        >
          Patient Information
        </Typography>
        <Grid container spacing={2} className="padding-top-16">
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TextInput
              name="Provider Name"
              control={control}
              rules={{ required: "Provider Name is required" }}
              label="Provider Name"
              errors={errors}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <TextInput
              type="number"
              name="Provider Phone Number"
              control={control}
              rules={{ required: "Provider Name is required" }}
              label="Provider Phone Number"
              errors={errors}
            />
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          component="h6"
          className="text-[#4D4D4D]"
          fontWeight="500"
          fontSize="16px"
          paddingTop={3}
        >
          Prescription Date
        </Typography>
        <Grid container spacing={2} className="padding-top-16">
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <GenericDatePicker width="100%" height="auto" borderRadius="50px" />
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          component="h6"
          className="text-[#4D4D4D]"
          fontWeight="500"
          fontSize="16px"
          paddingTop={3}
        >
          Medication Details
        </Typography>
        <Grid container spacing={2} className="padding-top-16">
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <SelectInput
              name="Medication"
              control={control}
              rules={{ required: "Gender is required" }}
              label="Medication"
              errors={errors}
              options={medicationOptions}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <SelectInput
              name="dosage"
              control={control}
              rules={{ required: "Gender is required" }}
              label="Dosage"
              errors={errors}
              options={dosageOptions}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <SelectInput
              name="Form"
              control={control}
              rules={{ required: "Gender is required" }}
              label="Form"
              errors={errors}
              options={formOptions}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <SelectInput
              name="route"
              control={control}
              rules={{ required: "Gender is required" }}
              label="Route"
              errors={errors}
              options={routeOptions}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <SelectInput
              name="frequency"
              control={control}
              rules={{ required: "Gender is required" }}
              label="Frequency"
              errors={errors}
              options={frequencyOptions}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <SelectInput
              name="duration"
              control={control}
              rules={{ required: "Gender is required" }}
              label="Duration"
              errors={errors}
              options={durationOptions}
            />
          </Grid>
        </Grid>
        <div className="flex gap-2 justify-end items-end">
          <div>
            <CustomButton
              fontSize="12px"
              text="Cancel"
              color="#666666"
              marginTop="40px"
              borderRadius="50px"
              width="125px"
              height="38px"
              backgroundColor="#E6E6E6"
              fontWeight="400"
            />
          </div>
          <div>
            <CustomButton
              fontSize="12px"
              text="Add Prescription"
              color="white"
              borderRadius="50px"
              width="125px"
              height="38px"
              backgroundColor="var(--primary-color)"
              fontWeight="400"
            />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default AddPrescriptionModal;
