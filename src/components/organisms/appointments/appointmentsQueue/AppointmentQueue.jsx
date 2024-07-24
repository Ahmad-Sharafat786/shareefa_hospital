import React, { useEffect, useState } from "react";

import {
  Box,
  Breadcrumbs,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import GenericDatePicker from "../../../atoms/DatePicker";
import CustomSearch from "../../../atoms/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { extractDateTimeComponents } from "../../../../redux/actions/utilities";
import moment from "moment";
import { LoaderCenter } from "../../../atoms/Loader";
import Table from "../../../atoms/Table";
import { PaginationComponent } from "../../../../assets/genericComponents/Pagination";
import GenericAvatar from "../../../atoms/Avatar";
import { IMAGES } from "../../../../assets/images";

const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    color="inherit"
    href="/"
    onClick=""
    className="fw-600 font-20"
  >
    Provider
  </Link>,

  <Typography key="3" color="text.primary">
    Appointment Queue
  </Typography>,
];
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
             Surgery
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
    email: "john.doe@example.com",
    PhoneNumber: "123-456-7890",
    aptDate: "01/01/23",
    aptTime: "10:00 AM",
    reason: "Consultation",
    apptType: "In-Person",
    startDateTime: "2023-01-01T10:00:00",
  },
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
             Surgery
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
    email: "jane.smith@example.com",
    PhoneNumber: "987-654-3210",
    aptDate: "01/02/23",
    aptTime: "11:00 AM",
    reason: "Follow-up",
    apptType: "Virtual",
    startDateTime: "2023-01-02T11:00:00",
  },
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
             Surgery
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
    email: "michael.johnson@example.com",
    PhoneNumber: "555-123-4567",
    aptDate: "01/03/23",
    aptTime: "09:00 AM",
    reason: "Routine Check-up",
    apptType: "In-Person",
    startDateTime: "2023-01-03T09:00:00",
  },
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
             Surgery
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
    email: "emily.davis@example.com",
    PhoneNumber: "444-555-6666",
    aptDate: "01/04/23",
    aptTime: "01:00 PM",
    reason: "Consultation",
    apptType: "Virtual",
    startDateTime: "2023-01-04T13:00:00",
  },
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
             Surgery
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
    email: "william.brown@example.com",
    PhoneNumber: "222-333-4444",
    aptDate: "01/05/23",
    aptTime: "02:00 PM",
    reason: "Follow-up",
    apptType: "In-Person",
    startDateTime: "2023-01-05T14:00:00",
  },
];

const columns = [
  {
    header: "Patient Name",
    accessorKey: "PatientName",
    Cell: ({ cell }) => (
      <Box display="flex" alignItems="center">
        <Typography variant="body2" component="span" sx={{ mx: "10px" }}>
          {cell.row.original.patient}
        </Typography>
      </Box>
    ),
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone Number",
    accessorKey: "PhoneNumber",
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
    header: "Reason",
    accessorKey: "reason",
    accessorFn: (row) => {
      return <div>{row.reason}</div>;
    },
  },
  {
    header: "Appt Type",
    accessorKey: "apptType",
    accessorFn: (row) => {
      return <div>{row.apptType}</div>;
    },
  },
];


const AppointmentQueue = () => {
  const itemsPerPage = 5;
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [toasterLoader, setToasterLoader] = useState(true);
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };
  const handlePageChange = (selectedPage) => {
    setToasterLoader(true);
    setCurrentPage(selectedPage);
  };
  const handleOpenUserMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
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
  return (
    <div className="mb-0 generic_boxShadow p-[30px] rounded-lg">
      <div className="flex justify-between items-center padding-top-10 gap-4 pb-4 flex-wrap custom-patient-picker">
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
              left="4rem"
            />
          </div>

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
  );
};

export default AppointmentQueue;
