/* eslint-disable */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { SignOut } from "./SignOut";
import { IMAGES } from "../../assets/images";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { BsChevronDown } from "react-icons/bs";
import { createImageFromInitials } from "../../assets/genericAction";
import { ToastContainer } from "react-toastify";
import { Badge, Box, Divider, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AiOutlineMessage } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { PATH } from "../../config";
import BasicPopover from "../organisms/notifications/Notifications";

export function Header() {
  const location = useLocation();
  const dummyUser = JSON.parse(localStorage.getItem("dummy_user"));

  document.body.style.backgroundColor = "#f5f5f5";
  const shapeStyles = { bgcolor: "#F2F2F2", width: 40, height: 40 };
  const shapeCircleStyles = { borderRadius: "50%" };
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const circle = (
    <Box
      component="span"
      sx={{ ...shapeStyles, ...shapeCircleStyles }}
      className="flex justify-center items-center"
    >
      <NotificationsIcon
        fontSize="25"
        className="dark-gray-500 cursor-pointer"
        onClick={handleOpen}
      />
    </Box>
  );

  const Messagecircle = (
    <Box
      component="span"
      sx={{ ...shapeStyles, ...shapeCircleStyles }}
      className="flex justify-center items-center"
    >
      <AiOutlineMessage fontSize="25" className="dark-gray-500" />
    </Box>
  );

  return (
    <>
      <ToastContainer />
      <div className="header">
        <div className="PageName">
          <a href="javascript:void(0)" id="toggle_btn">
            <FaBars className="toggleset" />
          </a>
        </div>
        {/* /Logo */}
        {/* Mobile Menu Toggle */}
        <a href="javascript:void(0)" className="mobile_btn" id="mobile_btn">
          <FaBars />
        </a>
        {/* /Mobile Menu Toggle */}

        <ul className=" user-menu flex justify-between items-center">
          <Typography
            className="listing-header"
            variant="h6"
            fontSize={20}
            paddingLeft={4}
          >
            {location.pathname === PATH.PATIENTS && (
              <h4 className="generic-header-label generic-name-color">
                Patient List
              </h4>
            )}
            {location.pathname === PATH.APPOINTMENTS && (
              <h4 className="generic-header-label generic-name-color">
                Appointments
              </h4>
            )}
            {location.pathname === PATH.AUDIO_VIDEO && (
              <h4 className="generic-header-label generic-name-color">
                Appointments
              </h4>
            )}
            {location.pathname === PATH.PRESCRIPTION && (
              <h4 className="generic-header-label generic-name-color">
                Prescription
              </h4>
            )}
            {location.pathname === PATH.INVOICES && (
              <h4 className="generic-header-label generic-name-color">
                Invoices
              </h4>
            )}
            {location.pathname === PATH.PROFILE_SETUP && (
              <h4 className="generic-header-label generic-name-color">
                Profile
              </h4>
            )}
            {location.pathname === PATH.PROVIDER && (
              <h4 className="generic-header-label generic-name-color">
                Provider
              </h4>
            )}
            {location.pathname === PATH.ARCHIVE_TASKS && (
              <h4 className="generic-header-label generic-name-color">
                My Tasks
              </h4>
            )}
          </Typography>
          <li className="nav-item dropdown has-arrow flex gap-2 items-center">
            <Dropdown className="user-dropdown  h-100">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="user_dropdown"
              >
                <span className="user-img mt-0">
                  {dummyUser ? (
                    <div className="flex gap-3 items-center responsive-gap">
                      <img
                        className="rounded-circle header_avatar"
                        src={IMAGES.PROFILELOGO}
                        width="50"
                        alt={dummyUser?.userType}
                      />
                      <div>
                        <Typography
                          variant="h6"
                          fontSize={14}
                          // color="#595959"
                          className="dark-gray-500 responsive-font"
                        >
                          Xeven User
                        </Typography>
                        <Typography variant="p" color="#8595AD" fontSize={14}>
                          <div className="flex gap-2 items-center responsive-font">
                            Profile Settings
                            <IoIosArrowDown />
                          </div>
                        </Typography>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={createImageFromInitials(
                        31,
                        dummyUser?.userType,
                        "#525E34"
                      )}
                      alt="image"
                      className="rounded-circle"
                    />
                  )}
                  <BsChevronDown className="text-dark ml-2" />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="profile-dropmenu">
                <Dropdown.Item className="d-block px-0">
                  <Link to="/profile-view">Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item className="d-block px-0">
                  <SignOut />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Divider
             className="responsive_divider"
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                borderWidth: "2px",
              }}
            />
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent=" "
              variant="dot"
              sx={{
                "& .MuiBadge-dot": {
                  backgroundColor: "var(--primary-color)",
                },
              }}
            >
              {circle}
            </Badge>
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent=" "
              variant="dot"
              sx={{
                "& .MuiBadge-dot": {
                  backgroundColor: "var(--primary-color)",
                },
              }}
            >
              {Messagecircle}
            </Badge>
          </li>
        </ul>

        <Tooltip id="my-tooltip" />
      </div>
      <BasicPopover open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
}
