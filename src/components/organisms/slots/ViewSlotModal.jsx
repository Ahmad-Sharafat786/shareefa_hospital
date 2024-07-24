import React from "react";
import CustomModal from "../../atoms/Modal";
import {
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ViewSlotModal = ({ open, handleClose }) => {
    const handleClosed= () =>{
        handleClose(true)
    }
  return (
    <CustomModal
    
      open={open}
      onClose={handleClose}
      backgroundColor="transparent"
      modalStyle={{
        transform: "translate(45%, -50%)",
        padding: '0px',
        maxHeight: '100vh', 
        overflowY: 'scroll',
        width: '500px',
        zIndex: 1300
       
        
      }}
    >
      <div className="flex justify-between items-center px-[30px] pt-3">
        <Typography
          component="h6"
          className="#000000"
          fontWeight="600"
          fontSize={20}
        
        >
          My Slots
        </Typography>
        <div>
          <IoMdClose size={25} onClick={handleClosed} className="cursor-pointer"/>
        </div>
      </div>

      <Divider className="border-1 mt-3" />
      <Grid container spacing={2} className="padding-top-16 px-[30px]">
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography color="#000000" variant="h6" component="div" marginTop={2}>
            <div className="text-[#979797] font-12 fw-600">Start Date</div>
            <div className="font-16 text-[#4D4D4D] fw-400">22/02/2023</div>
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography color="#000000" variant="h6" component="div" marginTop={2}>
            <div className="text-[#979797] font-12 fw-600">End Date</div>
            <div className="font-16 text-[#4D4D4D] fw-400">23/02/2023</div>
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography color="#000000" variant="h6" component="div" marginTop={2}>
            <div className="text-[#979797] font-12 fw-600">Start Time</div>
            <div className="font-16 text-[#4D4D4D] fw-400">09:00 AM</div>
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography color="#000000" variant="h6" component="div" marginTop={2}>
            <div className="text-[#979797] font-12 fw-600">End Time</div>
            <div className="font-16 text-[#4D4D4D] fw-400">02:00 PM</div>
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography color="#000000" variant="h6" component="div" marginTop={2}>
            <div className="text-[#979797] font-12 fw-600">Slot Time</div>
            <div className="font-16 text-[#4D4D4D] fw-400">15 Minutes</div>
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography color="#000000" variant="h6" component="div" marginTop={2}>
            <div className="text-[#979797] font-12 fw-600">
              Appointment Type
            </div>
            <div className="font-16 text-[#4D4D4D] fw-400">Follow Up</div>
          </Typography>
        </Grid>
      </Grid>
      <div className="padding-top-16 px-[30px]">
        <Typography
          color="#979797"
          fontSize={12}
          fontWeight={600}
          variant="h6"
          component="div"
        >
          Working Days
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ListItem className="flex items-center mt-3">
              <ListItemIcon>
                <FiberManualRecordIcon style={{ fontSize: 8 }} />
              </ListItemIcon>
              <Typography
                variant="body2"
                component="span"
                color="#4D4D4D"
                fontSize={16}
                fontWeight={400}
              >
                Monday
              </Typography>
            </ListItem>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ListItem className="flex items-center mt-3">
              <ListItemIcon>
                <FiberManualRecordIcon style={{ fontSize: 8 }} />
              </ListItemIcon>
              <Typography
                variant="body2"
                component="span"
                color="#4D4D4D"
                fontSize={16}
                fontWeight={400}
              >
                Tuesday
              </Typography>
            </ListItem>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ListItem className="flex items-center">
              <ListItemIcon>
                <FiberManualRecordIcon style={{ fontSize: 8 }} />
              </ListItemIcon>
              <Typography
                variant="body2"
                component="span"
                color="#4D4D4D"
                fontSize={16}
                fontWeight={400}
              >
                Wednesday
              </Typography>
            </ListItem>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ListItem className="flex items-center">
              <ListItemIcon>
                <FiberManualRecordIcon style={{ fontSize: 8 }} />
              </ListItemIcon>
              <Typography
                variant="body2"
                component="span"
                color="#4D4D4D"
                fontSize={16}
                fontWeight={400}
              >
                Thursday
              </Typography>
            </ListItem>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ListItem className="flex items-center">
              <ListItemIcon>
                <FiberManualRecordIcon style={{ fontSize: 8 }} />
              </ListItemIcon>
              <Typography
                variant="body2"
                component="span"
                color="#4D4D4D"
                fontSize={16}
                fontWeight={400}
              >
                Friday
              </Typography>
            </ListItem>
          </Grid>
        </Grid>
      </div>
      <div className="padding-top-16 px-[30px] pb-[30px]">
        <Typography
          color="#979797"
          fontSize={12}
          fontWeight={600}
          variant="h6"
          component="div"
        >
          Notes
        </Typography>
        <Typography
          variant="body2"
          component="h6"
          color="#4D4D4D"
          fontWeight="400"
          fontSize="16px"
          marginTop={1}
        >
          Lorem ipsum dolor sit amet consectetur. Amet sapien ornare gravida
          blandit arcu molestie lectus. Viverra lobortis phasellus euismod quis
          rhoncus varius mauris. Cursus ornare libero in elementum sit ridiculus
          quisque convallis. Pellentesque odio aliquet viverra nunc erat nunc
          vel.
        </Typography>
      </div>
    </CustomModal>
  );
};

export default ViewSlotModal;
