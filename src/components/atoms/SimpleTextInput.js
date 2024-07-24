import React from 'react';
import { FormControl, TextField, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';

const TextInput = ({ name, control, rules, label, type, errors, onErrors,readOnly, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => (
        <FormControl variant="outlined" fullWidth error={!!errors[name]}>
          <TextField
            {...field}
            {...props}
            label={label}
            variant="outlined"
            error={!!errors[name]}
            size="small"
            type={type}
            InputProps={{
              readOnly: readOnly,
            }}
            sx={{
              backgroundColor: readOnly ? '#F2F2F2' : 'white',
              borderRadius: readOnly ? '50px' : '10px'
            }}
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

export default TextInput;
