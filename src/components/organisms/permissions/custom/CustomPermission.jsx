import { Breadcrumbs, Grid, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../../atoms/SimpleTextInput";
import { useForm } from "react-hook-form";
import MultiSelect from "../../../atoms/MulitSelect";
import SelectInput from "../../../atoms/Select";
import CustomButton from "../../../atoms/Button";

const CustomPermission = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  const [showEditButton, setShowEditButton] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);

  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to=""
      className="font-bold text-[18px]"
    >
      Admin
    </Link>,
    <Typography key="3" color="text.primary" variant="h6">
      Create Custom Permission
    </Typography>,
  ];

  const options = [
    { title: "Permission Dummy 01" },
    { title: "P 02" },
    { title: "Permission Dummy 03" },
    { title: "Permission 04" },
    { title: "Permission Dummy 05" },
    { title: "Permission Dummy 06" },
  ];

  const roleOptions = [
    { value: 10, label: "Admin" },
    { value: 20, label: "Doctor" },
    { value: 30, label: "Patient" },
    { value: 40, label: "Staff" },
  ];

  const handleCreateClick = () => {
    setShowEditButton(true);
    setIsReadOnly(true);
  };
  const handleEditClick = () => {
    setIsReadOnly(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        {showEditButton && (
           <CustomButton
           showEditIcon={true}
           fontSize="12px"
           text="Edit"
           color="#999999"
           borderRadius="50px"
           height="35px"
           width="120px"
           backgroundColor="#F2F2F2"
           fontWeight="400"
           marginTop="10px"
           onClick={handleEditClick}
         />
        )}
      </div>
      <Grid container spacing={2} className="padding-top-30">
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <TextInput
            name="Name a new permission set"
            label="Name a new permission set"
            control={control}
            rules={{ required: "Permission is required" }}
            errors={errors}
            type="text"
            readOnly={isReadOnly}
            
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <MultiSelect
            options={options}
            label="Select Permission"
            placeholder="Choose Permissions"
            borderRadius="50px"
            readOnly={isReadOnly}
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <SelectInput
            name="role"
            control={control}
            rules={{ required: "Role is required" }}
            label="Assign to role"
            borderRadius="50px"
            size="sm"
            errors={errors}
            options={roleOptions}
            readOnly={isReadOnly}
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <TextInput
            name="Provider Name"
            label="Provider Name"
            control={control}
            rules={{ required: "Provider is required" }}
            errors={errors}
            type="text"
            readOnly={isReadOnly}
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <TextInput
            name="Provider Contact"
            label="Provider Contact"
            control={control}
            rules={{ required: "Provider Contact is required" }}
            errors={errors}
            type="text"
            readOnly={isReadOnly}
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <TextInput
            name="Provider Address"
            label="Provider Address"
            control={control}
            rules={{ required: "Provider Address is required" }}
            errors={errors}
            type="text"
            readOnly={isReadOnly}
          />
        </Grid>
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
          onClick={handleCreateClick}
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

export default CustomPermission;
