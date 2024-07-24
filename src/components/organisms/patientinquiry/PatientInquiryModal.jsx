import React from "react";
import CustomModal from "../../atoms/Modal";
import { Box, Checkbox, Divider, Grid, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import GenericAvatar from "../../atoms/Avatar";
import { IMAGES } from "../../../assets/images";
import CustomButton from "../../atoms/Button";

const PatientInquiryModal = ({ open, handleClose }) => {
  const handleClosed = () => {
    handleClose(true);
  };
  return (
    <div>
      <CustomModal
        open={open}
        onClose={handleClose}
        modalStyle={{
          width: 500,
          zIndex: 1300,
          padding: "0px",
        }}
      >
        <div className="flex justify-between px-[30px] padding-top-24">
          <Typography
            component="h6"
            className="#000000"
            fontWeight="600"
            fontSize={20}
          >
            Patient Enquiry Restriction
          </Typography>
          <div>
            <IoMdClose
              size={25}
              onClick={handleClosed}
              className="cursor-pointer"
            />
          </div>
        </div>

        <Divider className="border-1 border-[#C8C8C8] pt-[10px] mb-3 w-100 text-[#C8C8C8]" />
        <div className="flex gap-[5px] px-[30px]">
          <GenericAvatar
            src={IMAGES.GIRL}
            width="60px"
            height="60px"
            borderRadius="10px"
          />
          <Box mx={2}>
            <Typography
              variant="body1"
              component="h6"
              fontSize={22}
              className="generic-name-color"
              fontWeight="600"
            >
              Lara Acosta
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="#333333"
              fontSize={16}
              fontWeight={500}
            >
              Med A
            </Typography>
          </Box>
        </div>
        <Grid container spacing={1} className="padding-top-16 px-[30px]">
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <Checkbox size="sm" className="ps-0" />
              <Typography>Visits</Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <Checkbox size="sm" className="ps-0" />
              <Typography>Radiology</Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <Checkbox size="sm" className="ps-0" />
              <Typography>Appointments</Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <Checkbox size="sm" className="ps-0" />
              <Typography>Medical Reports</Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <Checkbox size="sm" className="ps-0" />
              <Typography>Invoices</Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <Checkbox size="sm" className="ps-0" />
              <Typography>Insurance Approval</Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <Checkbox size="sm" className="ps-0" />
              <Typography>Laboratory</Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <Checkbox size="sm" className="ps-0" />
              <Typography>Documents</Typography>
            </div>
          </Grid>
        </Grid>
        <Divider className="border-1 border-[#C8C8C8] mt-5 text-[#C8C8C8]" />
        <div className="flex justify-end mx-5">
          <CustomButton
            fontSize="12px"
            text="Apply"
            className="text-white margin-top-20"
            borderRadius="50px"
            width="120px"
            height="37px"
            backgroundColor="var(--primary-color)"
            marginBottom="20px"
          />
        </div>
      </CustomModal>
    </div>
  );
};

export default PatientInquiryModal;
