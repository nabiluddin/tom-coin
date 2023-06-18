import React from 'react'
import './TokenAirdrop.scss'
import cartlogo from '../../assets/cartlogo.png'
import referlogo from '../../assets/referlogo.png'
import dollarlogo from '../../assets/dollarlogo.png'

function TokenAirdrop() {
  return (
    <div className="upper-ta">
      <div className="backBox-ta">
        <p className="head-txt">Tom Coin 50 billion Token Airdrop</p>
        <p className="p-text">
          Like free tokens? Tom Coin supporters who help us reach our presale target will be given a huge Tom airdrop! The reward will be based on your cumulative referral amount. To participate, follow these simple steps:
        </p>
        <div className="main-boxes">
          <div className="fb fb-1"><img src={cartlogo} alt="" className='logos-ta'/> <p className='pu-text'>Purchase Tom In Presale</p> <p className='pi-text'>Join the Tom Coin community and buy Tom Coin tokens via the presale widget.</p></div>
          <div className="fb fb-2"><img src={referlogo} alt="" className='logos-ta' /> <p className='pu-text'>Share Your Referral Code</p> <p className='pi-text'>Once your purchase is complete, copy your unique referral code and share it.</p></div>
          <div className="fb fb-3"><img src={dollarlogo} alt="" className='logos-ta' /> <p className='pu-text'>Earn $AI Airdrop</p> <p className='pi-text'>You’ll earn a share of 50bn $AI based on your referral link’s total amount raised.</p></div>
        </div>
      </div>
    </div>
  )
}

export default TokenAirdrop