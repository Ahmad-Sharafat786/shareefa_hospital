import * as React from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

import CustomButton from "../../atoms/Button";
import CustomModal from "../../atoms/Modal";

export default function PharmacistModal({ open, handleClose }) {
  const [pharmacist, setPharmacist] = React.useState("");

  return (
    <CustomModal
      open={open}
      onClose={handleClose}
      title="Pharmacist"
      description="Select pharmacist to send"
    >
      <Grid item xs={12} className="margin-top-12">
        <FormControl fullWidth>
          <InputLabel id="select">Select</InputLabel>
          <Select
            labelId="Select"
            id="Select"
            label="select"
            value={pharmacist}
            fullWidth
            onChange={(e) => setPharmacist(e.target.value)}
          >
            <MenuItem value={10}>Zack</MenuItem>
            <MenuItem value={20}>John</MenuItem>
            <MenuItem value={30}>Steve</MenuItem>
          </Select>
        </FormControl>
        <CustomButton
         
          fontSize="12px"
          text="Send"
          className="text-white margin-top-20"
          borderRadius="50px"
          width="100%"
          height="38px"
          backgroundColor="var(--primary-color)"
        />
      </Grid>
    </CustomModal>
  );
}
