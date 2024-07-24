import * as React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import CustomModal from "../../atoms/Modal";

export default function InsuranceModal({ insuranceModal }) {
  const [open, setOpen] = React.useState(insuranceModal);
  const [insuranceType, setInsuranceType] = React.useState("");

  React.useEffect(() => {
    setOpen(insuranceModal);
  }, [insuranceModal]);

  const handleClose = () => setOpen(false);

  return (
    <CustomModal
      open={open}
      onClose={handleClose}
      title="Insurance Form"
      description="Select the form and fill"
      titleClassName="modalTitle"
      titleDescription="modalDescription"
      modalStyle={{
        width: "550px",
        padding: '0px',
        "@media (max-width: 426px)": {
          width: "300px", // Set width to auto for small screens
          padding: "20px", // Set height to auto for small screens
        },
        "@media (max-width: 375px)": {
          width: "250px", // Set width to auto for small screens
          padding: "20px", // Set height to auto for small screens
        },
      }}
    >
      <Grid container className="px-[30px]">
        <Grid item xs={12}>
          <FormControl fullWidth className="mt-4">
            <InputLabel id="insuranceType">Select Insurance Form</InputLabel>
            <Select
              labelId="insuranceType"
              id="insuranceType"
              label="Select Insurance Form"
              value={insuranceType}
              fullWidth
              onChange={(e) => setInsuranceType(e.target.value)}
            >
              <MenuItem value={10}>Temporary</MenuItem>
              <MenuItem value={20}>Lifetime</MenuItem>
              <MenuItem value={30}>One year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Divider
        sx={{
          marginTop: '30px',
          height: '1.5px',  
          bgcolor: "#E6E6E6", 
        }}
      />
      <Grid container spacing={2} className="padding-top-16 px-[30px]">
        <Grid item lg={6} md={6} xs={12}>
          <TextField label="Company Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField label="Card Holder Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField label="Card Number" variant="outlined" fullWidth />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField label="Card Expiry" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="rounded-full bg-primary text_white py-[8px] w-100 margin-top-14 mb-5"
              variant="outlined"
              fullWidth
            >
              Add Form
            </button>
          </div>
        </Grid>
      </Grid>
    </CustomModal>
  );
}
