import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Breadcrumbs,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import moment from "moment";
import { PaginationComponent } from "../../../assets/genericComponents/Pagination";
import { IMAGES } from "../../../assets/images";
import GenericDatePicker from "../../atoms/DatePicker";
import CustomButton from "../../atoms/Button";
import Table from "../../atoms/Table";
import { Link } from "react-router-dom";
import GenericAvatar from "../../atoms/Avatar";
import { LoaderCenter } from "../../atoms/Loader";
import { IoEyeOutline } from "react-icons/io5";
import { LuUserCheck2 } from "react-icons/lu";
import { RiUserForbidLine } from "react-icons/ri";

const Listing = () => {
  const itemsPerPage = 5;
 
  const [anchorEl, setAnchorEl] = useState(null);
  const [toasterLoader, setToasterLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Active",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Inactive",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Inactive",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Active",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Active",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Inactive",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Inactive",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Active",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Inactive",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Active",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Active",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Active",
    },
    {
      patient: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      doctor: "Dumm@gmail.com",
      phoneNumber: "+92(0)123-456-789",
      amount: 100,
      lastAppointment: "26/5/12",
      dob: "1988-08-20",
      gender: "Male",
      status: "Active",
    },
  ];

  const columns = [
    {
      header: "Patients",
      accessorKey: "patient",
      Cell: ({ cell }) => (
        <Box display="flex" alignItems="center">
          <GenericAvatar
            alt={cell.row.original.patient.name}
            src={cell.row.original.patient.avatar}
            borderRadius="10px"
            size={40}
          />
          <Box mx={2}>
            <Typography
              variant="body1"
              component="h6"
              className="generic-name-color"
              fontWeight="500"
            >
              {cell.row.original.patient.name}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="generic-name-profession-color"
            >
              {cell.row.original.patient.email}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      header: "Doctors",
      accessorKey: "doctor",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.doctor}
        </Typography>
      ),
    },
    {
      header: "Phone Number",
      accessorKey: "phoneNumber",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.doctor}
        </Typography>
      ),
    },
    {
      header: "Last Appointment",
      accessorKey: "lastAppointment",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.doctor}
        </Typography>
      ),
    },
    {
      header: "DOB",
      accessorKey: "dob",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {moment(cell.row.original.dob).format("MM/DD/YYYY")}
        </Typography>
      ),
    },
    {
      header: "Gender",
      accessorKey: "gender",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.doctor}
        </Typography>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      accessorFn: (row) => {
        let backgroundColor;
        switch (row.status) {
          case "Active":
            backgroundColor = "#5DD669"; // Green color for canceled
            break;

          case "Inactive":
            backgroundColor = "#FF6060"; // Yellow color for upcoming
            break;

          default:
            backgroundColor = "#000000"; // Black color for other statuses
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

  useEffect(() => {
    setTimeout(() => {
      setToasterLoader(false);
    }, 1500);
  }, [currentPage]);
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
      List of my Providers
    </Typography>,
  ];
  return (
    <>
      <div className="mb-0 generic_boxShadow rounded-lg p-[30px]">
        <div className="flex justify-between items-center padding-top-10 gap-4 pb-4 flex-wrap custom-patient-picker">
          <div>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </div>
          <div className="flex gap-2 picker-button">
            <GenericDatePicker
              borderRadius="50px"
              width="125px"
              height="40px"
              position="relative"
              left="4rem"
            />
            <CustomButton
              sx={{
                borderRadius: 50,
              }}
              fontSize="12px"
              text="Add Provider"
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
              enableColumnFilters={false}
              enableColumnActions={false}
              enablePagination={false}
              enableTopToolbar={false}
              columns={columns}
              data={paginatedData}
              enableRowSelection={false}
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
                  backgroundColor: "#F9F7F7",
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
                className="px-2"
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
          <MenuItem>
            <IoEyeOutline className="mx-2" />
            View
          </MenuItem>
          <MenuItem>
            <LuUserCheck2 className="mx-2" />
            Active
          </MenuItem>
          <MenuItem>
            <RiUserForbidLine className="mx-2" />
            Inactive
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};
export default Listing;
