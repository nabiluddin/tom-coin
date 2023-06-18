import React from 'react'
import './Disclaimer.scss'
import logos from '../../assets/logos.png'
import yelloJerry from '../../assets/yello_jerry.png'


function Disclaimer() {
  return (
    <div className='upper-disc'>
      <div className="backBox-disc">
        <div className="head-txt-disc">Disclaimer</div>
        <p className='p-text-disc'>TOM AND JERRY coin has no association with Nickelodeon or their creation Pepe coins SquarePants. This token is simply paying homage to a meme we all love and recognise. TOM AND JERRY  is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.</p>
        <img src={yelloJerry} alt="" className='c-toj-disc'/>
        <img src={logos} alt="" className='footer-disc'/>
        <div className='foor-bar-disc'></div>
        <div className="copyright p-text-disc">© 2023 Tom and Jerry All Rights Reserved.</div>
      </div>

    </div>
  )
}

export default Disclaimer