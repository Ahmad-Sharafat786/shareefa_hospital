import React, { useEffect, useState } from "react";

import {
  Box,
  Breadcrumbs,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import GenericDatePicker from "../../atoms/DatePicker";
import CustomSearch from "../../atoms/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LoaderCenter } from "../../atoms/Loader";
import Table from "../../atoms/Table";
import { PaginationComponent } from "../../../assets/genericComponents/Pagination";
import { IMAGES } from "../../../assets/images";
import GenericAvatar from "../../atoms/Avatar";

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
      Title: "Project Alpha",
      DueDate: "07/10/24",
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
      status: "Completed",
      startDateTime: "2024-07-10T10:00:00",
    },
    {
      Title: "Health Checkup",
      DueDate: "07/15/24",
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
      status: "Pending",
      startDateTime: "2024-07-15T11:00:00",
    },
    {
      Title: "Consultation",
      DueDate: "07/20/24",
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
      status: "More Information",
      startDateTime: "2024-07-20T09:00:00",
    },
    {
      Title: "Surgery Follow-up",
      DueDate: "07/25/24",
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
      status: "In-Progress",
      startDateTime: "2024-07-25T13:00:00",
    },
    {
      Title: "Routine Check-up",
      DueDate: "07/30/24",
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
      status: "Inactive",
      startDateTime: "2024-07-30T14:00:00",
    },
  ];
  

const columns = [
 
  {
    header: "Title",
    accessorKey: "Title",
  },
  {
    header: "Due Date",
    accessorKey: "DueDate",
  },
  {
    header: "Associated Patients/Projects",
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
    header: "Status",
    accessorKey: "status",
    accessorFn: (row) => {
        let backgroundColor;
        switch (row.status) {
          case "Completed":
            backgroundColor = "#5DD669"; // Green color for canceled
            break;

          case "Pending":
            backgroundColor = "#FBBE84"; // Yellow color for upcoming
            break;
          case "More Information":
            backgroundColor = "#4689EE"; // Yellow color for upcoming
            break;
          case "In-Progress":
            backgroundColor = "#8595AD"; // Yellow color for upcoming
            break;
            case "Inactive":
              backgroundColor = "#999999"; // Yellow color for upcoming
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


const Archive = () => {
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
          <MenuItem>Archive Task</MenuItem>
         
        </Menu>
    </div>
  );
};

export default Archive;
