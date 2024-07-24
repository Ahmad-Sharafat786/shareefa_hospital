import React from "react";
import { FormControl, OutlinedInput, InputLabel, InputAdornment, FormHelperText } from "@mui/material";
import { MdOutlineMail } from "react-icons/md";

const TextInput = ({ id, label, register, errors, ...props }) => {
  return (
    
    <FormControl fullWidth variant="outlined" className="margin-top-16">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        className="h-[45px]"
        {...props}
        {...register(id, {
          required: `${label} is required`,
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email address",
          },
        })}
        startAdornment={
          <InputAdornment position="start">
            <MdOutlineMail className="dark-gray-400"/>
          </InputAdornment>
        }
        label={label}
        error={!!errors[id]}
      />
      <FormHelperText className="text-primary">
        {errors[id]?.message}
      </FormHelperText>
    </FormControl>
  );
};

export default TextInput;
