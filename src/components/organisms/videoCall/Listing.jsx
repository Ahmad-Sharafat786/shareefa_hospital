import React, { useEffect, useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Grid,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Chip,
  Breadcrumbs,
} from "@mui/material";
import Box from "@mui/material/Box";
import moment from "moment";
import { extractDateTimeComponents } from "../../../redux/actions/utilities";
import { PaginationComponent } from "../../../assets/genericComponents/Pagination";
import CallIcon from "@mui/icons-material/Call";
import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatIcon from "@mui/icons-material/Chat";
import { TbNotes } from "react-icons/tb";
import { IMAGES } from "../../../assets/images";
import { IoMdTime } from "react-icons/io";
import Table from "../../atoms/Table";
import Video from "./Video";
import GenericDatePicker from "../../atoms/DatePicker";
import CustomButton from "../../atoms/Button";
import { Link } from "react-router-dom";
import GenericAvatar from "../../atoms/Avatar";
import { LoaderCenter } from "../../atoms/Loader";

const Listing = () => {
  const itemsPerPage = 5;
  const [toasterLoader, setToasterLoader] = useState(true);
  const [showIcons, setShowIcons] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [soapModal, setSoapModal] = useState(false);
  const [chatModal, setChatModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowIcons(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setToasterLoader(false);
    }, 1500);
  }, [currentPage]);
 

  const [anchorEl, setAnchorEl] = useState(null);

  const data = [
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              borderRadius="10px"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Completed",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Cancelled",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Pending",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Completed",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Cancelled",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Completed",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Pending",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Completed",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Cancelled",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Completed",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Cancelled",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
    {
      patient: (
        <Box gridColumn="span 12">
          <Box display="flex" alignItems="center">
            <GenericAvatar
              borderRadius="10px"
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className="generic-name-color"
                fontWeight="500"
              >
                Test
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="generic-name-profession-color"
              >
                miranda.clements@example.com
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
      doctor: "Dr. Smith",
      startDateTime: "2023-08-20T21:30:00",
      amount: 100,
      status: "Completed",

      phoneNumber: "(406) 555-0120",
      gender: "Female",
      dob: "1988-08-20",
      address: "123 Main St, Anytown, USA",
      doctorEmail: "dr.smith@example.com",
      doctorPhoneNumber: "(480) 555-0103",
      doctorGender: "Male",
    },
  ];

  const columns = [
    {
      header: "Patients",
      accessorKey: "patients",
      Cell: ({ cell }) => (
        <Box display="flex" alignItems="center">
          <Typography variant="body2" component="span" sx={{ mx: "10px" }}>
            {cell.row.original.patient}
          </Typography>
        </Box>
      ),
    },
    {
      header: "Doctors",
      accessorKey: "doctor",
    },
    {
      header: "Appt Date",
      accessorKey: "aptDate",
      accessorFn: (row) => {
        const { date } = extractDateTimeComponents(row?.startDateTime);
        return <div>{moment(date).format("MM/DD/YY")}</div>;
      },
    },
    {
      header: "Appt Time",
      accessorKey: "aptTime",
      accessorFn: (row) => {
        const { time } = extractDateTimeComponents(row?.startDateTime);
        return <div>{time}</div>;
      },
    },
    {
      header: "Appt Fee",
      accessorKey: "amount",
      accessorFn: (row) => {
        return <div>$ {row.amount}</div>;
      },
    },
    {
      header: "Status",
      accessorKey: "status",
      accessorFn: (row) => {
        let backgroundColor;
        switch (row.status) {
          case "Completed":
            backgroundColor = "#5DD669";
            break;
          case "Cancelled":
            backgroundColor = "#FF6060";
            break;
          case "Pending":
            backgroundColor = "#FBBE84";
            break;

          default:
            backgroundColor = "#000000";
        }

        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Chip
              label={row.status}
              sx={{
                backgroundColor: backgroundColor,
                marginRight: "5px",
                fontSize: "12px",
                color: "#FFFF",
              }}
            >
              <p>{row.status}</p>
            </Chip>
          </div>
        );
      },
    },
  ];

  const handleOpenUserMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    console.log(`Action: ${action}`);
    if (action === "Join") {
      
      setOpen(true);
      setShowIcons(true);
    }
    setAnchorEl(null);
  };
  const handlePageChange = (selectedPage) => {
    setToasterLoader(true);
    setCurrentPage(selectedPage);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalItems = data.length;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick=""
      className="fw-600 font-20"
    >
      Patient
    </Link>,

    <Typography key="3" color="text.primary">
      Appointments
    </Typography>,
  ];
  return (
    <>
      <div className="generic_boxShadow rounded-lg p-[30px]">
        <div className="flex justify-between items-center padding-top-10 gap-4 pb-4 flex-wrap custom-patient-picker">
          <div>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </div>
          <div className="flex gap-2 picker-button">
            <GenericDatePicker
              borderRadius="50px"
              height="40px"
              width="125px"
              position="relative"
              left="4rem"
            />
            <CustomButton
              sx={{
                borderRadius: 50,
              }}
              fontSize="12px"
              text="Add Patient"
              className="text_white rounded-full custom-patient-button"
              width="125px"
              height="40px"
              backgroundColor="var(--secondary-color)"
            />
          </div>
        </div>
        {toasterLoader ? (
          <LoaderCenter color="var(--primary-color)" />
        ) : (
          <>
            <Table
              columns={columns}
              data={paginatedData}
              enableRowSelection={false}
              enableColumnFilters={false}
              enableColumnActions={false}
              enablePagination={false}
              enableTopToolbar={false}
              renderRowActions={({ row }) => (
                <IconButton
                  disableRipple={true}
                  size="large"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  onClick={(event) => {
                    handleOpenUserMenu(event);
                  }}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                  color="inherit"
                >
                  <MoreVertIcon />
                </IconButton>
              )}
              muiTableBodyRowProps={({ row }) => ({
               
                sx: {
                  cursor: "pointer",
                },
              })}
              muiTableHeadCellProps={{
                sx: {
                  "& .MuiTableSortLabel-root .MuiTableSortLabel-icon": {
                    color: "#fff !important",
                  },
                },
              }}
            />

            <div className="flex justify-between flex-wrap custom_pagination gap-3">
              <Typography
                variant="span"
                component="span"
                color="#1C1D21"
                fontWeight="400"
              >
                {startItem} to {endItem}
                <span className="dark-gray-600"> out of </span>
                {totalItems} entries
              </Typography>
              <PaginationComponent
                totalNumber={Math.ceil(data.length / itemsPerPage)}
                page={currentPage - 1}
                pageChange={handlePageChange}
              />
            </div>
          </>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem>Reschedule</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Join")}>Join</MenuItem>
          <MenuItem>Cancel</MenuItem>
        </Menu>
      </div>

      <Video
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        soapModal={soapModal}
        setSoapModal={setSoapModal}
        setChatModal={setChatModal}
        chatModal={chatModal}
        showIcons={showIcons}
        setShowIcons={setShowIcons}
        setOpen={setOpen}
      />
    
    </>
  );
};

export default Listing;
