import { Breadcrumbs, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TextInput from "../../../atoms/SimpleTextInput";
import SelectInput from "../../../atoms/Select";
import CustomButton from "../../../atoms/Button";

const CreateRole = () => {
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
      Role
    </Link>,
    <Typography key="2" color="text.primary">
      Create Role
    </Typography>,
  ];
  const permissionOptions = [
    { value: 10, label: "Admin" },
    { value: 20, label: "Doctor" },
    { value: 30, label: "Patient" },
    { value: 40, label: "Staff" },
  ];
  const departmentOptions = [
    { value: 10, label: "Cardiology" },
    { value: 20, label: "Psychology" },
    { value: 30, label: "Radilology" },
    { value: 40, label: "Emergency" },
  ];
  return (
    <div className="mb-0 generic_boxShadow p-[30px] rounded-lg">
      <div>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <Grid container spacing={2} className="padding-top-30">
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <TextInput
            name="Role Name"
            label="Role Name"
            control={control}
            rules={{ required: "Permission is required" }}
            errors={errors}
            type="text"
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <SelectInput
            name="role"
            control={control}
            rules={{ required: "Role is required" }}
            label="Permissions"
            borderRadius="50px"
            size="sm"
            errors={errors}
            options={permissionOptions}
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <SelectInput
            name="role"
            control={control}
            rules={{ required: "Role is required" }}
            label="Departments"
            borderRadius="50px"
            size="sm"
            errors={errors}
            options={departmentOptions}
          />
        </Grid>
        <div className="w-100 ms-3">
          <textarea
            className="px-3 pt-2 font-14 rounded-[20px] dark-gray-200  border-2 border-[#E1E5EA] margin-top-16"
            id="doctor-observation"
            name="doctor-observation"
            rows="4"
            cols="50"
          >
            Description
          </textarea>
        </div>
      </Grid>
      <div className="flex justify-end items-center gap-3 mt-[20rem] responsive_role">
        <CustomButton
          fontSize="12px"
          text="Cancel"
          color="#F99639"
          borderRadius="50px"
          height="35px"
          width="120px"
          border="1px solid #F99639"
          fontWeight="400"
          marginTop="10px"
        />
        <CustomButton
          fontSize="12px"
          text="Create"
          color="white"
          borderRadius="50px"
          height="35px"
          width="120px"
          backgroundColor="#F99639"
          fontWeight="400"
          marginTop="10px"
          
        />
        <CustomButton
          fontSize="12px"
          text="Create & New"
          color="white"
          borderRadius="50px"
          height="35px"
          width="155px"
          backgroundColor="#FF6060"
          fontWeight="400"
          marginTop="10px"
        />
      </div>
    </div>
  );
};

export default CreateRole;
