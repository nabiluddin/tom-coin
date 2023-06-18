import React from "react";
import "./Intro.scss";
import yelloJerry from "../../assets/yello_jerry.png";
import footerBar from "../../assets/footerBar.png";
import center from "../../assets/centerP.png";
import logos from "../../assets/logos.png";

function Intro() {
  return (
    <div className="">
      <div className="s">
        <div className="bgs">
          <div class="ellipse bg0"></div>
          <div class="ellipse bg1"></div>
          <div class="ellipse bg2"></div>
          <div class="ellipse bg3"></div>
          <div class="ellipse bg4"></div>
        </div>
        <div className="content">
          <nav>
            <div>
              <img src={yelloJerry} alt="yelloJerry" />
            </div>
            <ul>
              <li>How to Buy</li>
              <li>Tom Coin</li>
              <li>Roadmap</li>
              <li>Buy NFT</li>
              <li>Jerry Coin</li>
              <li>Tokonomics</li>
            </ul>
            <button>Buy Now</button>
          </nav>
          <div className="centerP">
            <img src={center} alt="center" />
            <p className="contact">Contract :- 0x24086EAb82DBDaa4771d0A5D</p>
            <button className="PresaleBTN">Presale on Pinksale</button>
            <img src={logos} alt="logos"  className="logos"/>
          </div>
        </div>
      </div>
      <div className="footerBar">
        <img src={footerBar} alt="foterbar" className="footerBar" />
      </div>
    </div>
  );
}

export default Intro;
