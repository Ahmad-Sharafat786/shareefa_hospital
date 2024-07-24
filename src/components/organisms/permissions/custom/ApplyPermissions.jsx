import { Breadcrumbs, Checkbox, Grid, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomSearch from "../../../atoms/Search";
import SelectInput from "../../../atoms/Select";
import { useForm } from "react-hook-form";
import CustomButton from "../../../atoms/Button";

const ApplyPermissions = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
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
      Apply Permissions at Role
    </Typography>,
  ];
  const roleOptions = [
    { value: 10, label: "Admin" },
    { value: 20, label: "Doctor" },
    { value: 30, label: "Patient" },
    { value: 40, label: "Staff" },
  ];
  const items = [
    { label: "Video Chat" },
    { label: "Add SOAP" },
    { label: "Add Patient" },
    { label: "View Patient Profile" },
    { label: "View Appointment" },

    { label: "Slot Creation" },
    { label: "Patient Summary" },
    { label: "Enquiry Restriction" },
    { label: "My Task" },
    { label: "Patient List View" },

    { label: "Appointment Reminder" },
    { label: "Add SOAP" },
    { label: "Appointment Queue" },
    { label: "View Prescription" },
    { label: "Send to Pharmacist" },

    { label: "Add Prescription" },
    { label: "Add SOAP" },
    { label: "Add Patient" },
    { label: "View Patient Profile" },
    { label: "View Appointment" },

    { label: "Video Chat" },
    { label: "Add SOAP" },
    { label: "Add Patient" },
    { label: "View Patient Profile" },
    { label: "View Appointment" },

     { label: "Video Chat" },
    { label: "Add SOAP" },
    { label: "Add Patient" },
    { label: "View Patient Profile" },
    { label: "View Appointment" },
  ];
  const [checkedItems, setCheckedItems] = useState(
    items.reduce((acc, item) => {
      acc[item.label] = false;
      return acc;
    }, {})
  );
  const handleCheckboxChange = (label) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [label]: !prevCheckedItems[label],
    }));
  };
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <CustomSearch
          placeholder="Search"
          defaultValue="test"
          onChange=""
          borderRadius="50px"
          enableIcon={true}
          width="180px"
          bgColor="#FAFAFA"
        />
      </div>
      <Grid container spacing={2} className="padding-top-30 custom_apply_permission">
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <SelectInput
            borderRadius="50px"
            name="role"
            control={control}
            rules={{ required: "Provider is required" }}
            label="Provider"
            errors={errors}
            options={roleOptions}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        className="padding-top-30"
        justifyContent="space-between"
      >
        {items.map((item, index) => (
           <Grid item lg={2.4} sm={4} xs={6}  key={index}>
            <div className="flex gap-2 items-center">
              <Checkbox
                size="small"
                checked={checkedItems[item.id]}
                onChange={() => handleCheckboxChange(item.id)}
                sx={{
                  "&.Mui-checked": {
                    color: "#FF6060",
                  },
                }}
              />
              <Typography
                sx={{ color: checkedItems[item.label] ? "#FF6060" : "#4D4D4D" }}
              >
                {item.label}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>

      <div className="flex justify-end items-center gap-3 mt-[10rem]">
        <CustomButton
          fontSize="12px"
          text="Cancel"
          color="#F99639"
          borderRadius="50px"
          height="37px"
          width="120px"
          border="1px solid #F99639"
          fontWeight="400"
          marginTop="10px"
        />
        <CustomButton
          fontSize="12px"
          text="Save"
          color="white"
          borderRadius="50px"
          height="37px"
          width="110px"
          backgroundColor="#FF6060"
          fontWeight="400"
          marginTop="10px"
          
        />
        
      </div>
    </div>
  );
};

export default ApplyPermissions;
