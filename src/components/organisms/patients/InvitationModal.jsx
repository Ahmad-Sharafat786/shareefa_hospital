import * as React from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

import CustomButton from "../../atoms/Button";
import CustomModal from "../../atoms/Modal";

export default function InvitationModal({ open, handleClose }) {
  const [email, setEmail] = React.useState("");

  return (
    <CustomModal
      open={open}
      onClose={handleClose}
      title="Invitation"
      description="Send Email to Invite Patient"
    >
      <Grid item xs={12} className="margin-top-12">
        <FormControl fullWidth>
          <InputLabel id="email">Email</InputLabel>
          <Select
            labelId="email"
            id="email"
            label="Email"
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </FormControl>
        <CustomButton
         
          fontSize="12px"
          text="Send Sign up Email"
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
