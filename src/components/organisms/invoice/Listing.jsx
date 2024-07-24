import React, { useEffect, useState } from "react";
import { PaginationComponent } from "../../../assets/genericComponents/Pagination";
import {
  Box,
  Chip,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import CustomSearch from "../../atoms/Search";
import GenericAvatar from "../../atoms/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaRegEdit } from "react-icons/fa";
import { IMAGES } from "../../../assets/images";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import Table from "../../atoms/Table";
import InvoiceCards from "./InvoiceCards";
import { LoaderCenter } from "../../atoms/Loader";
import GenericDatePicker from "../../atoms/DatePicker";

const Listing = () => {
  const itemsPerPage = 5;
  const [payMode, setPayMode] = useState(false);
  const [toasterLoader, setToasterLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // const [open, setOpen] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const data = [
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Paid",
    },
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Unpaid",
    },
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Unpaid",
    },
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Paid",
    },
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Paid",
    },
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Unpaid",
    },
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Paid",
    },
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Unpaid",
    },
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Paid",
    },
    {
      patient: {
        name: "Jenifer Smith",
        email: "miranda.clements@example.com",
        avatar: IMAGES.GIRL,
      },
      invoiceDate: "5/23/2024",
      totalInvoice: 159.0,
      dueAmount: 55.0,
      paymentMethod: "Cash",
      status: "Paid",
    },
    // Add more data if needed for appointments
  ];

  const columns = [
    {
      header: "Doctor Name",
      accessorKey: "DoctorName",
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
              className="generic-name-color font-14"
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
      header: "Invoice Date",
      accessorKey: "invoiceDate",
      Cell: ({ cell }) => (
        <Typography className="dark-gray-400 font-16">
          {cell.getValue()}
        </Typography>
      ),
    },
    {
      header: "Total Invoice",
      accessorKey: "totalInvoice",
      Cell: ({ cell }) => (
        <Typography className="dark-gray-400 font-16">{`$${cell.getValue()}`}</Typography>
      ),
    },
    {
      header: "Due Amount",
      accessorKey: "dueAmount",
      Cell: ({ cell }) => (
        <Typography className="dark-gray-400 font-16">{`$${cell.getValue()}`}</Typography>
      ),
    },
    {
      header: "Payment Method",
      accessorKey: "paymentMethod",
      Cell: ({ cell }) => (
        <Typography className="dark-gray-400 font-16">
          {cell.getValue()}
        </Typography>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      accessorFn: (row) => {
        let backgroundColor;

        switch (row.status) {
          case "Paid":
            backgroundColor = "#5DD669";
            break;
          case "Unpaid":
            backgroundColor = "#FF6060";
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
  const handleClosePayMode = () => {
    setPayMode(false);
  };
  const handlePageChange = (selectedPage) => {
    setToasterLoader(true);
    setCurrentPage(selectedPage);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenUserMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (action) => {
    console.log(`Action: ${action}`);
    if (action === "Edit") {
      // setOpen(true);
      return ""
    } else if (action === "Pay") {
      setPayMode(true);
    }
    setAnchorEl(null);
  };
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  useEffect(() => {
    setTimeout(() => {
      setToasterLoader(false);
    }, 1500);
  }, [currentPage]);
  const totalItems = data.length;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          lg={payMode ? 8 : 12}
          md={payMode ? 12 : 12}
          xs={payMode ? 12 : 12}
        >
          <div
            className={`generic_boxShadow rounded-lg ${
              payMode ? "col-lg-12 gap-1 px-[10px] py-[20px]" : "col-lg-12 p-[30px]"
            }`}
          >
            <div className="flex justify-between items-center flex-wrap invoice_wrap_2">
              <h5 className="fw-600 font-20">Invoices</h5>
              <div className="flex justify-end gap-2 invoice_wrap">
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
                        setRowData(row.original);
                        handleOpenUserMenu(event);
                      }}
                      role="button"
                      tabIndex="0"
                      onKeyDown={(e) => {
                        e.stopPropagation();
                      }}
                      color="inherit"
                      className="dark-gray-500"
                    >
                      <MoreVertIcon />
                    </IconButton>
                  )}
                  muiTableBodyRowProps={({ row }) => ({
                   
                    sx: {
                      cursor: "pointer",
                    },
                  })}
                />
                <div className="flex justify-between flex-wrap custom_pagination gap-3">
                  <Typography
                    variant="span"
                    component="span"
                    color="#1C1D21"
                    fontWeight="400"
                    className="font-12"
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
          </div>
        </Grid>

        {payMode && (
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <div
              className={`generic_boxShadow rounded-xl ${
                payMode ? "col-lg-12 gap-1 h-100 px-[10px] py-[20px]" : "col-lg-12 h-100 p-[30px]"
              }`}
            >
              {payMode && rowData && (
                <InvoiceCards invoice={rowData} onClose={handleClosePayMode} />
              )}
            </div>
          </Grid>
        )}
      </Grid>

      <Menu
        PaperProps={{
          sx: {
            width: "200px", // Set the width to 200px
            "& .MuiMenuItem-root:hover": {
              backgroundColor: "#FFE5E5",
            },
          },
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          onClick={() => handleMenuItemClick("Edit")}
          className="dark-gray-400"
        >
          <FaRegEdit className="mx-2" />
          <span>Edit</span>
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("Delete")}
          className="dark-gray-400"
        >
          <MdDeleteOutline className="mx-2" />
          <span>Delete</span>
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("Pay")}
          className="dark-gray-400"
        >
          <MdOutlinePayment className="mx-2" />
          <span>Pay</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Listing;
