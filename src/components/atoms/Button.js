import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { ImAttachment } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";

const CustomButton = ({
  showEditIcon,
  type,
  showRightIcon,
  showAttachmentIcon,
  showLeftIcon,
  showAddIcon,
  text,
  onClick,
  color,
  padding,
  marginTop,
  className,
  width,
  height,
  backgroundColor,
  borderRadius,
  fontSize,
  fontWeight,
  position,
  left,
  border,
  marginBottom,
}) => {
  // const [active, setActive] = useState(isActive);

  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    fontSize: fontSize,
    color: color,
    padding: padding,
    marginTop: marginTop,
    fontWeight: fontWeight,
    type: type,
    position: position,
    left: left,
    border: border,
    marginBottom: marginBottom,
    // border: active ? "1px solid #FF6060" : border,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  };

  const handleClick = () => {
    // setActive(!active);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      // className={`${className} custom-button`}
      className={`${className} custom-button`}
      style={buttonStyle}
      onClick={handleClick}
      type={type} // Ensure type is correctly applied here
    >
      {showLeftIcon && <FaArrowLeft />}
      {showAddIcon && <IoAddCircleOutline size={20} />}
      {showAttachmentIcon && <ImAttachment />}
      {showEditIcon && <FaRegEdit />}
      {text}
      {showRightIcon && <FaArrowRight />}
    </button>
  );
};

CustomButton.propTypes = {};

CustomButton.defaultProps = {};

export default CustomButton;
