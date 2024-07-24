import { Breadcrumbs, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GenericDatePicker from "../../atoms/DatePicker";
import GenericTimePicker from "../../atoms/TimePicker";
import { useForm } from "react-hook-form";
import SelectInput from "../../atoms/Select";
import CustomButton from "../../atoms/Button";

const NewSlot = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick=""
      className="fw-600 font-20"
    >
      Slots
    </Link>,

    <Typography key="3" color="#2A2A2A" fontSize={20} fontWeight={300}>
      Create New Schedule
    </Typography>,
  ];

  const slotOptions = [
    { value: 10, label: "6:00PM" },
    { value: 20, label: "7:00PM" },
    { value: 30, label: "8:00PM" },
    { value: 40, label: "9:00PM" },
  ];
  return (
    <div>
      <div className="generic_boxShadow rounded-lg p-[30px]">
        <div>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </div>

        <Grid container spacing={2} className="mt-2">
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <GenericDatePicker
              borderRadius="50px"
              width="100%"
              height="45px"
              text="Start Date"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} className="create_schedule_padding">
            <GenericDatePicker
              borderRadius="50px"
              width="100%"
              height="45px"
              text="End Date"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} className="create_schedule_padding">
            <GenericTimePicker
              borderRadius="50px"
              width="100%"
              height="45px"
              text="Start Time"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <GenericTimePicker
              borderRadius="50px"
              width="100%"
              height="45px"
              text="Start Time"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <SelectInput
              name="slot time"
              control={control}
              rules={{ required: "Role is required" }}
              label="Slot Time"
              borderRadius="50px"
              errors={errors}
              options={slotOptions}
            />
          </Grid>
        </Grid>
        <div>
          <Typography
            variant="body1"
            component="h6"
            className="dark-gray-400"
            fontWeight="500"
            fontSize="14px"
            paddingTop="20px"
          >
            Working Days
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Checkbox />
            </Grid>
            <Grid item>
              <Checkbox />
            </Grid>
            <Grid item>
              <Checkbox />
            </Grid>
            <Grid item>
              <Checkbox />
            </Grid>
            <Grid item>
              <Checkbox />
            </Grid>
            <Grid item>
              <Checkbox />
            </Grid>
            <Grid item>
              <Checkbox />
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            component="h6"
            className="dark-gray-400"
            fontWeight="500"
            fontSize="14px"
            paddingTop="20px"
          >
            Appointment Type
          </Typography>
          <div className="flex gap-[10px]">
            <CustomButton
              className="custom-button margin-top-16"
              fontSize="12px"
              text="Consultation"
              padding="10px 30px"
              borderRadius="50px"
              height="38px"
              color="#999999"
              border="1px solid #E1E5EA"
              fontWeight="400"
            />
            <CustomButton
              className="custom-button margin-top-16"
              fontSize="12px"
              text="Follow Up"
              padding="10px 37px"
              borderRadius="50px"
              height="38px"
              color="#999999"
              border="1px solid #E1E5EA"
              fontWeight="400"
            />
          </div>
          <textarea
            className="px-3 pt-2 font-14 rounded-[20px] dark-gray-200  border-2 border-[#E1E5EA] margin-top-16"
            id="doctor-observation"
            name="doctor-observation"
            rows="4"
            cols="50"
          >
            Notes
          </textarea>
          <div className="flex justify-end items-end flex-wrap gap-[10px] margin-top-20">
            <CustomButton
              fontSize="12px"
              text="Cancel"
              padding="10px 40px"
              borderRadius="50px"
              height="38px"
              color="#F99639"
              border="1px solid #F99639"
              fontWeight="400"
            />
            <CustomButton
              fontSize="12px"
              text="Create New"
              padding="10px 25px"
              borderRadius="50px"
              height="38px"
              color="white"
              border="1px solid #F99639"
              backgroundColor="#F99639"
              fontWeight="400"
            />
            <CustomButton
              fontSize="12px"
              text="Create & New"
              padding="10px 25px"
              borderRadius="50px"
              height="38px"
              color="white"
              border="1px solid #F99639"
              backgroundColor="#FF6060"
              fontWeight="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlot;
