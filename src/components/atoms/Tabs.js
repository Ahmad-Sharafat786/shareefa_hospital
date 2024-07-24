import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default function CustomTabs({
  tabs,
  value,
  color,
  backgroundColor,
  handleChange,
  borderRadius,
  border,
  padding,
  margin,
  minHeight,
  indicatorColor 
}) {
  return (
    <Box sx={{ width: "100%", padding: "0px" }} className="tabs_box_parent">
      <Box sx={{ borderBottom: 1, borderColor: "divider" , padding: "0px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: indicatorColor } }}
          sx={{
            ".MuiTab-root": {
              color: color,
              borderRadius: borderRadius,
              border: border,
              textTransform: "capitalize",
              padding: padding,
              margin: margin,
              minHeight: minHeight
              
            },
            ".Mui-selected": {
              color: color,
              border: border,
              backgroundColor:backgroundColor
            },
            ".MuiTab-root:not(.Mui-selected)": {
              color: "#999999",
              backgroundColor: "#EAEAEA"
            }
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              borderRadius={borderRadius}
              border={border}
              padding={padding}
              key={index}
              label={
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  {tab.icon && <span style={{ marginRight: 8 }}>{tab.icon}</span>}
                  {tab.label}
                </span>
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
}

CustomTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
