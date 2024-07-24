import { Breadcrumbs, Checkbox, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import GenericDatePicker from "../../../atoms/DatePicker";
import CustomSearch from "../../../atoms/Search";
import CustomButton from "../../../atoms/Button";
import { Link } from "react-router-dom";

const BulkRole = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick=""
      className="fw-600 font-20"
    >
      Admin
    </Link>,

    <Typography key="3" color="text.primary">
      Bulk Role Assign
    </Typography>,
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
    <div className="mb-0 generic_boxShadow p-[30px] rounded-lg">
      <div className="flex justify-between items-center padding-top-10 gap-4 pb-4 flex-wrap custom-patient-picker">
        <div>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <div className="flex gap-2 picker-button relative">
          <div>
            <GenericDatePicker
              width="125px"
              borderRadius="50px"
              height="40px"
              position="relative"
              left="4rem"
            />
          </div>

          <CustomSearch
            bgColor="#fafafa"
            placeholder="Search"
            placeholderColor="#D1D1D1"
            width="200px"
            height="40px"
            borderRadius="50px"
            enableIcon={true}
            margin=" 0px 0px 5px 0px"
            // border="1px solid #D7D7D7"
          />
          <CustomButton
            borderRadius="50px"
            fontSize="12px"
            text="Create Role"
            className="text_white rounded-full custom-patient-button"
            width="125px"
            height="40px"
            backgroundColor="var(--secondary-color)"
          />
        </div>
      </div>
      <Typography
        variant="body1"
        component="h6"
        className="generic-name-color"
        fontWeight="500"
      >
        Provider:
      </Typography>
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
                // size="small"
                checked={checkedItems[item.id]}
                onChange={() => handleCheckboxChange(item.id)}
                sx={{
                  "&.Mui-checked": {
                    color: "#FF6060",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
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

      <Typography
        variant="body1"
        component="h6"
        className="generic-name-color padding-top-30"
        fontWeight="500"
      >
        Patient:
      </Typography>
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
                // size="small"
                checked={checkedItems[item.id]}
                onChange={() => handleCheckboxChange(item.id)}
                sx={{
                  "&.Mui-checked": {
                    color: "#FF6060",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 14, // Change this value to adjust the size
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

      <Typography
        variant="body1"
        component="h6"
        className="generic-name-color padding-top-30"
        fontWeight="500"
      >
        Admin:
      </Typography>
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
                // size="small"
                checked={checkedItems[item.id]}
                onChange={() => handleCheckboxChange(item.id)}
                sx={{
                  "&.Mui-checked": {
                    color: "#FF6060",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
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
    </div>
  );
};

export default BulkRole;
