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
import { AiOutlineStop } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import CustomSearch from "../../atoms/Search";
import PatientInquiryModal from "./PatientInquiryModal";

const Listing = () => {
  const itemsPerPage = 5;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toasterLoader, setToasterLoader] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      patient: {
        name: "Lara Acosta",
        email: "lara.acosta@example.com",
        avatar: IMAGES.GIRL,
      },
      age: "22",
      phoneNumber: "+92(0)123-456-789",
      email: "lara.acosta@example.com",
      status: "Cancelled",
    },
    {
      patient: {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: IMAGES.BOY,
      },
      age: "30",
      phoneNumber: "+92(0)987-654-321",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      patient: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        avatar: IMAGES.GIRL,
      },
      age: "28",
      phoneNumber: "+92(0)555-666-777",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      patient: {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        avatar: IMAGES.GIRL,
      },
      age: "35",
      phoneNumber: "+92(0)222-333-444",
      email: "michael.johnson@example.com",
      status: "Cancelled",
    },
    {
      patient: {
        name: "Emily Davis",
        email: "emily.davis@example.com",
        avatar: IMAGES.BOY,
      },
      age: "40",
      phoneNumber: "+92(0)111-222-333",
      email: "emily.davis@example.com",
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
            size={40}
            borderRadius="10px"
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
      header: "Age",
      accessorKey: "age",
    },
    {
      header: "Phone Number",
      accessorKey: "phoneNumber",
    },
    {
      header: "Email Address",
      accessorKey: "email",
    },
    {
      header: "Status",
      accessorKey: "status",
      accessorFn: (row) => {
        let backgroundColor;
        switch (row.status) {
          case "Active":
            backgroundColor = "#5DD669"; // Green color for Active
            break;

          case "Inactive":
            backgroundColor = "#FBBE84"; // Yellow color for Inactive
            break;

          case "Cancelled":
            backgroundColor = "#FF6F61"; // Red color for Cancelled
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

  function handleRestriction(){
    setOpen(true)
  }
  return (
    <>
      <div className="mb-0 generic_boxShadow p-[30px] rounded-lg">
        <div className="flex justify-between items-center padding-top-10 gap-4 pb-4 flex-wrap custom-patient-picker">
          <div>
            <Typography
              variant="body1"
              component="h6"
              fontSize={20}
              className="generic-name-color"
              fontWeight="600"
            >
              Patients Enquiry Restriction
            </Typography>
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
            <div className="flex justify-between flex-wrap custom_pagination gap-3 pagination">
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
            View Details
          </MenuItem>
          <MenuItem>
            <FaRegEdit className="mx-2" />
            Edit
          </MenuItem>
          <MenuItem onClick={handleRestriction}>
            <AiOutlineStop className="mx-2" />
            Add Restriction
          </MenuItem>
        </Menu>
      </div>
      <PatientInquiryModal open={open} handleClose={handleClose} handleOpen={handleOpen}/>
    </>
  );
};
export default Listing;
