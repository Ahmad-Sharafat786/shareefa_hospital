import React, { useEffect, useState } from "react";
import CustomSearch from "../../atoms/Search";
import { IMAGES } from "../../../assets/images";
import { Grid } from "@mui/material";
import GenericDatePicker from "../../atoms/DatePicker";
import GenericAccordion from "../../atoms/Accordian";
import { LoaderCenter } from "../../atoms/Loader";
import AddPrescriptionModal from "./AddPrescriptionModal";
import CustomButton from "../../atoms/Button";

const Index = () => {
  const [toasterLoader, setToasterLoader] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToasterLoader(false);
    }, 1500);
  }, []);

  const accordionData = [
    {
      avatarSrc: IMAGES.GIRL,
      doctorName: "Dr. Jenifer",
      specialty: "Cardiology",
      status: "Fulfilled",
      pastPrescription: "Lorem ipsum dolor sit amet consectetur...",
      presentPrescription: "Stacey was unable to attend her session...",
      assessment: "Plan to meet again in person at 2 pm next Tuesday...",
      plan: "Plan to meet again in person at 2 pm next Tuesday, 25th May. Stacey will continue on her current medication and has given her family.",
      expandText: "Send To Pharmacist",
    },
    {
      avatarSrc: IMAGES.PREAVATAR1,
      doctorName: "Dr. Arnold Aldridge",
      specialty: "Cardiology",
      status: "Pending",
      pastPrescription: "Lorem ipsum dolor sit amet consectetur...",
      presentPrescription: "Stacey was unable to attend her session...",
      assessment: "Plan to meet again in person at 2 pm next Tuesday...",
      plan: "Plan to meet again in person at 2 pm next Tuesday, 25th May. Stacey will continue on her current medication and has given her family.",
      expandText: "Send To Pharmacist",
    },
    {
      avatarSrc: IMAGES.PREAVATAR2,
      doctorName: "Dr. Miranda Clements",
      specialty: "Cardiology",
      status: "Pending",
      pastPrescription: "Lorem ipsum dolor sit amet consectetur...",
      presentPrescription: "Stacey was unable to attend her session...",
      assessment: "Plan to meet again in person at 2 pm next Tuesday...",
      plan: "Plan to meet again in person at 2 pm next Tuesday, 25th May. Stacey will continue on her current medication and has given her family.",
      expandText: "Send To Pharmacist",
    },
    {
      avatarSrc: IMAGES.PREAVATAR3,
      doctorName: "Dr. Zhanatan Donaldson",
      specialty: "Cardiology",
      status: "Sent",
      pastPrescription: "Lorem ipsum dolor sit amet consectetur...",
      presentPrescription: "Stacey was unable to attend her session...",
      assessment: "Plan to meet again in person at 2 pm next Tuesday...",
      plan: "Plan to meet again in person at 2 pm next Tuesday, 25th May. Stacey will continue on her current medication and has given her family.",
      expandText: "Send To Pharmacist",
    },
    {
      avatarSrc: IMAGES.PREAVATAR4,
      doctorName: "Dr. Phoebe Escobar",
      specialty: "Cardiology",
      status: "Pending",
      pastPrescription: "Lorem ipsum dolor sit amet consectetur...",
      presentPrescription: "Stacey was unable to attend her session...",
      assessment: "Plan to meet again in person at 2 pm next Tuesday...",
      plan: "Plan to meet again in person at 2 pm next Tuesday, 25th May. Stacey will continue on her current medication and has given her family.",
      expandText: "Send To Pharmacist",
    },
  ];

  function handlePrescriptionModal() {
    setOpen(true);
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="generic_boxShadow rounded-xl p-[30px]">
        <div className="flex justify-between items-center prescription-dblock new_large_spacing">
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <h4 className="fw-600 font-20">Prescription</h4>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <div className="flex justify-end items-center flex-wrap gap-[10px] prescription-dblock responsive_preshead">
              <GenericDatePicker
                width="125px"
                height="40px"
                fontSize="16px"
                borderRadius="50px"
                position="relative"
                left="4rem"
              />
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
                text="Add Prescription"
                className="text_white rounded-full mb-2  custom-patient-button"
                width="125px"
                height="40px"
                backgroundColor="var(--secondary-color)"
                onClick={() => handlePrescriptionModal()}
              />
            </div>
          </Grid>
        </div>

        {toasterLoader ? (
          <LoaderCenter color="var(--primary-color)" />
        ) : (
          <div className="margin-top-16">
            {accordionData.map((data, index) => (
              <GenericAccordion
                flexWrap="wrap"
                key={index}
                avatarSrc={data.avatarSrc}
                doctorName={data.doctorName}
                specialty={data.specialty}
                status={data.status}
                expandText={data.expandText}
                iconColor="#000000"
                iconSize="30px"
                defaultExpanded={false}
                marginBottom="20px"
              >
                <div className="px-[12px]">
                  <h5 className="text-primary font-semibold margin-top-20">
                    Past Prescription
                  </h5>
                  <div className="dark-gray-600 font-normal padding-top-10">
                    {data.pastPrescription}
                  </div>
                </div>

                <div className="px-[12px]">
                  <h5 className="text-primary font-semibold margin-top-20">
                    Present Prescription
                  </h5>
                  <div className="dark-gray-600 font-normal padding-top-10">
                    {data.presentPrescription}
                  </div>
                </div>

                <div className="px-[12px]">
                  <h5 className="text-primary font-semibold margin-top-20">
                    Assessment
                  </h5>
                  <div className="dark-gray-600 font-normal padding-top-10">
                    {data.assessment}
                  </div>
                </div>
                <div className="px-[12px]">
                  <h5 className="text-primary font-semibold margin-top-20">
                    Plan
                  </h5>
                  <div className="dark-gray-600 font-normal padding-top-10">
                    {data.plan}
                  </div>
                </div>
              </GenericAccordion>
            ))}
          </div>
        )}
      </div>
      <AddPrescriptionModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default Index;
