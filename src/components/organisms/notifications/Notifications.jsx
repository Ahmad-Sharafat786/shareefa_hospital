import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaCalendar } from "react-icons/fa";
import { Divider } from "@mui/material";

export default function BasicPopover({ open, anchorEl, handleClose }) {
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}
        className="popover_borderRadius"
      >
        <div className="flex justify-between items-center w-100 px-[30px] pt-[15px]">
          <Typography
            color="#000000"
            variant="h6"
            fontSize={20}
            fontWeight="600"
          >
            Notifications
          </Typography>
          <div className="flex items-center gap-2">
            <Typography
              color="#FF6060"
              variant="body2"
              fontSize={14}
              fontWeight="500"
            >
              Mark all as read
            </Typography>
            <IoIosCheckmarkCircleOutline color="#FF6060" />
          </div>
        </div>
        <List>
          <ListItem disablePadding className="px-[10px]">
            <ListItemButton className="flex gap-3 items-center">
              <ListItemIcon>
                <div
                  className="h-[40px] w-[40px] flex justify-center items-center"
                  style={{ background: "#FFE5E5", borderRadius: "50px" }}
                >
                  <FaCalendar color="#FF6060" size={20} />
                </div>
              </ListItemIcon>
              <div className="flex flex-col w-full">
                <div className="notification_header">
                  <ListItemText
                    
                    primaryTypographyProps={{
                      className: "notification_list",
                    }}
                    primary="Appointment Reminder"
                  />
                  <Typography className="notification_header_text">
                    Today
                  </Typography>
                </div>
                <ListItemText
                  primary="Your appointment is rescheduled to Mon 16 2023 on 9:45 PM"
                  primaryTypographyProps={{
                    className: "notification_description",
                  }}
                />
              </div>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding className="px-[10px]">
            <ListItemButton className="flex gap-3 items-center">
              <ListItemIcon>
                <div
                  className="h-[40px] w-[40px] flex justify-center items-center"
                  style={{ background: "#FFE5E5", borderRadius: "50px" }}
                >
                  <FaCalendar color="#FF6060" size={20} />
                </div>
              </ListItemIcon>
              <div className="flex flex-col w-full">
                <div className="notification_header">
                  <ListItemText
                    
                    primaryTypographyProps={{
                      className: "notification_list",
                    }}
                    primary="Appointment Cancelled"
                  />
                  <Typography className="notification_header_text">
                  Yesterday
                  </Typography>
                </div>
                <ListItemText
                  primary="Appointment with Dr. Michael is cancelled"
                  primaryTypographyProps={{
                    className: "notification_description",
                  }}
                />
              </div>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding className="px-[10px]">
            <ListItemButton className="flex gap-3 items-center">
              <ListItemIcon>
                <div
                  className="h-[40px] w-[40px] flex justify-center items-center"
                  style={{ background: "#FFE5E5", borderRadius: "50px" }}
                >
                  <FaCalendar color="#FF6060" size={20} />
                </div>
              </ListItemIcon>
              <div className="flex flex-col w-full">
                <div className="notification_header">
                  <ListItemText
                    
                    primaryTypographyProps={{
                      className: "notification_list",
                    }}
                    primary="Appointment Rescheduled"
                  />
                  <Typography className="notification_header_text">
                  09/1/22
                  </Typography>
                </div>
                <ListItemText
                  primary="Your appointment is rescheduled to Mon 16 2023 on 9:45 PM"
                  primaryTypographyProps={{
                    className: "notification_description",
                  }}
                />
              </div>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding className="px-[10px]">
            <ListItemButton className="flex gap-3 items-center">
              <ListItemIcon>
                <div
                  className="h-[40px] w-[40px] flex justify-center items-center"
                  style={{ background: "#FFE5E5", borderRadius: "50px" }}
                >
                  <FaCalendar color="#FF6060" size={20} />
                </div>
              </ListItemIcon>
              <div className="flex flex-col w-full">
                <div className="notification_header">
                  <ListItemText
                    
                    primaryTypographyProps={{
                      className: "notification_list",
                    }}
                    primary="Appointment Reminder"
                  />
                  <Typography className="notification_header_text">
                  09/1/22
                  </Typography>
                </div>
                <ListItemText
                  primary="Eisa Malik sent you a new message"
                  primaryTypographyProps={{
                    className: "notification_description",
                  }}
                />
              </div>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding className="px-[10px] pb-[30px]">
            <ListItemButton className="flex gap-3 items-center">
              <ListItemIcon>
                <div
                  className="h-[40px] w-[40px] flex justify-center items-center"
                  style={{ background: "#FFE5E5", borderRadius: "50px" }}
                >
                  <FaCalendar color="#FF6060" size={20} />
                </div>
              </ListItemIcon>
              <div className="flex flex-col w-full">
                <div className="notification_header">
                  <ListItemText
                    
                    primaryTypographyProps={{
                      className: "notification_list",
                    }}
                    primary="Upcoming Appointment"
                  />
                  <Typography className="notification_header_text">
                  09/1/22
                  </Typography>
                </div>
                <ListItemText
                  primary="There is an upcoming appointment on monday"
                  primaryTypographyProps={{
                    className: "notification_description",
                  }}
                />
              </div>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
