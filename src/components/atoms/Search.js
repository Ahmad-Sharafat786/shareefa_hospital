import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";

const CustomSearch = ({
  fontSize,
  bgColor,
  color,
  placeholder,
  value,
  onChange,
  enableIcon,
  width,
  height,
  borderRadius,
  padding,
  margin,
  placeholderColor,
  border
}) => {
  return (
    <TextField
      className="search-width"
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={{
        width: width || "auto",
        height: height || "auto",
        margin: margin || "0px",
        "& .MuiOutlinedInput-root": {
          borderRadius: borderRadius || 0,
          border: border || "",
          "&:hover .MuiOutlinedInput-notchedOutline": {
                border: border || "", // Added borderColor for hover state
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: border || "", // Added borderColor for focused state
              },
        },
        "& .MuiInputBase-input::placeholder": {
          color: placeholderColor || "#9e9e9e", // set the placeholder color
          fontSize: fontSize || "12px",
        },
      }}
      InputProps={{
        style: {
          height: height || "auto",
          padding: padding || "0px",
          backgroundColor: bgColor || "#fff",
          color: color || "#000",
          fontSize: fontSize || "14px",
        },
        endAdornment: enableIcon && (
          <InputAdornment position="end">
            {/* <SearchIcon style={{ color: color || "#000" }} /> */}
            <SearchIcon sx={{ color: "var(--secondary-color)", fontSize: '18px' }} className="mx-3"/>
          </InputAdornment>
        ),
      }}
    />
  );
};

CustomSearch.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  enableIcon: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  fontSize: PropTypes.number,
};

CustomSearch.defaultProps = {
  bgColor: "#fff",
  color: "#000",
  placeholder: "Search",
  enableIcon: true,
  width: "auto",
  height: "auto",
  borderRadius: "0px",
  padding: "0px",
  margin: "0px",
  fontSize: 14,
};

export default CustomSearch;
