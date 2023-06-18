import React from "react";
import "./EarningCalc.scss";

import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

const IOSSlider = styled(Slider)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? "rgba(21, 21, 21, 0.7)"
      : "rgba(21, 21, 21, 0.7)",
  height: 10,

  marginTop: "1rem",

  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    border: "50%",
    backgroundColor: "#151515",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    minWidth: "unset",
    transform: "translate(-50%, 0)",
    position: "relative",
    padding: "15px",
    margin: "1em 0 3em",
    color: "#000",
    background: "#E0BD06",
    background:
      "-webkit-gradient(linear, 0 0, 0 100%, from(#E0BD06), to(#f9d835))",
    background: "-moz-linear-gradient(#E0BD06, #f9d835)",
    background: "-o-linear-gradient(#E0BD06, #f9d835)",
    background: "linear-gradient(#E0BD06, #f9d835)",
    borderRadius: "10px",
  },
  "& .MuiSlider-valueLabel.bottom": {
    background:
      "-webkit-gradient(linear, 0 0, 0 100%, from(#f9d835), to(#E0BD06))",
    background: "-moz-linear-gradient(#f9d835, #E0BD06)",
    background: "-o-linear-gradient(#f9d835, #E0BD06)",
    background: "linear-gradient(#f9d835, #E0BD06)",
  },
  "& .MuiSlider-valueLabel::after": {
    content: "''",
    position: "absolute",
    top: "-15px",
    left: "50%",
    marginLeft: "-15px",
    borderWidth: "0 15px 15px",
    borderStyle: "solid",
    borderColor: "#E0BD06 transparent",
    display: "block",
    width: "0",
  },
  "& .MuiSlider-valueLabel.bottom::after": {
    top: "auto",
    bottom: "-15px",
    borderWidth: "15px 15px 0",
    borderColor: "#E0BD06 transparent",
  },
  "& .MuiSlider-valueLabel": {
    margin: "4rem",
    // padding: '0.1rem',
    fontSize: 12,
    fontWeight: "normal",
    top: "100%",
    transform: "translateY(8px)",
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
    fontWeight: 800,
    fontSize: "1rem",
    background: "#E0BD06",
    borderWidth: "1px 3px 3px 1px",
    borderStyle: "solid",
    borderColor: "#151515",
    borderRadius: "6px",
    width: "320%",
  },

  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.6,
    backgroundColor: "#e0bd06",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "rgba(21, 21, 21, 0.7)",
    height: 8,
    width: 8,
    borderRadius: "50%",
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

function CustomizedSlider() {
  return (
    <Box sx={{ width: 400 }}>
      <IOSSlider
        aria-label="ios slider"
        defaultValue={0.000292}
        marks={marks}
        valueLabelDisplay="on"
        step={0.000001}
        min={0.0001}
        max={0.0005}
      />
      <Box sx={{ m: 3 }} />
    </Box>
  );
}

function EarningCalc() {
  return (
    <div className="upper-calc">
      <div className="backBox-calc">
        <p className="head-txt">Earning Calculator</p>
        <p className="p-text">
          Enter how much $DOGE AI you own in the input field below or
          <button className="btn-y">Buy Now</button>
        </p>
        <div className="enter-amount">
          <span className="f-text">DEGE AI</span>
          <input type="number" name="amount" id="amount" placeholder="Enter" />
          <span>
            = USD <span className="E0BD06">$0.00</span>
          </span>
        </div>
        <p className="c-text">
          <p>Move the bullet to see how much your Doge AI will be worth at</p>
          <p>different price targets.</p>
        </p>
        {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
        <CustomizedSlider />

        <div className="3slots flex-row">
          <div className="flex-column">
            <button className="tr-btn s-1">PINKSALE FAIR LAUNCH</button>
            <p className="p-T">$0.000252</p>
          </div>
          <div className="flex-column ">
            <button className="tr-btn s-2">Launch Price</button>
            <p className="p-T">$0.0001</p>
          </div>
          <div className="flex-column ">
            <button className="tr-btn s-3">Generation Wealth</button>
            <p className="p-T">$0.50</p>
          </div>
        </div>
        <div className="bottom-style">
          <button className="btn-y">Buy Now</button>
          <p className="p-T">Share Profile</p>
        </div>
      </div>
    </div>
  );
}

export default EarningCalc;
