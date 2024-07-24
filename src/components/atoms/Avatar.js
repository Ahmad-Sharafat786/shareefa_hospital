import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";

const GenericAvatar = ({ alt, src, width, height, borderRadius }) => {
  return (
    <MuiAvatar
      alt={alt}
      src={src}
      sx={{
        width: width,
        height: height,
        borderRadius: `${borderRadius} !important`,
      }}
    />
  );
};

export default GenericAvatar;
