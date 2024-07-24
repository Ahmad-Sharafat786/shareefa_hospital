import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Add, Remove } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import PharmacistModal from "../organisms/prescription/PharmacistModal";

const GenericAccordion = ({
  avatarSrc,
  doctorName,
  specialty,
  status,
  expandText,
  iconColor,
  iconSize,
  defaultExpanded,
  marginBottom,
  flexWrap,
  children, 
}) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 426);
    };
    
    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handlePharmacyModal = () => {
    setOpen(true);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Accordion
      className="no_boxShadow"
      defaultExpanded={defaultExpanded}
      style={{
        marginBottom,
        borderRadius: isSmallScreen ? "50px" : expanded ? "50px" : "35px",
      }}
      onChange={handleChange}
    >
      <AccordionSummary
        className="bright-gray-50-bg"
        style={{ borderRadius: "50px", flexWrap: flexWrap }}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box
          gridColumn="span 12"
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="space-between"
          flexWrap={flexWrap}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              alt={doctorName}
              src={avatarSrc}
              variant="rounded-full"
              sx={{ width: 50, height: 50 }}
            />
            <Box mx={2}>
              <Typography
                variant="body1"
                component="h6"
                className={`dark-gray-500 ${window.innerWidth <= 576 ? 'doctorName-small' : ''}`}
                fontWeight="500"
                fontSize="18px"
              >
                {doctorName}
              </Typography>
              <Typography variant="body2" component="p">
                <span className="dark-gray-400 font-14">{specialty}</span>{" "}
                <span className="dark-gray-200">|</span>{" "}
                <span className="bright-gray-300 font-12">{status}</span>
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="body2"
              component="span"
              className={`hover:text-[#3760F2] ${window.innerWidth <= 576 ? 'expandText-small' : ''}`}
              style={{ marginRight: "20px" }}
              onClick={handlePharmacyModal}
            >
              {expandText}
            </Typography>
            <Box onClick={handleChange}>
              {expanded ? (
                <Remove sx={{ color: iconColor, fontSize: iconSize }} />
              ) : (
                <Add sx={{ color: iconColor, fontSize: iconSize }} />
              )}
            </Box>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails className="accordion-spacing">
        {children}
      </AccordionDetails>
      <PharmacistModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </Accordion>
  );
};

export default GenericAccordion;
