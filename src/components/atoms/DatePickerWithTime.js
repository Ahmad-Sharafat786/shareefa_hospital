import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function GenericDatePicker({width, height, padding, margin}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DateTimePicker
          label="Basic date time picker"
          sx={{
            width: width || "auto",
            height: height || "auto",
            padding: padding || "",
            margin: margin || "",
            
          }}
          className="search-width"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
