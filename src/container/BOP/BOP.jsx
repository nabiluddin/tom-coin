import React from "react";
import BOPpic from "../../assets/BOP.png";
import "./BOP.scss";

function BOP() {
  return (
    <div className="bupperBOP">
      <div className="bs">
        <div className="bbgs">
          <div class="ellipse bbg0"></div>
          <div class="ellipse bbg1"></div>
          <div class="ellipse bbg2"></div>
          <div class="ellipse bbg3"></div>
          <div class="ellipse bbg4"></div>
        </div>

        <p className="bcontact">Buy On Pancakeswap</p>

        <div className="bcenterP">
          <img src={BOPpic} alt="center" />
        </div>
      </div>
    </div>
  );
}

export default BOP;
