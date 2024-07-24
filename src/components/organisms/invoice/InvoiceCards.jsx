import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Typography } from "@mui/material";
import GenericCard from "../../atoms/Card";
import GenericAvatar from "../../atoms/Avatar";
import { IMAGES } from "../../../assets/images";
import CustomButton from "../../atoms/Button";

const InvoiceCards = ({ invoice, onClose }) => {
  console.log("invoice", invoice);
  let color;
  switch (invoice.status) {
    case "Paid":
      color = "#5DD669";
      break;
    case "Unpaid":
      color = "#FFA500";
      break;
    default:
      color = "#000000";
  }

  const content = (
    <div className="px-3">
      <Typography
        variant="body2"
        color="text.secondary"
        className="padding-top-30"
      >
        <Box display="flex" alignItems="center" className="margin-top-16">
          <GenericAvatar borderRadius="50px" src={IMAGES.GIRL} size={70} />
          <Box mx={2}>
            <Typography
              variant="body1"
              component="h6"
              className="generic-name-color"
              fontWeight="500"
            >
              {invoice.patient.name}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="generic-name-profession-color"
            >
              test@gmail.com
            </Typography>
          </Box>
        </Box>
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        className="padding-top-30"
      >
        <div>Invoice Date</div>
        <div className="invoice-amount-color font-18 fw-400">
          Thursday, May 23, 2024
        </div>
      </Typography>
      <div className="flex justify-between padding-top-16">
        <Typography variant="body2" color="text.secondary">
          <div>Status</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <FiberManualRecordIcon
              sx={{ color: color, marginRight: "5px", fontSize: "12px" }}
            />
            <p>{invoice.status}</p>
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>Payment Method</div>
          <h6 className="padding-top-10">Cash</h6>
        </Typography>
      </div>
      <div className="invoice-amount-bgcolor py-4 flex justify-between items-center mt-[30px]">
        <Typography variant="body2" color="text.secondary">
          <div>Total Invoices</div>
          <div className="padding-top-20">Due Amount</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h4 className="invoice-amount-color fw-400">$199.00</h4>
          <h4 className="invoice-amount-color padding-top-20 fw-500">$50.00</h4>
        </Typography>
      </div>
    </div>
  );

  const footer = (
    <div className="pt-32 flex justify-center">
      <CustomButton
      fontSize="18px"
      text="Pay"
      color="white"
      padding="10px 30px"
      borderRadius="50px"
      width="55%"
      height="38px"
      backgroundColor="var(--primary-color)"
      fontWeight="400"
      
      />
    </div>
  );

  return (
    <GenericCard
      padding="0px"
      sx={{ boxShadow: "none" }}
      title="Invoice Preview"
      content={content}
      footer={footer}
      onClose={onClose}
    />
  );
};

export default InvoiceCards;
