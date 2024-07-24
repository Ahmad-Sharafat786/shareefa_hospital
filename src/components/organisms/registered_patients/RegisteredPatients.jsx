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
  Tabs,
  Tab,
} from "@mui/material";
import moment from "moment";
import { PaginationComponent } from "../../../assets/genericComponents/Pagination";
import GenericDatePicker from "../../atoms/DatePicker";
import CustomButton from "../../atoms/Button";
import Table from "../../atoms/Table";
import { Link } from "react-router-dom";
import { LoaderCenter } from "../../atoms/Loader";
import { IMAGES } from "../../../assets/images";
import { IoEyeOutline } from "react-icons/io5";
import CustomSearch from "../../atoms/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GenericAvatar from "../../atoms/Avatar";
import CustomTabs from "../../atoms/Tabs";

const Listing = () => {
  const itemsPerPage = 5;
  const [value, setValue] = React.useState(0);
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
      name: {
        name: "Miranda Clements",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      age: "22",
      contact: "+92 34567898",
      recentVisitDates: "22/02/2023",
      currentMedication: "Med A",
      upcomingAppt: [
        "22/02/2023",
        "25/02/2023",
        "28/02/2023",
        "02/03/2023",
        "05/03/2023",
      ],
      notes: "Follow Up Needed",
    },
    {
      name: {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: IMAGES.BOY,
      },
      age: "30",
      contact: "+92 98765432",
      recentVisitDates: "20/02/2023",
      currentMedication: "Med B",
      upcomingAppt: ["23/02/2023", "26/02/2023", "01/03/2023"],
      notes: "Monitor Condition",
    },
  ];

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
      Cell: ({ cell }) => (
        <Box display="flex" alignItems="center">
          <GenericAvatar
            alt={cell.row.original.name.name}
            src={cell.row.original.name.avatar}
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
              {cell.row.original.name.name}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="generic-name-profession-color"
            >
              {cell.row.original.name.email}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      header: "Age",
      accessorKey: "age",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.age}
        </Typography>
      ),
    },
    {
      header: "Contact",
      accessorKey: "contact",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.contact}
        </Typography>
      ),
    },
    {
      header: "Recent Visit Dates",
      accessorKey: "recentVisitDates",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.recentVisitDates}
        </Typography>
      ),
    },
    {
      header: "Current Medication",
      accessorKey: "currentMedication",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.currentMedication}
        </Typography>
      ),
    },
    {
      header: "Upcoming Appt",
      accessorKey: "upcomingAppt",
      Cell: ({ cell }) => {
        const days = cell.row.original.upcomingAppt;
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
      header: "Notes",
      accessorKey: "notes",
      Cell: ({ cell }) => (
        <Typography variant="body2" component="span" className="dark-gray-400">
          {cell.row.original.notes}
        </Typography>
      ),
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      Patients
    </Link>,

    <Typography key="3" color="text.primary">
      Patients Summary
    </Typography>,
  ];
  function handlePatientModal() {
    setOpen(true);
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const tabs = [
    {
      label: "Registered Patients",
      content: toasterLoader ? (
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
      ),
    },
    { label: "Pending Patients", content: "Content for Item Two" },
  ];

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
        <div>
          <CustomTabs tabs={tabs} value={value} handleChange={handleChange} />
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={() => handleSlotModal()}>
          <IoEyeOutline className="mx-2" />
          View Details
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
              Appointment Days
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
    </>
  );
};

export default Listing;
