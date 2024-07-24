import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function GenericTimePicker({
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
  text
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker
          label={text}
          sx={{
            padding: padding || '',
            margin: margin || '',
            position: position || '',
            top: top || '',
            left: left || '',
            width: width || '',
            '& .MuiOutlinedInput-root': {
              borderRadius: borderRadius || 0,
              width: width || '',
              height: height || '',
              border: border || '',
              '& .MuiSvgIcon-root': {
                fontSize: fontSize || '',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: border || '',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: border || '',
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
