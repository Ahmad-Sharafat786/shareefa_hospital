import React, { useEffect, useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Chip,
  Breadcrumbs,
  Divider,
} from "@mui/material";
import Box from "@mui/material/Box";
import moment from "moment";
import { extractDateTimeComponents } from "../../../redux/actions/utilities";
import { PaginationComponent } from "../../../assets/genericComponents/Pagination";
import CustomSearch from "../../atoms/Search";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets/images";
import Table from "../../atoms/Table";
import GenericDatePicker from "../../atoms/DatePicker";
import { FaBars } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import GenericAvatar from "../../atoms/Avatar";
import { LoaderCenter } from "../../atoms/Loader";

const Lisiting = () => {
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toasterLoader, setToasterLoader] = useState(true);
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
              sx={{ width: 40, height: 40 }}
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
            <Avatar
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 40, height: 40 }}
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
            <Avatar
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 40, height: 40 }}
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
            <Avatar
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 40, height: 40 }}
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
            <Avatar
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 40, height: 40 }}
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
            <Avatar
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 40, height: 40 }}
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
            <Avatar
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 40, height: 40 }}
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
            <Avatar
              alt="Remy Sharp"
              src={IMAGES.GIRL}
              variant="rounded"
              sx={{ width: 40, height: 40 }}
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

  const handlePageChange = (selectedPage) => {
    setToasterLoader(true);
    setCurrentPage(selectedPage);
  };
  const handleOpenUserMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setToasterLoader(false);
    }, 1500); // Set the loader to false after 2 seconds
  }, [currentPage]);
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
      <div>
        <div className="flex justify-between items-center  gap-4 pb-4 padding-top-10 flex-wrap custom-patient-picker">
          <div>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </div>
          <div className="flex gap-2 picker-button relative">
            <div>
              <GenericDatePicker
                borderRadius="50px"
                width="125px"
                height="40px"
                position="relative"
                left="60px"
              />
            </div>

            <CustomSearch
              placeholder="Search"
              defaultValue="test"
              onChange=""
              borderRadius="50px"
              enableIcon={true}
              padding="1.5px"
              className="mr-5"
            />

            <Box
              sx={{
                backgroundColor: "#FFE5E5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "transparent",
                borderColor: "divider",
                borderRadius: 2,
                width: "100px",
                height: "40px",
                "& svg": {
                  m: 1,
                },
              }}
            >
              <FaBars className="text-primary" size={20} />
              <Divider
                orientation="vertical"
                color="#FFCCCC"
                sx={{
                  borderWidth: "1.5px",
                }}
                variant="middle"
                flexItem
              />
              <IoCalendarOutline className="text-primary" size={20} />
            </Box>
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
          Paper={{
            sx: {
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "#FF6060",
              },
            },
          }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem>Reschedule</MenuItem>
          <MenuItem>
            <Link to="/appointments/calendar">Cancel</Link>
          </MenuItem>
          <MenuItem>Join</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Lisiting;
