import React from 'react'
import './App.css'

import upexchanges from "./assets/upexchanges.png";
import FO from "./assets/FO.png";
import tokonomics from "./assets/tokonomics.png";

import {Intro, UpExchange, About, BOP, EarningCalc, TokenAirdrop, Disclaimer} from './container/';

function App() {
  return (
    <div>
      <Intro/>
      <UpExchange text="Find Doge AI Upcoming on Exchanges" image={upexchanges} backgroundColor="#D78FC2" />
      <About />
      <BOP />
      <UpExchange text="Featured on" image={FO} backgroundColor="#D78FC2" colorT='#151515' />
      <UpExchange text="Tokonomics" image={tokonomics} backgroundColor="#8FD792" colorT='#151515' />
      <EarningCalc />
      <TokenAirdrop />
      <Disclaimer />

    </div>
  )
}

export default App