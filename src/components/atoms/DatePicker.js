import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function GenericDatePicker({
  width,
  height,
  padding,
  margin,
  borderRadius,
  fontSize,
  border,
  position,
  left,
  top,
  text,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} className="w-0">
        <DatePicker
          label={text}
          variant="outlined"
          sx={{
            padding: padding || "",
            margin: margin || "",
            position: position || "",
            top: top || "",
            left: left || "0rem",
            width: width || "100%",
            text: text || "",
            "& .MuiOutlinedInput-root": {
              borderRadius: borderRadius || 0,
              width: width || "150px",
              height: height || "",
              border: border || "",
              "& .MuiSvgIcon-root": {
                fontSize: fontSize || "",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: border || "",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: border || "",
              },
              
            },
          }}
          className="search-width"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
