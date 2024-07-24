import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import CustomButton from "../../atoms/Button";
import CustomSearch from "../../atoms/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PaginationComponent } from "../../../assets/genericComponents/Pagination";
import Table from "../../atoms/Table";
import { LoaderCenter } from "../../atoms/Loader";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const SoapList = () => {
  const itemsPerPage = 5;
  const [anchorEl, setAnchorEl] = useState(null);
  const [toasterLoader, setToasterLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
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
      SOAP Notes
    </Typography>,
  ];
  const data = [
    {
      Subjective: "Patient reports mild chest pain and shortness of breath.",
      Objective: "Blood pressure: 130/85 mmHg, Pulse: 78 bpm, Temp: 98.6°F.",
      Assessment: "Possible mild angina, rule out myocardial infarction.",
      Plan: "Prescribe nitroglycerin, schedule ECG, follow up in 1 week.",
    },
    {
      Subjective: "Complains of persistent cough and sore throat.",
      Objective: "Throat red, lymph nodes slightly enlarged, Temp: 100.2°F.",
      Assessment: "Likely viral pharyngitis, consider bacterial infection.",
      Plan: "Prescribe throat lozenges, recommend rest, recheck in 3 days.",
    },
    {
      Subjective: "Patient experiencing headaches and dizziness.",
      Objective: "Blood pressure: 140/90 mmHg, No other abnormalities.",
      Assessment: "Hypertension, possible stress-related symptoms.",
      Plan: "Initiate antihypertensive therapy, advise lifestyle changes.",
    },
    {
      Subjective: "Reports lower back pain after lifting heavy objects.",
      Objective: "Tenderness in lower lumbar region, ROM slightly limited.",
      Assessment: "Likely musculoskeletal strain.",
      Plan: "Prescribe NSAIDs, recommend physical therapy, follow up in 2 weeks.",
    },
    {
      Subjective: "Patient has been feeling fatigued and low energy.",
      Objective: "Pale skin, hemoglobin slightly low, otherwise normal exam.",
      Assessment: "Potential iron deficiency anemia.",
      Plan: "Order CBC, prescribe iron supplements, dietary advice.",
    },
    {
      Subjective: "Patient reports mild chest pain and shortness of breath.",
      Objective: "Blood pressure: 130/85 mmHg, Pulse: 78 bpm, Temp: 98.6°F.",
      Assessment: "Possible mild angina, rule out myocardial infarction.",
      Plan: "Prescribe nitroglycerin, schedule ECG, follow up in 1 week.",
    },
    {
      Subjective: "Complains of persistent cough and sore throat.",
      Objective: "Throat red, lymph nodes slightly enlarged, Temp: 100.2°F.",
      Assessment: "Likely viral pharyngitis, consider bacterial infection.",
      Plan: "Prescribe throat lozenges, recommend rest, recheck in 3 days.",
    },
    {
      Subjective: "Patient experiencing headaches and dizziness.",
      Objective: "Blood pressure: 140/90 mmHg, No other abnormalities.",
      Assessment: "Hypertension, possible stress-related symptoms.",
      Plan: "Initiate antihypertensive therapy, advise lifestyle changes.",
    },
    {
      Subjective: "Reports lower back pain after lifting heavy objects.",
      Objective: "Tenderness in lower lumbar region, ROM slightly limited.",
      Assessment: "Likely musculoskeletal strain.",
      Plan: "Prescribe NSAIDs, recommend physical therapy, follow up in 2 weeks.",
    },
    {
      Subjective: "Patient has been feeling fatigued and low energy.",
      Objective: "Pale skin, hemoglobin slightly low, otherwise normal exam.",
      Assessment: "Potential iron deficiency anemia.",
      Plan: "Order CBC, prescribe iron supplements, dietary advice.",
    },
  ];

  const columns = [
    {
      header: "Subjective",
      accessorKey: "Subjective",
    },
    {
      header: "Objective",
      accessorKey: "Objective",
    },
    {
      header: "Assessment",
      accessorKey: "Assessment",
    },
    {
      header: "Plan",
      accessorKey: "Plan",
    },
  ];

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
  return (
    <div className="mb-0 generic_boxShadow p-[30px] rounded-lg">
      <div className="flex justify-between items-center padding-top-10 gap-4 pb-4 flex-wrap custom-patient-picker">
        <div>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <div className="flex gap-2 search_button_all">
          <CustomSearch
            placeholder="Search"
            defaultValue="test"
            width="200px"
            borderRadius="50px"
            enableIcon={true}
            padding="1.5px"
            border="1px solid #D7D7D7"
          />
          <CustomButton
            borderRadius="50px"
            fontSize="12px"
            text="Add Soap"
            className="text_white rounded-full custom-patient-button"
            width="125px"
            height="40px"
            backgroundColor="var(--secondary-color)"
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
          <MenuItem>
            <MdDeleteOutline className="mx-2" />
            Delete
          </MenuItem>
          
        </Menu>
      </div>
    </div>
  );
};

export default SoapList;
