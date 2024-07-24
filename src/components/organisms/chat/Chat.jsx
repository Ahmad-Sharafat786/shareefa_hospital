import React, { useState } from "react";
import { IMAGES } from "../../../assets/images";
import {
  Accordion,
  AccordionDetails,
  Avatar,
  Box,
  Grid,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import CustomTabs from "../../atoms/Tabs";
import AccordionSummary from "@mui/material/AccordionSummary";
import { IoIosSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import GenericAccordion from "../../atoms/Accordian";
import { Add, Remove } from "@mui/icons-material";
import { MdDeleteOutline, MdFullscreen } from "react-icons/md";
import CustomButton from "../../atoms/Button";
import CustomizedSelectHook from "../../atoms/CustomizedSelectHook";
import { FaAngleDown } from "react-icons/fa";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BadgeAvatars from "../../atoms/Badge";
import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import { RiRecordCircleLine } from "react-icons/ri";

const Chat = ({
  avatarVisible,
  avatarSrc,
  doctorName,
  specialty,
  status,
  pastPrescription,
  test,
  presentPrescription,
  assessment,
  plan,
  marginBottom,
  defaultExpanded,
  height,
  iconColor,
  iconSize,
  expandText,
}) => {
  const [value, setValue] = useState(0);
  const [messages, setMessages] = useState([
    {
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, vero.",
      isOutgoing: false,
      avatar: IMAGES.AUDIO_PATIENT,
    },
    {
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, vero.",
      isOutgoing: true,
      avatar: IMAGES.AUDIO_DOCTOR,
    },
    {
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, vero.",
      isOutgoing: false,
      avatar: IMAGES.AUDIO_PATIENT,
    },
    {
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, vero.",
      isOutgoing: true,
      avatar: IMAGES.AUDIO_DOCTOR,
    },
  ]);
  const [open, setOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState("a");
  const [subjectiveExpanded, setSubjectiveExpanded] = useState(false);
  const [objectiveExpanded, setObjectiveExpanded] = useState(false);
  const [plans, setPlansExpanded] = useState(false);
  const [assessments, setAssessmentExpanded] = useState(false);
  const [allergyExpanded, setAllergyExpanded] = useState(false);
  const [medicationExpanded, setMedicationExpanded] = useState(false);
  const [notes, setNotes] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { text: newMessage, isOutgoing: true, avatar: IMAGES.VCall1 },
      ]);
      setNewMessage("");
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePharmacyModal = () => {
    setOpen(true);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const accordionData = [
    {
      title: "Subjective",
      avatarVisible: false,
      children: (
        <>
          <Accordion
            className="no_boxShadow"
            expanded={subjectiveExpanded}
            style={{
              // height,
              // marginBottom,
              borderRadius: subjectiveExpanded ? "10" : "10px",
            }}
            onChange={() => setSubjectiveExpanded(!subjectiveExpanded)}
          >
            <AccordionSummary
              className="bright-gray-50-bg"
              style={{ borderRadius: "10px" }}
              aria-controls="subjective-content"
              id="subjective-header"
            >
              <Box
                gridColumn="span 12"
                display="flex"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  {avatarVisible && (
                    <Avatar
                      alt={doctorName}
                      src={avatarSrc || ""}
                      variant="rounded-full"
                      sx={{ width: 50, height: 50 }}
                    />
                  )}
                  <Box mx={2}>
                    <Typography
                      variant="body1"
                      component="h6"
                      className="dark-gray-500"
                      fontWeight="500"
                      fontSize="18px"
                    >
                      {doctorName}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <span className="dark-gray-400 font-14">{specialty}</span>
                      {avatarVisible ? (
                        <span className="dark-gray-200">| Past</span>
                      ) : (
                        <span className="text-[#FF6666] fw-500">
                          Subjective
                        </span>
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    component="span"
                    className="hover:text-[#3760F2]"
                    style={{ marginRight: "20px" }}
                    onClick={handlePharmacyModal}
                  >
                    {expandText}
                  </Typography>
                  <Box
                    onClick={() => setSubjectiveExpanded(!subjectiveExpanded)}
                  >
                    {subjectiveExpanded ? (
                      <FaAngleDown sx={{ color: iconColor }} size={20} />
                    ) : (
                      <KeyboardArrowUpIcon
                        sx={{ color: iconColor, fontSize: iconSize }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-spacing">
              <div className="px-[12px] ">
                <div className="text_area_radius">
                  <TextField
                    id="Type your message"
                    label="Enter issue for consultation"
                    multiline
                    minRows={1}
                    fullWidth
                    
                  />
                  <div className="dark-gray-600 font-normal padding-top-10">
                    <Typography
                      color="#0A0C0F"
                      fontSize={12}
                      fontWeight={500}
                      variant="h6"
                      component="div"
                    >
                      History of Present Illness (HPI):
                    </Typography>
                    <div className="rounded-full border border-[#E1E5EA] margin-top-20">
                      <Typography
                        padding="12px"
                        variant="body1"
                        component="h6"
                        fontWeight="500"
                        color="#999999"
                        fontSize={12}
                      >
                        When the symptoms began.
                      </Typography>
                    </div>
                    <div className="rounded-full border border-[#E1E5EA] margin-top-20">
                      <Typography
                        padding="12px"
                        variant="body1"
                        component="h6"
                        fontWeight="500"
                        color="#999999"
                        fontSize={12}
                      >
                        When the symptoms began.
                      </Typography>
                    </div>
                    <div className="rounded-full border border-[#E1E5EA] margin-top-20">
                      <Typography
                        padding="12px"
                        variant="body1"
                        component="h6"
                        fontWeight="500"
                        color="#999999"
                        fontSize={12}
                      >
                        When the symptoms began.
                      </Typography>
                    </div>
                    <div className="rounded-xl border border-[#E1E5EA] margin-top-20">
                      <Typography
                        padding="12px"
                        variant="body1"
                        component="h6"
                        fontWeight="500"
                        color="#999999"
                        fontSize={12}
                      >
                        The nature or quality of the symptoms?
                      </Typography>
                      <div className="flex flex-col justify-start items-start">
                        <div className="flex items-center">
                          <Radio
                            checked={selectedValue === "a"}
                            onChange={handleRadioChange}
                            value="a"
                            sx={{
                              color:
                                selectedValue === "a"
                                  ? "#FF6666"
                                  : "transparent",
                              "&.Mui-checked": {
                                color: "#FF6666",
                              },
                            }}
                            name="radio-buttons"
                            slotProps={{ input: { "aria-label": "A" } }}
                          />{" "}
                          <span>Sharp</span>
                        </div>
                        <div className="flex items-center">
                          <Radio
                            checked={selectedValue === "b"}
                            onChange={handleRadioChange}
                            value="b"
                            sx={{
                              color:
                                selectedValue === "b"
                                  ? "#FF6666"
                                  : "transparent",
                              "&.Mui-checked": {
                                color: "#FF6666",
                              },
                            }}
                            name="radio-buttons"
                            slotProps={{ input: { "aria-label": "B" } }}
                          />{" "}
                          <span>Dull</span>
                        </div>
                        <div className="flex items-center">
                          <Radio
                            checked={selectedValue === "c"}
                            onChange={handleRadioChange}
                            value="c"
                            sx={{
                              color:
                                selectedValue === "a"
                                  ? "#FF6666"
                                  : "transparent",
                              "&.Mui-checked": {
                                color: "#FF6666",
                              },
                            }}
                            name="radio-buttons"
                            slotProps={{ input: { "aria-label": "C" } }}
                          />{" "}
                          <span>Throbbing</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full border border-[#E1E5EA] margin-top-20">
                      <Typography
                        padding="12px"
                        variant="body1"
                        component="h6"
                        fontWeight="500"
                        color="#999999"
                        fontSize={12}
                      >
                        What makes the symptoms better or worse?
                      </Typography>
                    </div>
                    <div className="rounded-xl border border-[#E1E5EA] margin-top-20">
                      <Typography
                        padding="12px"
                        variant="body1"
                        component="h6"
                        fontWeight="500"
                        color="#999999"
                        fontSize={12}
                      >
                        When the symptoms occur?
                      </Typography>
                      <div className="flex flex-col justify-start items-start">
                        <div className="flex items-center">
                          <Radio
                            checked={selectedValue === "d"}
                            onChange={handleRadioChange}
                            value="d"
                            sx={{
                              color:
                                selectedValue === "d"
                                  ? "#FF6666"
                                  : "transparent",
                              "&.Mui-checked": {
                                color: "#FF6666",
                              },
                            }}
                            name="radio-buttons"
                            slotProps={{ input: { "aria-label": "D" } }}
                          />{" "}
                          <span>Continuous</span>
                        </div>
                        <div className="flex items-center">
                          <Radio
                            checked={selectedValue === "e"}
                            onChange={handleRadioChange}
                            value="e"
                            sx={{
                              color:
                                selectedValue === "e"
                                  ? "#FF6666"
                                  : "transparent",
                              "&.Mui-checked": {
                                color: "#FF6666",
                              },
                            }}
                            name="radio-buttons"
                            slotProps={{ input: { "aria-label": "E" } }}
                          />{" "}
                          <span>Intermittent</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full border border-[#E1E5EA] margin-top-20">
                      <Typography
                        padding="12px"
                        variant="body1"
                        component="h6"
                        fontWeight="500"
                        color="#999999"
                        fontSize={12}
                      >
                        Intensity of symptoms.
                      </Typography>
                    </div>
                    <div className=" margin-top-20">
                      <Typography
                        color="#0A0C0F"
                        fontSize={12}
                        fontWeight={500}
                        variant="h6"
                        component="div"
                      >
                        Past Medical History (PMH)
                      </Typography>
                      <div className="px-[12px] ">
                        <div className="text_area_radius">
                          <TextField
                            className="mt-3"
                            id="Type your message"
                            label="Previous medical conditions & surgeries."
                            multiline
                            minRows={1}
                            fullWidth
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" margin-top-20">
                      <Typography
                        color="#0A0C0F"
                        fontSize={12}
                        fontWeight={500}
                        variant="h6"
                        component="div"
                      >
                        Family History (FH)
                      </Typography>
                      <div className="px-[12px] ">
                        <div className="text_area_radius">
                          <TextField
                            className="mt-3"
                            id="Type your message"
                            label="Previous medical conditions & surgeries."
                            multiline
                            minRows={1}
                            fullWidth
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" margin-top-20">
                      <Typography
                        color="#0A0C0F"
                        fontSize={12}
                        fontWeight={500}
                        variant="h6"
                        component="div"
                      >
                        Social History (SH)
                      </Typography>
                      <div className="px-[12px] ">
                        <div className="text_area_radius">
                          <TextField
                            className="mt-3"
                            id="Type your message"
                            label="Previous medical conditions & surgeries."
                            multiline
                            minRows={1}
                            fullWidth
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" margin-top-20">
                      <Typography
                        color="#0A0C0F"
                        fontSize={12}
                        fontWeight={500}
                        variant="h6"
                        component="div"
                      >
                        Social History (SH)
                      </Typography>
                      <div className="px-[12px] ">
                        <div className="text_area_radius">
                          <TextField
                            className="mt-3"
                            id="Type your message"
                            label="Previous medical conditions & surgeries."
                            multiline
                            minRows={1}
                            fullWidth
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" margin-top-20">
                      <Typography
                        color="#0A0C0F"
                        fontSize={12}
                        fontWeight={500}
                        variant="h6"
                        component="div"
                      >
                        Review of Systems (ROS)
                      </Typography>
                      <div className="px-[12px] ">
                        <div className="text_area_radius">
                          <TextField
                            className="mt-3"
                            id="Type your message"
                            label="Previous medical conditions & surgeries."
                            multiline
                            minRows={1}
                            fullWidth
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="no_boxShadow mt-3"
            expanded={objectiveExpanded}
            style={{
              height,
              marginBottom,
              borderRadius: objectiveExpanded ? "10px" : "10px",
            }}
            onChange={() => setObjectiveExpanded(!objectiveExpanded)}
          >
            <AccordionSummary
              className="bright-gray-50-bg"
              style={{ borderRadius: "10px" }}
              aria-controls="objective-content"
              id="objective-header"
            >
              <Box
                gridColumn="span 12"
                display="flex"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  {avatarVisible && (
                    <Avatar
                      alt={doctorName}
                      src={avatarSrc || ""}
                      variant="rounded-full"
                      sx={{ width: 50, height: 50 }}
                    />
                  )}
                  <Box mx={2}>
                    <Typography
                      variant="body1"
                      component="h6"
                      className="dark-gray-500"
                      fontWeight="500"
                      fontSize="18px"
                    >
                      {doctorName}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <span className="dark-gray-400 font-14">{specialty}</span>
                      {avatarVisible ? (
                        <span className="dark-gray-200">| Past</span>
                      ) : (
                        <span className="text-[#FF6666]">Objective</span>
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    component="span"
                    className="hover:text-[#3760F2]"
                    style={{ marginRight: "20px" }}
                    onClick={handlePharmacyModal}
                  >
                    {expandText}
                  </Typography>
                  <Box onClick={() => setObjectiveExpanded(!objectiveExpanded)}>
                    {objectiveExpanded ? (
                      <FaAngleDown
                        sx={{ color: iconColor, fontSize: iconSize }}
                        size={20}
                      />
                    ) : (
                      <KeyboardArrowUpIcon
                        sx={{ color: iconColor, fontSize: iconSize }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-spacing">
              <div className="px-[12px] ">
                <div className="text_area_radius">
                  <Typography
                    color="#0A0C0F"
                    fontSize={12}
                    fontWeight={500}
                    variant="h6"
                    component="div"
                  >
                    Vitals
                  </Typography>
                  <Grid container spacing>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <div className="rounded-full border border-[#E1E5EA] margin-top-20">
                        <Typography
                          padding="12px"
                          variant="body1"
                          component="h6"
                          fontWeight="500"
                          color="#999999"
                          fontSize={12}
                        >
                          Temperature
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <div className="rounded-full border border-[#E1E5EA] margin-top-20">
                        <Typography
                          padding="12px"
                          variant="body1"
                          component="h6"
                          fontWeight="500"
                          color="#999999"
                          fontSize={12}
                        >
                          Blood Pressure
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <div className="rounded-full border border-[#E1E5EA] margin-top-20">
                        <Typography
                          padding="12px"
                          variant="body1"
                          component="h6"
                          fontWeight="500"
                          color="#999999"
                          fontSize={12}
                        >
                          Heart Rate
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <div className="rounded-full border border-[#E1E5EA] margin-top-20">
                        <Typography
                          padding="12px"
                          variant="body1"
                          component="h6"
                          fontWeight="500"
                          color="#999999"
                          fontSize={12}
                        >
                          Respiratory Rate
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                  <Typography
                    padding="12px"
                    variant="body1"
                    component="h6"
                    fontWeight="500"
                    color="#999999"
                    fontSize={12}
                  >
                    Physical Examination Findings
                  </Typography>
                  <TextField
                    id="Type your message"
                    label="Observations from the physical exam, organized by body system (e.g., cardiovascular, respiratory gastrointestinal)."
                    multiline
                    minRows={1}
                    fullWidth
                  />

                  <Typography
                    padding="12px"
                    variant="body1"
                    component="h6"
                    fontWeight="500"
                    color="#999999"
                    fontSize={12}
                  >
                    Laboratory and Diagnostic Test Results
                  </Typography>

                  <div className="flex justify-between items-center flex-wrap rounded-lg p-[15px] border border-[#E1E5EA] margin-top-20">
                    <div className="flex items-center gap-2">
                      <img src={IMAGES.PDF_IMAGE} />
                      <span>Blood Test.pdf</span>
                    </div>
                    <MdDeleteOutline size={20} color="#FF6666" />
                  </div>

                  <div className="flex justify-between items-center flex-wrap rounded-lg p-[15px] border border-[#E1E5EA] margin-top-20">
                    <div className="flex items-center gap-2">
                      <img src={IMAGES.REPORT} />
                      <span>Scan.png</span>
                    </div>
                    <MdDeleteOutline size={20} color="#FF6666" />
                  </div>

                  <div className="flex justify-between items-center flex-wrap rounded-lg p-[15px] border border-[#E1E5EA] margin-top-20">
                    <div className="flex items-center gap-2">
                      <img src={IMAGES.PDF_IMAGE} />
                      <span>LFT report.pdf</span>
                    </div>
                    <MdDeleteOutline size={20} color="#FF6666" />
                  </div>
                  <div className="flex justify-end items-center">
                    <CustomButton
                      fontSize="12px"
                      text="Upload"
                      showAttachmentIcon={true}
                      color="white"
                      borderRadius="50px"
                      height="38px"
                      width="100px"
                      backgroundColor="var(--primary-color)"
                      fontWeight="400"
                      marginTop="10px"
                    />
                  </div>

                  <Typography
                    padding="12px"
                    variant="body1"
                    component="h6"
                    fontWeight="500"
                    color="#999999"
                    fontSize={12}
                  >
                    General Appearance
                  </Typography>
                  <TextField
                    id="Type your message"
                    label="General observations about the patient’s appearance and demeanor."
                    multiline
                    minRows={1}
                    fullWidth
                  />

                  <CustomButton
                    fontSize="12px"
                    text="Apply"
                    color="white"
                    borderRadius="50px"
                    width="100%"
                    height="35px"
                    backgroundColor="var(--primary-color)"
                    fontWeight="400"
                    marginTop="50px"
                  />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="no_boxShadow mt-3"
            expanded={assessments}
            style={{
              height,
              marginBottom,
              borderRadius: assessments ? "10px" : "10px",
            }}
            onChange={() => setAssessmentExpanded(!assessments)}
          >
            <AccordionSummary
              className="bright-gray-50-bg"
              style={{ borderRadius: "10px" }}
              aria-controls="objective-content"
              id="objective-header"
            >
              <Box
                gridColumn="span 12"
                display="flex"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  {avatarVisible && (
                    <Avatar
                      alt={doctorName}
                      src={avatarSrc || ""}
                      variant="rounded-full"
                      sx={{ width: 50, height: 50 }}
                    />
                  )}
                  <Box mx={2}>
                    <Typography
                      variant="body1"
                      component="h6"
                      className="dark-gray-500"
                      fontWeight="500"
                      fontSize="18px"
                    >
                      {doctorName}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <span className="dark-gray-400 font-14">{specialty}</span>
                      {avatarVisible ? (
                        <span className="dark-gray-200">| Past</span>
                      ) : (
                        <span className="text-[#FF6666]">Assesment</span>
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    component="span"
                    className="hover:text-[#3760F2]"
                    style={{ marginRight: "20px" }}
                    onClick={handlePharmacyModal}
                  >
                    {expandText}
                  </Typography>
                  <Box onClick={() => setAssessmentExpanded(!assessments)}>
                    {assessments ? (
                      <FaAngleDown
                        sx={{ color: iconColor, fontSize: iconSize }}
                        size={20}
                      />
                    ) : (
                      <KeyboardArrowUpIcon
                        sx={{ color: iconColor, fontSize: iconSize }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-spacing">
              <Typography
                color="#0A0C0F"
                fontSize={12}
                fontWeight={500}
                variant="h6"
                component="div"
              >
                Problems
              </Typography>
              <div className="mt-3">
                <CustomizedSelectHook />
              </div>
              <Typography
                color="#0A0C0F"
                fontSize={12}
                fontWeight={500}
                variant="h6"
                component="div"
                className="mt-3"
              >
                Clinical Impressions
              </Typography>

              <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                <Typography
                  padding="12px"
                  variant="body1"
                  component="h6"
                  fontWeight="500"
                  color="#999999"
                  fontSize={12}
                >
                  The provider's interpretation of the collected data and any
                  working hypotheses.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="no_boxShadow mt-3"
            expanded={plans}
            style={{
              height,
              marginBottom,
              borderRadius: plans ? "10px" : "10px",
            }}
            onChange={() => setPlansExpanded(!plans)}
          >
            <AccordionSummary
              className="bright-gray-50-bg"
              style={{ borderRadius: "10px" }}
              aria-controls="objective-content"
              id="objective-header"
            >
              <Box
                gridColumn="span 12"
                display="flex"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  {avatarVisible && (
                    <Avatar
                      alt={doctorName}
                      src={avatarSrc || ""}
                      variant="rounded-full"
                      sx={{ width: 50, height: 50 }}
                    />
                  )}
                  <Box mx={2}>
                    <Typography
                      variant="body1"
                      component="h6"
                      className="dark-gray-500"
                      fontWeight="500"
                      fontSize="18px"
                    >
                      {doctorName}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <span className="dark-gray-400 font-14">{specialty}</span>
                      {avatarVisible ? (
                        <span className="dark-gray-200">| Past</span>
                      ) : (
                        <span className="text-[#FF6666]">Plans</span>
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    component="span"
                    className="hover:text-[#3760F2]"
                    style={{ marginRight: "20px" }}
                    onClick={handlePharmacyModal}
                  >
                    {expandText}
                  </Typography>
                  <Box onClick={() => setPlansExpanded(!plans)}>
                    {plans ? (
                      <FaAngleDown
                        sx={{ color: iconColor, fontSize: iconSize }}
                        size={20}
                      />
                    ) : (
                      <KeyboardArrowUpIcon
                        sx={{ color: iconColor, fontSize: iconSize }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-spacing">
              <div className="px-[12px] ">
                <div className="text_area_radius">
                  <Typography
                    color="#0A0C0F"
                    fontSize={12}
                    fontWeight={500}
                    variant="h6"
                    component="div"
                  >
                    Treatment Plan
                  </Typography>

                  <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                    <Typography
                      padding="12px"
                      variant="body1"
                      component="h6"
                      fontWeight="500"
                      color="#999999"
                      fontSize={12}
                    >
                      Medications: Prescribed drugs, dosages, and instructions.
                    </Typography>
                  </div>

                  <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                    <Typography
                      padding="12px"
                      variant="body1"
                      component="h6"
                      fontWeight="500"
                      color="#999999"
                      fontSize={12}
                    >
                      Therapies: Recommended physical therapy, counseling, etc.
                    </Typography>
                  </div>

                  <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                    <Typography
                      padding="12px"
                      variant="body1"
                      component="h6"
                      fontWeight="500"
                      color="#999999"
                      fontSize={12}
                    >
                      Procedures: Any procedures to be performed.
                    </Typography>
                  </div>
                  <Typography
                    color="#0A0C0F"
                    fontSize={12}
                    fontWeight={500}
                    variant="h6"
                    component="div"
                    className="margin-top-20"
                  >
                    Follow-Up
                  </Typography>
                  <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                    <Typography
                      padding="12px"
                      variant="body1"
                      component="h6"
                      fontWeight="500"
                      color="#999999"
                      fontSize={12}
                    >
                      Instructions for follow-up appointments or actions.
                    </Typography>
                  </div>

                  <Typography
                    color="#0A0C0F"
                    fontSize={12}
                    fontWeight={500}
                    variant="h6"
                    component="div"
                    className="margin-top-20"
                  >
                    Patient Education
                  </Typography>
                  <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                    <Typography
                      padding="12px"
                      variant="body1"
                      component="h6"
                      fontWeight="500"
                      color="#999999"
                      fontSize={12}
                    >
                      Information provided to the patient about their condition
                      and treatment.
                    </Typography>
                  </div>

                  <Typography
                    color="#0A0C0F"
                    fontSize={12}
                    fontWeight={500}
                    variant="h6"
                    component="div"
                    className="margin-top-20"
                  >
                    Referrals
                  </Typography>
                  <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                    <Typography
                      padding="12px"
                      variant="body1"
                      component="h6"
                      fontWeight="500"
                      color="#999999"
                      fontSize={12}
                    >
                      Referrals to specialists or other healthcare providers.
                    </Typography>
                  </div>

                  <Typography
                    color="#0A0C0F"
                    fontSize={12}
                    fontWeight={500}
                    variant="h6"
                    component="div"
                    className="margin-top-20"
                  >
                    Lifestyle Recommendations
                  </Typography>
                  <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                    <Typography
                      padding="12px"
                      variant="body1"
                      component="h6"
                      fontWeight="500"
                      color="#999999"
                      fontSize={12}
                    >
                      Advice on diet, exercise, and other lifestyle changes.
                    </Typography>
                  </div>
                  <CustomButton
                    fontSize="12px"
                    text="Apply"
                    color="white"
                    borderRadius="50px"
                    width="100%"
                    height="35px"
                    backgroundColor="var(--primary-color)"
                    fontWeight="400"
                    marginTop="50px"
                  />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </>
      ),
    },
    // Add more accordion items as needed
  ];
  const allergyData = [
    {
      title: "Allergies",
      avatarVisible: false,
      children: (
        <>
          <Accordion
            className="no_boxShadow"
            expanded={allergyExpanded}
            style={{
              // height,
              // marginBottom,
              borderRadius: allergyExpanded ? "10" : "10px",
            }}
            onChange={() => setAllergyExpanded(!allergyExpanded)}
          >
            <AccordionSummary
              className="bright-gray-50-bg"
              style={{ borderRadius: "10px" }}
              aria-controls="subjective-content"
              id="subjective-header"
            >
              <Box
                gridColumn="span 12"
                display="flex"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  {avatarVisible && (
                    <Avatar
                      alt={doctorName}
                      src={avatarSrc || ""}
                      variant="rounded-full"
                      sx={{ width: 50, height: 50 }}
                    />
                  )}
                  <Box mx={2}>
                    <Typography
                      variant="body1"
                      component="h6"
                      className="dark-gray-500"
                      fontWeight="500"
                      fontSize="18px"
                    >
                      {doctorName}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <span className="dark-gray-400 font-14">{specialty}</span>
                      {avatarVisible ? (
                        <span className="dark-gray-200">| Past</span>
                      ) : (
                        <span className="text-[#FF6666] fw-500">Allergies</span>
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    component="span"
                    className="hover:text-[#3760F2]"
                    style={{ marginRight: "20px" }}
                    onClick={handlePharmacyModal}
                  >
                    {expandText}
                  </Typography>
                  <Box onClick={() => setAllergyExpanded(!allergyExpanded)}>
                    {allergyExpanded ? (
                      <FaAngleDown sx={{ color: iconColor }} size={20} />
                    ) : (
                      <KeyboardArrowUpIcon
                        sx={{ color: iconColor, fontSize: iconSize }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-spacing">
              <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                <Typography
                  padding="12px"
                  variant="body1"
                  component="h6"
                  fontWeight="500"
                  color="#999999"
                  fontSize={12}
                >
                  List of any known allergies, particularly to medications.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="no_boxShadow mt-3"
            expanded={medicationExpanded}
            style={{
              // height,
              // marginBottom,
              borderRadius: medicationExpanded ? "10" : "10px",
            }}
            onChange={() => setMedicationExpanded(!medicationExpanded)}
          >
            <AccordionSummary
              className="bright-gray-50-bg"
              style={{ borderRadius: "10px" }}
              aria-controls="subjective-content"
              id="subjective-header"
            >
              <Box
                gridColumn="span 12"
                display="flex"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  {avatarVisible && (
                    <Avatar
                      alt={doctorName}
                      src={avatarSrc || ""}
                      variant="rounded-full"
                      sx={{ width: 50, height: 50 }}
                    />
                  )}
                  <Box mx={2}>
                    <Typography
                      variant="body1"
                      component="h6"
                      className="dark-gray-500"
                      fontWeight="500"
                      fontSize="18px"
                    >
                      {doctorName}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <span className="dark-gray-400 font-14">{specialty}</span>
                      {avatarVisible ? (
                        <span className="dark-gray-200">| Past</span>
                      ) : (
                        <span className="text-[#FF6666] fw-500">
                          Current Medications
                        </span>
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    component="span"
                    className="hover:text-[#3760F2]"
                    style={{ marginRight: "20px" }}
                    onClick={handlePharmacyModal}
                  >
                    {expandText}
                  </Typography>
                  <Box
                    onClick={() => setMedicationExpanded(!medicationExpanded)}
                  >
                    {medicationExpanded ? (
                      <FaAngleDown sx={{ color: iconColor }} size={20} />
                    ) : (
                      <KeyboardArrowUpIcon
                        sx={{ color: iconColor, fontSize: iconSize }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-spacing">
              <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                <Typography
                  padding="12px"
                  variant="body1"
                  component="h6"
                  fontWeight="500"
                  color="#999999"
                  fontSize={12}
                >
                  All medications the patient is currently taking, including
                  over-the-counter drugs & supplements.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="no_boxShadow mt-3"
            expanded={notes}
            style={{
              // height,
              // marginBottom,
              borderRadius: notes ? "10" : "10px",
            }}
            onChange={() => setNotes(!notes)}
          >
            <AccordionSummary
              className="bright-gray-50-bg"
              style={{ borderRadius: "10px" }}
              aria-controls="subjective-content"
              id="subjective-header"
            >
              <Box
                gridColumn="span 12"
                display="flex"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  {avatarVisible && (
                    <Avatar
                      alt={doctorName}
                      src={avatarSrc || ""}
                      variant="rounded-full"
                      sx={{ width: 50, height: 50 }}
                    />
                  )}
                  <Box mx={2}>
                    <Typography
                      variant="body1"
                      component="h6"
                      className="dark-gray-500"
                      fontWeight="500"
                      fontSize="18px"
                    >
                      {doctorName}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <span className="dark-gray-400 font-14">{specialty}</span>
                      {avatarVisible ? (
                        <span className="dark-gray-200">| Past</span>
                      ) : (
                        <span className="text-[#FF6666] fw-500">Notes</span>
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    component="span"
                    className="hover:text-[#3760F2]"
                    style={{ marginRight: "20px" }}
                    onClick={handlePharmacyModal}
                  >
                    {expandText}
                  </Typography>
                  <Box onClick={() => setNotes(!notes)}>
                    {notes ? (
                      <FaAngleDown sx={{ color: iconColor }} size={20} />
                    ) : (
                      <KeyboardArrowUpIcon
                        sx={{ color: iconColor, fontSize: iconSize }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-spacing">
              <div className="rounded-lg border border-[#E1E5EA] margin-top-20">
                <Typography
                  padding="12px"
                  variant="body1"
                  component="h6"
                  fontWeight="500"
                  color="#999999"
                  fontSize={12}
                >
                  Additional comments or observations
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </>
      ),
    },
  ];
  const ChatMessage = ({ message, isOutgoing, avatar }) => {
    return (
      <div
        className={`flex gap-2 margin-top-12 ${
          isOutgoing ? "justify-end items-end" : "justify-start items-end"
        }`}
      >
        {!isOutgoing && (
          <Avatar
            alt="Sender Avatar"
            src={avatar}
            className="chat_avatar_size"
          />
        )}
        <div
          className={`rounded-xl px-3 py-3 w-75 max-w-sm ${
            isOutgoing
              ? "text-[#FFFFFF] text-[10px] bg-[#FAB06B] generic_boxShadow rounded-br-none"
              : "text-[#1A0000] text-[10px] bg-[#FFFFFF] generic_boxShadow rounded-bl-none"
          }`}
        >
          {message}
        </div>
        {isOutgoing && (
          <Avatar
            alt="Sender Avatar"
            src={avatar}
            className="chat_avatar_size"
          />
        )}
      </div>
    );
  };

  const tabs = [
    {
      label: "Chatbox",
      content: (
        <>
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isOutgoing={message.isOutgoing}
              avatar={message.avatar}
            />
          ))}
          <div className="flex justify-center items-end gap-2 relative mt-[20rem] chat_textarea_space">
            <TextField
              className="textarea_radius"
              id="Type your message"
              label="Type your message"
              multiline
              minRows={1}
              fullWidth
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                },
              }}
            />
            <GrAttachment
              color="#999999"
              size={20}
              className="absolute right-[70px] top-4"
            />
            <div className="h-[50px] w-[60px] rounded-full bg-[#999999] flex justify-center items-center">
              <IoIosSend
                size={25}
                color="#FFFFFF"
                className="mx-2"
                onClick={handleSendMessage}
              />
            </div>
          </div>
        </>
      ),
    },
    {
      label: "Soap Notes",
      content: (
        <>
          {accordionData.map((data, index) => (
            <div
              key={index}
              {...data}
              marginBottom="20px"
              iconColor="#000000"
              iconSize="30px"
              defaultExpanded={false}
            />
          ))}
        </>
      ),
    },
    {
      label: "Allergies",
      content: (
        <>
          {allergyData.map((data, index) => (
            <div
              key={index}
              {...data}
              marginBottom="20px"
              iconColor="#000000"
              iconSize="30px"
              defaultExpanded={false}
            />
          ))}
        </>
      ),
    },
  ];
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.error(
            `Error attempting to disable full-screen mode: ${err.message} (${err.name})`
          );
        });
      }
    }
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={8} md={8} sm={6} xs={12}>
          <div className="flex justify-between items-center mb-3">
            <BadgeAvatars />
            <div
              className="cursor-pointer flex justify-center items-center rounded-full generic_boxShadow2 h-[40px] w-[40px]"
              onClick={toggleFullScreen}
            >
              <MdFullscreen size={25} className="cursor-pointer" />
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <div className="relative">
            <img
              src={IMAGES.CHAT_PERSON}
              className="w-auto h-auto rounded-xl"
              alt="Chat Person"
            />
            <img
              src={IMAGES.DOCTOR_CALL}
              className="absolute bottom-20 right-4 responsive_doctor_chat"
            />
          </div>

          <div className="flex justify-center relative bottom-[5.5rem] right-[50%] left-[50%] items-center h-[60px] w-[60px] bg-[#FF3333] rounded-full">
            <img src={IMAGES.END_CALL} className="absolute" />
          </div>
          <div className="relative">
            <div className="absolute flex gap-[20px] bottom-[3.8rem] linear_gradient_chat items-center">
              <div className="flex gap-2 items-center">
                <RiRecordCircleLine color="white" />{" "}
                <span className="text_white">06:05 </span>
              </div>
              <span className="text_white">|</span>
              <MicIcon className="text_white" />
              <span className="text_white">|</span>
              <VideocamIcon className="text_white" />
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="bg-[#ffffff] parent_tabs_chat"
        >
          <CustomTabs
            tabs={tabs}
            value={value}
            handleChange={handleChange}
            indicatorColor="#FF6666"
            border="none"
            padding="0px"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
