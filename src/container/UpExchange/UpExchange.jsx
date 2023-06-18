import React from "react";
import "./UpExchange.scss";


function UpExchange(props) {
  let colortext = '#FFFFFF';
  let margin = '8rem';
  if(props.colorT){
    colortext = '#151515';
    margin = '3rem'
  }
  return (
    <div className="upper">
      <div className="backBox" style={{ backgroundColor: props.backgroundColor, margin: props.colorT ? margin : "" }}>
        <p className="singleTxt" style={{ color: colortext }}>{props.text}</p>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

export default UpExchange;
