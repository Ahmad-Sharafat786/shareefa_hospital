import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Breadcrumbs,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Popover,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import moment from "moment";
import { PaginationComponent } from "../../../assets/genericComponents/Pagination";
import GenericDatePicker from "../../atoms/DatePicker";
import CustomButton from "../../atoms/Button";
import Table from "../../atoms/Table";
import { Link } from "react-router-dom";
import { LoaderCenter } from "../../atoms/Loader";
import { IoEyeOutline } from "react-icons/io5";
import { LuUserCheck2 } from "react-icons/lu";
import { RiUserForbidLine } from "react-icons/ri";
import CustomSearch from "../../atoms/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ViewSlotModal from "./ViewSlotModal";

const Listing = () => {
  const itemsPerPage = 5;
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState("");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toasterLoader, setToasterLoader] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentPage, setCurrentPage] = useState(1);

  let closePopoverTimeout;

  const data = [
    {
      startDate: "2023-06-01",
      endDate: "2023-06-30",
      startTime: "08:00",
      endTime: "17:00",
      slotTime: "30 mins",
      workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      appointmentTypes: "General Checkup, Consultation",
      notes: "None",
    },
    {
      startDate: "2023-07-01",
      endDate: "2023-07-31",
      startTime: "09:00",
      endTime: "18:00",
      slotTime: "45 mins",
      workingDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      appointmentTypes: "Dental, Orthopedic",
      notes: "Bring previous medical records",
    },
    {
      startDate: "2023-08-01",
      endDate: "2023-08-31",
      startTime: "10:00",
      endTime: "19:00",
      slotTime: "1 hour",
      workingDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      appointmentTypes: "Pediatric, Cardiology",
      notes: "Fasting required for blood test",
    },
    {
      startDate: "2023-09-01",
      endDate: "2023-09-30",
      startTime: "07:00",
      endTime: "16:00",
      slotTime: "15 mins",
      workingDays: ["Monday", "Wednesday", "Friday"],
      appointmentTypes: "Neurology, Psychiatry",
      notes: "Initial consultation free",
    },
  ];

  const columns = [
    {
      header: "Start Date",
      accessorKey: "startDate",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {moment(cell.row.original.startDate).format("MM/DD/YYYY")}
        </Typography>
      ),
    },
    {
      header: "End Date",
      accessorKey: "endDate",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {moment(cell.row.original.endDate).format("MM/DD/YYYY")}
        </Typography>
      ),
    },
    {
      header: "Start Time",
      accessorKey: "startTime",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.startTime}
        </Typography>
      ),
    },
    {
      header: "End Time",
      accessorKey: "endTime",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.endTime}
        </Typography>
      ),
    },
    {
      header: "Slot Time",
      accessorKey: "slotTime",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.slotTime}
        </Typography>
      ),
    },
    {
      header: "Working Days",
      accessorKey: "workingDays",
      Cell: ({ cell }) => {
        const days = cell.row.original.workingDays;
        const truncatedDays =
          days.length > 2 ? (
            <>
              {days.slice(0, 2).join(", ")},
              <span style={{ color: "#F99639" }}>+{days.length - 2} more</span>
            </>
          ) : (
            days.join(", ")
          );

        return (
          <Box
            onMouseEnter={(event) => {
              clearTimeout(closePopoverTimeout);
              setPopoverAnchorEl(event.currentTarget);
              setPopoverContent(days.join(", "));
            }}
            onMouseLeave={() => {
              closePopoverTimeout = setTimeout(
                () => setPopoverAnchorEl(null),
                200
              );
            }}
          >
            <Typography
              variant="body2"
              component="span"
              className="dark-gray-400 cursor-pointer"
            >
              {truncatedDays}
            </Typography>
          </Box>
        );
      },
    },
    {
      header: "Appointment Types",
      accessorKey: "appointmentTypes",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.appointmentTypes}
        </Typography>
      ),
    },
    {
      header: "Notes",
      accessorKey: "notes",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.notes}
        </Typography>
      ),
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
  function handleSlotModal() {
    setOpen(true);
  }
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
      Patient
    </Link>,

    <Typography key="3" color="text.primary">
      Patient List
    </Typography>,
  ];
  function handlePatientModal() {
    setOpen(true);
  }
  return (
    <>
      <div className="mb-0 generic_boxShadow p-[30px]">
        <div className="flex justify-between items-center padding-top-10 gap-4 pb-4 flex-wrap custom-patient-picker">
          <div>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </div>
          <div className="flex gap-2 picker-button relative">
            <Link to="/slots/create_new">
              <CustomButton
                sx={{
                  borderRadius: 50,
                }}
                fontSize="12px"
                text="Create New Slot"
                className="text_white rounded-full custom-patient-button"
                width="150px"
                padding="4px"
                height="40px"
                backgroundColor="var(--secondary-color)"
                showAddIcon={true}
                onClick={() => handlePatientModal()}
                position="relative"
                left="55px"
              />
            </Link>

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
              placeholder="Search"
              defaultValue="test"
              bgColor="#fafafa"
              onChange=""
              width="200px"
              height="40px"
              enableIcon={true}
              borderRadius="50px"
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
          <MenuItem onClick={() => handleSlotModal()}>
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
        <Popover
          open={Boolean(popoverAnchorEl)}
          anchorEl={popoverAnchorEl}
          onClose={() => setPopoverAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onMouseEnter={() => clearTimeout(closePopoverTimeout)}
          onMouseLeave={() => setPopoverAnchorEl(null)}
        >
          <Card>
            <CardContent>
              <Typography
                fontSize={16}
                fontWeight={500}
                variant="h6"
                component="div"
                gutterBottom
              >
                Working Days
              </Typography>
              <List>
                {popoverContent.split(",").map((day, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <FiberManualRecordIcon style={{ fontSize: 8 }} />
                      </ListItemIcon>
                      <ListItemText primary={day.trim()} />
                    </ListItem>
                    {index < popoverContent.split(",").length - 1 && (
                      <Divider
                        className="text-[#E9E9E9]"
                        style={{ border: "1px solid #E9E9E9" }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Popover>
      </div>
      <ViewSlotModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
};
export default Listing;
