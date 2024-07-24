import React, { useState } from "react";
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  IconButton,
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Controller } from "react-hook-form";
import { MdLockOutline } from "react-icons/md";

const PasswordInput = ({
  name,
  control,
  rules,
  label,
  errors,
  margin,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => (
        <FormControl
          variant="outlined"
          fullWidth
          error={!!errors[name]}
          sx={{ margin: margin }}
        >
          <InputLabel htmlFor={`outlined-adornment-${name}`}>
            {label}
          </InputLabel>
          <OutlinedInput
            {...field}
            {...props}
            sx={{ borderRadius: "50px", padding: "4px 14px" }}
            type={showPassword ? "text" : "password"}
            startAdornment={
              <InputAdornment position="start">
                <MdLockOutline className="dark-gray-400" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <FaEye className="text-primary" />
                  ) : (
                    <IoIosEyeOff className="text-primary" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            error={!!errors[name]}
            size="small"
          />
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

export default PasswordInput;
