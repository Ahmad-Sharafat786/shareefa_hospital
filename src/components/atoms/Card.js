import React from "react";
import { IoMdClose } from "react-icons/io";
import { Card, CardContent, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const GenericCard = ({ title, content, footer, onClose, padding }) => {
  return (
    <Card>
      <CardContent sx={{padding: padding}}>
        {onClose && (
          <Typography
            color="#000000"
            variant="h6"
            component="div"
            className="flex justify-between items-center gap-2"
          >
            <div className="flex items-center">
              {onClose && (
                <IoMdClose
                  onClick={onClose}
                  className="cursor-pointer text-black mx-2"
                  size={30}
                />
              )}
              {title}
            </div>

            <MoreVertIcon
              onClick={onClose}
              className="cursor-pointer text-black"
            />
          </Typography>
        )}
        {content}
        {footer}
      </CardContent>
    </Card>
  );
};

export default GenericCard;
