import { Breadcrumbs, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../atoms/Button";

const RoleViewList = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick=""
      className="fw-600 font-20"
    >
      Roles
    </Link>,
    <Typography key="2" color="text.primary">
      Provider
    </Typography>,
  ];

  const sections = [
    {
      title: "Permissions:",
      items: [
        "Slot Creation",
        "Slot Creation",
        "Slot Creation",
        "Slot Creation",
        "Slot Creation",
        "Slot Creation",
      ],
    },
    {
      title: "Department:",
      items: ["Surgery", "Orthopedic", "Surgery", "Surgery"],
    },
    {
      title: "Controls:",
      items: ["Patient", "Dummy", "Dummy"],
    },
  ];

  return (
    <div className="mb-0 generic_boxShadow p-[30px] rounded-lg">
      <div className="flex justify-between items-center padding-top-10 gap-4 pb-4 flex-wrap custom-patient-picker">
        <div>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <Link to="/apply-permission">
          <CustomButton
            showEditIcon={true}
            fontSize="12px"
            text="Edit"
            color="#999999"
            borderRadius="5px"
            height="25px"
            width="65px"
            backgroundColor="#F2F2F2"
            fontWeight="400"
            marginTop="10px"
          />
        </Link>
      </div>

      {sections.map((section, index) => (
        <div key={index}>
          <Typography
            variant="body1"
            component="h6"
            className="generic-name-color padding-top-20"
            fontWeight="500"
          >
            {section.title}
          </Typography>
          <Grid container className="padding-top-20">
            {section.items.map((item, itemIndex) => (
              <Grid key={itemIndex} lg={2} md={4} sm={6} xs={12} spacing={2}>
                <Typography
                  variant="body1"
                  component="h6"
                  className="text-[#595959]"
                  fontWeight="400"
                  fontSize="14px"
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default RoleViewList;
