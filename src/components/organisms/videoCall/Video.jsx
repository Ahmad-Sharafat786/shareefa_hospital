import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { IMAGES } from "../../../assets/images";
import {
  Avatar,
  Button,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  TextField,
  IconButton,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IoMdClose } from "react-icons/io";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { GoDotFill } from "react-icons/go";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IoAddOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { CiVideoOn } from "react-icons/ci";
import CallIcon from "@mui/icons-material/Call";
import MicIcon from "@mui/icons-material/Mic";
import { TbNotes } from "react-icons/tb";
import { IoMicOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { HiOutlineMicrophone } from "react-icons/hi2";


const style = {
  display: "flex",
  borderRadius: "20px",
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  // width: "60%",                     point to notice
  width: "auto",
  maxHeight: "100%", // Set fixed height
  overflow: "auto",
  "@media (max-width: 576px)": {
    width: "auto", // Set width to auto for small screens
    height: "auto", // Set height to auto for small screens
  },
};

const ChatMessage = ({ message, isOutgoing, avatar, timestamp }) => {
  return (
    <div
      className={`flex flex-col gap-1 margin-top-12 ${
        isOutgoing ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`flex items-center gap-2 ${
          isOutgoing ? "flex-row-reverse" : ""
        }`}
      >
        {!isOutgoing && <Avatar alt="Sender Avatar" src={avatar} />}
        {isOutgoing && <Avatar alt="Sender Avatar" src={avatar} />}
        <div
          className={`rounded-xl px-3 py-2 max-w-sm ${
            isOutgoing ? "text-[#000000]" : "text-white"
          } ${isOutgoing ? "bg-[#E3E3E3]" : "bg-[var(--primary-color)]"} ${
            isOutgoing ? "rounded-br-none" : "rounded-bl-none"
          }`}
        >
          {message}
        </div>
      </div>
      <span
        className={`text-xs text-gray-500 ${
          isOutgoing ? "text-right me-5" : "text-left mx-5"
        }`}
      >
        {timestamp}
      </span>
    </div>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Video({
  open,
  handleClose,
  soapModal,
  setSoapModal,
  chatModal,
  setChatModal,
  showIcons,
  setOpen,
  setShowIcons,
}) {
  console.log("showIcons", showIcons);
  const [value, setValue] = React.useState(0);
  const [medicationFields, setMedicationFields] = useState([]);

  const handleSoapModal = () => {
    console.log("handleSoapModal is called");
    setSoapModal(true);
    setChatModal(false);
    setOpen(true);
  };
  const handleChatModal = () => {
    console.log("handleChatModal is called");
    setChatModal(true);
    setSoapModal(false);
    setOpen(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [messages, setMessages] = useState([
    {
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, vero.",
      isOutgoing: false,
      avatar: IMAGES.VCall,
      timestamp: "9:30Am",
    },
    {
      text: "Lorem ipsum dolor sit amet.",
      isOutgoing: true,
      avatar: IMAGES.VCall1,
      timestamp: "9:30Am",
    },
    {
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, vero.",
      isOutgoing: false,
      avatar: IMAGES.VCall,
      timestamp: "9:30Am",
    },
    {
      text: "Lorem ipsum dolor sit amet.",
      isOutgoing: true,
      avatar: IMAGES.VCall1,
      timestamp: "9:30Am",
    },
    // {
    //   text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, vero.",
    //   isOutgoing: false,
    //   avatar: IMAGES.VCall,
    //   timestamp: "9:30Am",
    // },
    // {
    //   text: "Lorem ipsum dolor sit amet.",
    //   isOutgoing: true,
    //   avatar: IMAGES.VCall1,
    //   timestamp: "9:30Am",
    // },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        {
          text: newMessage,
          isOutgoing: true,
          avatar: IMAGES.VCall1,
          ...messages.timestamp,
        },
      ]);
      setNewMessage("");
    }
  };
  const closeSoapModal = () => {
    setSoapModal(false);
  };
  const closeChatModal = () => {
    setChatModal(false);
  };
  const handleAddMedication = () => {
    setMedicationFields([...medicationFields, ""]); // Add a new empty field
  };
  const handleMedicationChange = (index, event) => {
    const newFields = [...medicationFields];
    newFields[index] = event.target.value;
    setMedicationFields(newFields);
  };

  return (
    <div>
      <Modal
        className="mt-5 overflow-auto h-100 rounded-lg"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        // onClose={(event, reason) => {
        //   if (reason !== "backdropClick") {
        //     handleClose(event, reason);
        //   }
        // }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        sx={{
          maxHeight: "100%",
          overflowY: "auto",
          zIndex: '999999'
        }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backgroundColor: "#000000",
            },
          },
        }}
      >
        <Fade in={open}>
          {soapModal ? (
            <Grid container>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <Box sx={style} className="w-75">
                  <Grid container>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                      <img
                        src={IMAGES.VCall}
                        alt=""
                        className="relative h-100 rounded-[20px]"
                      />
                      <img
                        src={IMAGES.VCall1}
                        alt=""
                        className="doctor_video_img"
                      />
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                      {/* Soap Notes codes */}
                      {/* <Card>
                      <CardContent>
                        <div className="flex justify-between">
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            Add SOAP Notes
                          </Typography>
                          <IoMdClose size={20} onClick={closeSoapModal} className="cursor-pointer"/>
                        </div>
                        <div className="pt-3 pb-3">Subjective</div>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Type here"
                          multiline
                          minRows={2}
                          fullWidth
                        />
                        <div className="pt-3 pb-3">Objective</div>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Type here"
                          multiline
                          minRows={2}
                          fullWidth
                        />
                        <Typography variant="body2">
                          <Button
                            className="w-100"
                            component="label"
                            role={undefined}
                            tabIndex={-1}
                            sx={{
                              backgroundColor: "#F2F2F2",
                              textTransform: "capitalize",
                              color: "#666666",
                            }}
                            startIcon={<CloudUploadIcon />}
                          >
                            Click to Upload Image
                            <VisuallyHiddenInput type="file" />
                          </Button>
                        </Typography>
                        <div className="pt-3 pb-3">Assessment</div>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Type here"
                          multiline
                          minRows={2}
                          fullWidth
                        />
                        <div className="pt-3 pb-3">Plan Type</div>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Type here"
                          multiline
                          minRows={2}
                          fullWidth
                        />
                        <div className="flex justify-end items-end">
                          <button className="bg-[#FF6060] mt-[30px] text-white px-[40px] py-[8px] rounded-full">
                            Save
                          </button>
                        </div>
                      </CardContent>
                    </Card> */}
                      <Box
                        sx={{
                          boxShadow: 3,
                          borderRadius: "20px",
                          padding: "16px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <div className="flex justify-between items-center px-[10px]">
                            <Typography
                              variant="h6"
                              fontSize="20px"
                              marginTop="10px"
                              color="#000000"
                              className="generic-name-color"
                              fontWeight="500"
                            >
                              Add SOAP Notes
                            </Typography>
                            <IoMdClose
                              color="#1A1A1A"
                              size={25}
                              className="cursor-pointer"
                              onClick={closeSoapModal}
                            />
                          </div>
                          <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            className="parent_tabs mt-3 px-[10px]"
                          >
                            <Tab
                              label="Make Notes"
                              sx={{
                                fontSize: "12px",
                                textTransform: "capitalize",
                                fontWeight: "light",
                                borderRadius: "10px 10px 0px 0px",
                                minHeight: "37px",
                                padding: "0px 25px",
                              }}
                              {...a11yProps(0)}
                              className="soap_tabs text_white capitalize"
                            />
                            <Tab
                              label="Patient Info"
                              {...a11yProps(1)}
                              className="soap_tabs text_white capitalize"
                              sx={{
                                fontSize: "12px",
                                textTransform: "capitalize",
                                fontWeight: "light",
                                borderRadius: "10px 10px 0px 0px",
                                minHeight: "37px",
                                padding: "0px 25px",
                              }}
                            />
                            <Tab
                              label="Avatar"
                              {...a11yProps(2)}
                              className="soap_tabs text_white capitalize"
                              sx={{
                                fontSize: "12px",
                                textTransform: "capitalize",
                                fontWeight: "light",
                                borderRadius: "10px 10px 0px 0px",
                                minHeight: "37px",
                                padding: "0px 25px",
                              }}
                            />
                            <Tab
                              label="Medical History"
                              {...a11yProps(3)}
                              className="soap_tabs text_white capitalize "
                              sx={{
                                fontSize: "12px",
                                textTransform: "capitalize",
                                fontWeight: "light",
                                borderRadius: "10px 10px 0px 0px",
                                minHeight: "37px",
                                padding: "0px 25px",
                              }}
                            />
                          </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                          <Accordion sx={{ boxShadow: "none" }}>
                            <AccordionSummary
                              style={{ borderRadius: "10px" }}
                              className="soap_tabs text_white opacity-90"
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              Vitals
                            </AccordionSummary>
                            <AccordionDetails>
                              <Grid container spacing={2} className="pt-2">
                                <Grid item xs={4}>
                                  <TextField
                                    id="outlined-basic"
                                    label="Weight"
                                    variant="outlined"
                                  />
                                </Grid>
                                <Grid item xs={4}>
                                  <TextField
                                    id="outlined-basic"
                                    label="Height"
                                    variant="outlined"
                                  />
                                </Grid>
                                <Grid item xs={4}>
                                  <TextField
                                    id="outlined-basic"
                                    label="Sugar Level"
                                    variant="outlined"
                                  />
                                </Grid>
                                <Grid item xs={4}>
                                  <TextField
                                    id="outlined-basic"
                                    label="Heart Rate"
                                    variant="outlined"
                                  />
                                </Grid>
                                <Grid item xs={4}>
                                  <TextField
                                    id="outlined-basic"
                                    label="Blood Pressure"
                                    variant="outlined"
                                  />
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          </Accordion>
                          <div
                            className="flex items-center gap-2 mt-2 p-2 soap_tabs"
                            style={{
                              borderRadius: "10px 10px 0px 0px",
                              height: "45px",
                            }}
                          >
                            <button className="bg_white dark-gray-500 text-transform-capitalize rounded-lg px-3 py-2 text-[12px]">
                              Subjective
                            </button>
                            <Divider
                              className="opacity-100"
                              orientation="vertical"
                              variant="start"
                              flexItem
                              sx={{
                                borderWidth: "1px",
                                height: "30px",
                                borderColor: "white",
                              }}
                            />
                            <Button className="text_white text-transform-capitalize">
                              Objective
                            </Button>
                            <Divider
                              className="opacity-100"
                              orientation="vertical"
                              variant="start"
                              flexItem
                              sx={{
                                borderWidth: "1px",
                                height: "30px",
                                borderColor: "white",
                              }}
                            />
                            <Button className=" text_white text-transform-capitalize">
                              Assesment
                            </Button>
                            <Divider
                              className="opacity-100"
                              orientation="vertical"
                              variant="start"
                              flexItem
                              sx={{
                                borderWidth: "1px",
                                height: "30px",
                                borderColor: "white",
                              }}
                            />
                            <Button className=" text_white text-transform-capitalize">
                              Plan
                            </Button>
                          </div>

                          <textarea
                            className="px-3 pt-2 font-14 rounded-lg dark-gray-200  border-3 border-[#FF8080]"
                            style={{ borderRadius: "0px 0px 10px 10px" }}
                            id="doctor-observation"
                            name="doctor-observation"
                            rows="4"
                            cols="50"
                          >
                            Your text will be here
                          </textarea>

                          <Accordion
                            className="margin-top-16"
                            sx={{ boxShadow: "none" }}
                          >
                            <AccordionSummary
                              style={{ borderRadius: "10px" }}
                              className="soap_tabs text_white opacity-90 "
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              Doctor Observation
                            </AccordionSummary>
                            <AccordionDetails>
                              <textarea
                                className="px-3 pt-2 font-14 rounded-lg dark-gray-200  border-2 border-[#8B8B8B]"
                                id="doctor-observation"
                                name="doctor-observation"
                                rows="4"
                                cols="50"
                              >
                                Your text will be here
                              </textarea>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion
                            className="margin-top-16"
                            sx={{ boxShadow: "none" }}
                          >
                            <AccordionSummary
                              style={{ borderRadius: "10px" }}
                              className="soap_tabs text_white opacity-90 "
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              Medication
                            </AccordionSummary>
                            <AccordionDetails>
                              <div className="flex gap-2 justify-center items-center cursor-pointer">
                                <IoAddOutline className="text-primary" />
                                <h5
                                  className="text-primary"
                                  onClick={handleAddMedication}
                                >
                                  Add Medication
                                </h5>
                              </div>

                              <Grid container spacing={2} className="pt-2">
                                {medicationFields.map((field, index) => (
                                  <Grid item xs={4} key={index}>
                                    <TextField
                                      value={field}
                                      onChange={(event) =>
                                        handleMedicationChange(index, event)
                                      }
                                      label={`Medication ${index + 1}`}
                                      variant="outlined"
                                      fullWidth
                                      className="margin-top-16"
                                    />
                                  </Grid>
                                ))}
                              </Grid>
                            </AccordionDetails>
                          </Accordion>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                          Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                          Item Three
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                          Item Four
                        </CustomTabPanel>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          ) : chatModal ? (
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={style} className="w-75">
                <Grid container>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="videoImage-responsive"
                  >
                    <img
                      src={IMAGES.VCall}
                      alt=""
                      className="relative h-100 rounded-[20px]"
                    />
                    {/* <img
                      src={IMAGES.VCall1}
                      alt=""
                      className="absolute top-[70%] left-[19rem] h-[25%]"
                    /> */}
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card style={{ borderRadius: "20px" }}>
                      <CardContent>
                        <div className="flex justify-between">
                          <Typography
                            sx={{ fontSize: 14, display: "flex", gap: 2 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src={IMAGES.VCall}
                              className="relative"
                            />
                            <GoDotFill
                              className="relative right-[25px]"
                              color="#21CE28"
                            />
                            <div className="flex gap-3 text-[20px] text-[#000000]">
                              Jenifer Johns
                            </div>
                          </Typography>
                          <IoMdClose
                            size={20}
                            onClick={closeChatModal}
                            className="cursor-pointer"
                          />
                        </div>
                        {messages.map((message, index) => (
                          <ChatMessage
                            key={index}
                            message={message.text}
                            isOutgoing={message.isOutgoing}
                            avatar={message.avatar}
                            timestamp={message.timestamp}
                          />
                        ))}
                        <Divider
                          sx={{
                            height: 2, // Adjust thickness (for horizontal Divider)
                            bgcolor: "#C3C3C3", // Adjust color
                            marginY: 2, // Adjust spacing
                          }}
                        />
                        <div className="flex justify-between items-center margin-top-12">
                          <BsEmojiSmile size={20} color="#9C9C9C" />
                          <ImAttachment size={20} color="#9C9C9C" />
                          <TextField
                            id="outlined-multiline-flexible"
                            className="relative"
                            label="Type your message"
                            multiline
                            minRows={1}
                            fullWidth
                            value={newMessage}
                            sx={{
                              width: "75%",
                              "& .MuiOutlinedInput-root": {
                                borderRadius: "50px",
                                height: "45px",
                              },
                            }}
                            onChange={(e) => setNewMessage(e.target.value)}
                          />
                          <div className="bg-[#FF6060] h-[30px] w-[30px] rounded-full absolute right-20 flex justify-center items-center">
                            <IoIosSend size={20} color="white"  onClick={handleSendMessage} />
                          </div>

                          <HiOutlineMicrophone
                            size={30}
                            color="#FF6060"
                            sx={{ ml: 2 }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ) : (
            <Box sx={style}>
              <div className="main_girl_image">
                <img src={IMAGES.VCall} alt="" className="relative w-100" />
              </div>

              <img
                src={IMAGES.VCall1}
                alt=""
                className="absolute top-[60%] right-8 h-[35%]"
              />
            </Box>
          )}
        </Fade>
      </Modal>

      <div>
        {showIcons && (
          <Box
            zIndex="99999"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              position: "fixed",
              bottom: "0%",
              top: "85%",
              left: "50%",
              transform: "translateX(-50%)",
              // bgcolor: "background.paper",
              borderRadius: 1,
              mt: 3,
              width: "80%",
              zIndex: 99999999,
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className="centralize_icons"
              >
                {" "}
                <div className="flex gap-2 items-center mt-4">
                  <IoMdTime size={20} color="white" />
                  <div className="text_white">3:43 pm</div>
                </div>
              </Grid>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className="centralize_icons"
              >
                <div>
                  <IconButton aria-label="call" onClick={handleChatModal}>
                    <div className="dark-gray-500-bg flex justify-center items-center w-[50px] h-[50px] rounded-full responsive_icons">
                      <AiOutlineMessage
                        style={{ color: "white", fontSize: "16px" }}
                      />
                    </div>
                  </IconButton>
                  <IconButton aria-label="video">
                    <div className="dark-gray-500-bg flex justify-center items-center w-[50px] h-[50px] rounded-full responsive_icons">
                      <CiVideoOn
                        style={{ color: "white" }}
                        className="icon_size"
                      />
                    </div>
                  </IconButton>
                  <IconButton aria-label="mic">
                    <div className="dark-gray-500-bg flex justify-center items-center w-[50px] h-[50px] rounded-full responsive_icons">
                      <IoMicOutline
                        style={{ color: "white" }}
                        className="icon_size"
                      />
                    </div>
                  </IconButton>
                  <IconButton aria-label="call" onClick={handleClose}>
                    <div className="phone-icon-color flex justify-center items-center w-[100px] h-[50px] rounded-full responsive_icons">
                      <CallIcon
                        style={{ color: "white" }}
                        className="icon_size"
                      />
                    </div>
                  </IconButton>
                </div>
              </Grid>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className="centralize_icons"
              >
                <div className="flex gap-1 mt-4 items-center">
                  <TbNotes size={20} color="white" />
                  <Button
                    type="button"
                    className="cursor-pointer text-white"
                    onClick={handleSoapModal}
                  >
                    SOAP Notes
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Box>
        )}
      </div>
    </div>
  );
}
