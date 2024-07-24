import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Popover,
  Typography,
  ListItemIcon,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GenericDatePicker from "../../../atoms/DatePicker";
import CustomButton from "../../../atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import CustomSearch from "../../../atoms/Search";
import { LoaderCenter } from "../../../atoms/Loader";
import Table from "../../../atoms/Table";
import { IoEyeOutline } from "react-icons/io5";
import { LuUserCheck2 } from "react-icons/lu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { RiUserForbidLine } from "react-icons/ri";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { PaginationComponent } from "../../../../assets/genericComponents/Pagination";
import { FaEye, FaRegEdit } from "react-icons/fa";

const RoleListing = () => {
  const itemsPerPage = 5;
  let closePopoverTimeout;
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [toasterLoader, setToasterLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState("");
  const navigate = useNavigate();
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick=""
      className="fw-600 font-20"
    >
      Admin
    </Link>,

    <Typography key="3" color="text.primary">
      List of All Roles
    </Typography>,
  ];
  const data = [
    {
      RoleName: "Admin",
      Department: "IT",
      Permissions: [
        "Slot Creation",
        "Add Soap",
        "Notes",
        "Role Creation",
        "Update Soap Notes",
      ],
      Controls: "Edit, Delete",
    },
    {
      RoleName: "User",
      Department: "HR",
      Permissions: "Limited Access",
      Controls: "View",
    },
    // Add more data as needed
  ];

  const columns = [
    {
      header: "Role Name",
      accessorKey: "RoleName",
    },
    {
      header: "Department",
      accessorKey: "Department",
    },
    {
      header: "Permissions",
      accessorKey: "Permissions",
      Cell: ({ cell }) => {
        const permissions = Array.isArray(cell.row.original.Permissions)
          ? cell.row.original.Permissions
          : [cell.row.original.Permissions];
        const truncatedPermission =
          permissions.length > 2 ? (
            <>
              {permissions.slice(0, 2).join(", ")},
              <span style={{ color: "#F99639" }}>
                +{permissions.length - 2} more
              </span>
            </>
          ) : (
            permissions.join(", ")
          );

        return (
          <Box
            onMouseEnter={(event) => {
              clearTimeout(closePopoverTimeout);
              setPopoverAnchorEl(event.currentTarget);
              setPopoverContent(permissions.join(", "));
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
              {truncatedPermission}
            </Typography>
          </Box>
        );
      },
    },
    {
      header: "Controls",
      accessorKey: "Controls",
    },
  ];

  const handleOpenUserMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
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
  const handlePageChange = (selectedPage) => {
    setToasterLoader(true);
    setCurrentPage(selectedPage);
  };
  const handleRole = () => {
    navigate("/add-role");
  };
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
              width="125px"
              borderRadius="50px"
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
          <CustomButton
            borderRadius="50px"
            fontSize="12px"
            text="Create Role"
            className="text_white rounded-full custom-patient-button"
            width="125px"
            height="40px"
            backgroundColor="var(--secondary-color)"
            onClick={handleRole}
          />
        </div>
      </div>
      <div>
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
            <FaRegEdit className="mx-2" />
            Edit
          </MenuItem>
          <Link to="/role-view">
            <MenuItem>
              <FaEye className="mx-2" />
              View
            </MenuItem>
          </Link>
          <div>
            <Link to="/apply-permission">
              <MenuItem>
                <RiUserForbidLine className="mx-2" />
                Assign Permissions
              </MenuItem>
            </Link>
          </div>
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
                Permissions
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
    </div>
  );
};

export default RoleListing;
