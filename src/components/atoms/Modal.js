import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const CustomModal = ({
  open,
  onClose,
  title,
  description,
  children,
  backgroundColor,
  modalStyle,
  marginBottom,
  marginTop,
  titleClassName,
  titleDescription
  
}) => {
  const defaultModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // overflow: 'scroll',
    overflow: "hidden",
    width: "auto",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: "none",
    p: 4,
    borderRadius: "10px",
    marginBottom: 2, 
    marginTop: 5,
    
  };

  const mergedModalStyle = {
    ...defaultModalStyle,
    ...modalStyle,
  }
   
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backgroundColor: backgroundColor ||  "#000000",
          },
        },
      }}
    >
      <Fade in={open}>
        <Box sx={mergedModalStyle}>
          <Typography
            fontWeight="medium"
            // className="text-secondary"
            id="transition-modal-title"
            variant="h5"
            component="h2"
            className={titleClassName}
          >
            {title}
          </Typography>
          <Typography
            fontSize="12px"
            // className="dark-gray-500"
            id="transition-modal-description"
            sx={{ marginBottom: marginBottom, marginTop: marginTop }}
            className={titleDescription}
          >
            {description}
          </Typography>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
}
export default CustomModal;