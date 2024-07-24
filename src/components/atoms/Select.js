import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

const SelectInput = ({
  name,
  control,
  rules,
  label,
  errors,
  options,
  marginTop,
  readOnly,
  width,
  borderRadius,
  size,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => (
        <FormControl fullWidth error={!!errors[name]}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            {...field}
            {...props}
            labelId={`${name}-label`}
            label={label}
            disabled={readOnly}
            size={size}
            onChange={readOnly ? () => {} : (e) => field.onChange(e.target.value)}
            sx={{
              borderRadius: borderRadius,
              marginTop: marginTop,
              width: width,
              textAlign: "start",
              backgroundColor: readOnly ? "#F2F2F2" : "white",
              // borderRadius: readOnly ? "50px" : "10px",
              cursor: readOnly ? "not-allowed" : "default",
            }}
            
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {errors[name] && (
            <FormHelperText error className="text-primary">
              {errors[name]?.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default SelectInput;
