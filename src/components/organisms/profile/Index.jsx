import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import InsuranceModal from "./InsuranceModal";
import CustomButton from "../../atoms/Button";
import { LoaderCenter } from "../../atoms/Loader";
import { useState } from "react";
import { useEffect } from "react";
export default function Profile() {
  const [famHistory, setFamHistory] = React.useState("");
  const [relation, setRelation] = React.useState("");
  const [bloodGroup, setBloodGroup] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [maritalStatus, setMaritalStatus] = React.useState("");
  const [nationality, setNationality] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [city, setCity] = React.useState("");
  const [allergy, setAllergy] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [insuranceModal, setInsuranceModal] = React.useState(false);
  const [toasterLoader, setToasterLoader] = useState(true);

  const handleInsuranceModal = () => {
    setInsuranceModal(!insuranceModal);
  };

  const Insurance = [
    {
      text: "Dummy Company Insurance Form",
      date: "5/20/2024",
    },
    {
      text: "Dummy Company Insurance Form",
      date: "5/20/2024",
    },
    {
      text: "Dummy Company Insurance Form",
      date: "5/20/2024",
    },
    {
      text: "Dummy Company Insurance Form",
      date: "5/20/2024",
    },
  ];
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const steps = [
    {
      label: "Personal Info",
      description: (
        <>
          <Grid container spacing={2} className="padding-top-16">
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <TextField label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <TextField label="Age" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <TextField label="Date of Birth" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="blood-group">Blood Group</InputLabel>
                <Select
                  labelId="blood-group"
                  id="blood-group"
                  label="Blood Group"
                  value={bloodGroup}
                  fullWidth
                  onChange={(e) => setBloodGroup(e.target.value)}
                >
                  <MenuItem value={10}>O+</MenuItem>
                  <MenuItem value={20}>0-</MenuItem>
                  <MenuItem value={30}>B+</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  label="Gender"
                  value={gender}
                  fullWidth
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="marital-status">Marital Status</InputLabel>
                <Select
                  labelId="marital-status"
                  id="demo-simple-select"
                  label="Marital Status"
                  value={maritalStatus}
                  fullWidth
                  onChange={(e) => setMaritalStatus(e.target.value)}
                >
                  <MenuItem value={10}>Married</MenuItem>
                  <MenuItem value={20}>Divorced</MenuItem>
                  <MenuItem value={30}>Bachelor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="nationality">Nationality</InputLabel>
                <Select
                  labelId="nationality"
                  id="nationality"
                  label="Nationality"
                  value={nationality}
                  fullWidth
                  onChange={(e) => setNationality(e.target.value)}
                >
                  <MenuItem value={10}>Pakistani</MenuItem>
                  <MenuItem value={20}>Indian</MenuItem>
                  <MenuItem value={30}>Canadian</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField label="National ID" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField label="Occupation" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField label="Passport No" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Typography variant="body2" className="h-100">
                <Button
                  className="w-100"
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  sx={{
                    backgroundColor: "#F2F2F2",
                    textTransform: "capitalize",
                    color: "#666666",
                    height: "100%",
                    borderRadius: "50px",
                  }}
                  startIcon={<CloudUploadIcon />}
                >
                  Click to Upload Image
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Typography>
            </Grid>
          </Grid>
          <div className="padding-top-16">
            <h5 className="generic-name-color fw-600 font-18">
              Contact Information
            </h5>
            <Grid container spacing={2} className="padding-top-16">
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <TextField label="Mobile" variant="outlined" fullWidth />
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <TextField label="Phone" variant="outlined" fullWidth />
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="country"
                    id="country"
                    label="Country"
                    value={country}
                    fullWidth
                    onChange={(e) => setCountry(e.target.value)}
                    sx={{
                      borderRadius: "50px",
                    }}
                  >
                    <MenuItem value={10}>Pak</MenuItem>
                    <MenuItem value={20}>Ind</MenuItem>
                    <MenuItem value={30}>US</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Province/State
                  </InputLabel>
                  <Select
                    labelId="province"
                    id="province"
                    label="Province/State"
                    value={province}
                    fullWidth
                    onChange={(e) => setProvince(e.target.value)}
                  >
                    <MenuItem value={10}>Lahore</MenuItem>
                    <MenuItem value={20}>Islamabad</MenuItem>
                    <MenuItem value={30}>Karachi</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="city"
                    id="city"
                    label="City"
                    value={city}
                    fullWidth
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <MenuItem value={10}>Lahore</MenuItem>
                    <MenuItem value={20}>Islamabad</MenuItem>
                    <MenuItem value={30}>Karachi</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item lg={4} md={6} sm={6} xs={12}>
                <TextField label="P.O.Box" variant="outlined" fullWidth />
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <TextField
                  label="Emergency Contact"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <TextField label="Address" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </div>
        </>
      ),
    },
    {
      label: "Medical History",
      description: (
        <>
          <Grid container spacing={2} className="padding-top-16">
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="allergy">Allergies</InputLabel>
                <Select
                  labelId="allergy"
                  id="allergy"
                  label="allergy"
                  value={allergy}
                  fullWidth
                  onChange={(e) => setAllergy(e.target.value)}
                >
                  <MenuItem value={10}>Yes</MenuItem>
                  <MenuItem value={20}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField label="Medications" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Surgeries" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Hospitalizations"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Immunizations" variant="outlined" fullWidth />
            </Grid>
          </Grid>
          <div className="padding-top-16">
            <h4>Family Medical History</h4>
            <Grid container spacing={2} className="padding-top-16">
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="fam-history">Family History</InputLabel>
                  <Select
                    labelId="fam-history"
                    id="fam-history"
                    label="fam-history"
                    value={famHistory}
                    fullWidth
                    onChange={(e) => setFamHistory(e.target.value)}
                  >
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="relation">Relation</InputLabel>
                  <Select
                    labelId="relation"
                    id="relation"
                    label="relation"
                    value={relation}
                    fullWidth
                    onChange={(e) => setRelation(e.target.value)}
                  >
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField label="Diseases" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </div>
          <div className="padding-top-16">
            <h4>Social History</h4>
            <Grid container spacing={2} className="padding-top-16">
              <Grid item xs={4}>
                <Checkbox />
              </Grid>
              <Grid item xs={4}>
                <Checkbox />
              </Grid>
              <Grid item xs={4}>
                <Checkbox />
              </Grid>
            </Grid>
          </div>
          <Grid container gap={2} className="padding-top-16">
            <Grid item>
              <Button
                className="dark-gray-400"
                sx={{
                  border: "1px solid var(--primary-color)",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  "&:hover": {
                    color: "var(--primary-color)",
                  },
                  padding: "8px 20px",
                }}
              >
                Quantity in Packs
              </Button>
            </Grid>
            <Grid item>
              <Button
                className="dark-gray-400"
                sx={{
                  border: "1px solid var(--primary-color)",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  fontSize: "12px",

                  "&:hover": {
                    color: "var(--primary-color)",
                  },
                  padding: "8px 20px",
                }}
              >
                Quantity in Packs
              </Button>
            </Grid>
            <Grid item>
              <Button
                className="dark-gray-400"
                sx={{
                  border: "1px solid var(--primary-color)",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  fontSize: "12px",

                  "&:hover": {
                    color: "var(--primary-color)",
                  },
                  padding: "8px 20px",
                }}
              >
                Quantity in Packs
              </Button>
            </Grid>
            <Grid item>
              <Button
                className="dark-gray-400"
                sx={{
                  border: "1px solid var(--primary-color)",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  fontSize: "12px",

                  "&:hover": {
                    color: "var(--primary-color)",
                  },
                  padding: "8px 20px",
                }}
              >
                Quantity in Packs
              </Button>
            </Grid>
            <Grid item>
              <Button
                className="dark-gray-400"
                sx={{
                  border: "1px solid var(--primary-color)",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  fontSize: "12px",

                  "&:hover": {
                    color: "var(--primary-color)",
                  },
                  padding: "8px 20px",
                }}
              >
                Quantity in Packs
              </Button>
            </Grid>
            <Grid item>
              <Button
                className="dark-gray-400"
                sx={{
                  border: "1px solid var(--primary-color)",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  fontSize: "12px",

                  "&:hover": {
                    color: "var(--primary-color)",
                  },
                  padding: "8px 20px",
                }}
              >
                Quantity
              </Button>
            </Grid>
            <Grid item>
              <Button
                className="dark-gray-400"
                sx={{
                  border: "1px solid var(--primary-color)",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  fontSize: "12px",

                  "&:hover": {
                    color: "var(--primary-color)",
                  },
                }}
              >
                Times in Year
              </Button>
            </Grid>
          </Grid>
        </>
      ),
    },
    {
      label: "Insurance Form",
      description: (
        <>
          <Grid container spacing={2} className="padding-top-16">
            <Grid item xs={12}>
              <div className="flex justify-end">
                <button
                  onClick={handleInsuranceModal}
                  type="submit"
                  className="font-12 text_white bg-secondary px-3 rounded-full py-2"
                >
                  Add Insurance
                </button>
              </div>
              {/* <div>
                <h5 className="font-18 fw-500">Insurance Form</h5>
              </div> */}

              <InsuranceModal
                isOpen={insuranceModal}
                onClose={handleInsuranceModal}
              />
            </Grid>
            <Grid item xs={4}>
              {Insurance?.map((insurance, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-[10px] padding-top-16 dark-gray-500"
                >
                  <h6>{insurance.text}</h6>
                  <h6>{insurance.date}</h6>
                </div>
              ))}
            </Grid>
          </Grid>
        </>
      ),
    },

    {
      label: "Health History",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      label: "Demographics",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setToasterLoader(false);
    }, 1500);
  }, [toasterLoader]);
  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  return (
    <>
      <div>
        <h5 className="text-[#2A2A2A] fw-500 font-18">Patient Registration</h5>
      </div>
      {toasterLoader ? (
        <LoaderCenter color="var(--primary-color)" />
      ) : (
        <Box sx={{ padding: 2 }}>
          <Grid spacing={2} className="flex gap-4 custom-remove-flex">
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      onClick={() => handleStepChange(index)}
                      style={{ cursor: "pointer" }}
                      optional={
                        index === 4 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="dark-gray-200 border-1"
            />
            <Grid item lg={8} md={6} sm={12} xs={12} className="w-100">
              <Paper square elevation={0} sx={{ p: 3 }}>
                {activeStep < steps.length && (
                  <>
                    <Typography
                      color="#2A2A2A"
                      fontWeight={500}
                      fontSize={18}
                      sx={
                        steps[activeStep].label === "Insurance Form"
                          ? { position: "absolute", top: "8rem" }
                          : {}
                      }
                    >
                      {steps[activeStep].label}
                    </Typography>
                    <Typography>{steps[activeStep].description}</Typography>
                  </>
                )}

                <Box sx={{ mt: 2 }}>
                  <div className="flex justify-end items-center gap-3 padding-top-16">
                    {activeStep > 0 && (
                      <CustomButton
                        color="white"
                        backgroundColor="var(--secondary-color)"
                        text="Back"
                        className="flex gap-2"
                        variant="contained"
                        textTransform="capitalize"
                        borderRadius="50px"
                        padding="7px 40px"
                        showLeftIcon={true}
                        onClick={() => handleStepChange(activeStep - 1)}
                      />
                    )}
                    {activeStep < steps.length - 0 && (
                      <CustomButton
                        color="white"
                        text="Next"
                        className="flex gap-2"
                        variant="contained"
                        textTransform="capitalize"
                        borderRadius="50px"
                        padding="7px 40px"
                        backgroundColor="var(--primary-color)"
                        showRightIcon={true}
                        onClick={() => handleStepChange(activeStep + 1)}
                      />
                    )}
                  </div>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
      <InsuranceModal insuranceModal={insuranceModal} />
    </>
  );
}
