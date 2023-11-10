import React from 'react'
import  ExpandLessIcon  from '@mui/icons-material/ExpandLess'
import './Footer.css';

function Footer() {
    const HandleClick=()=>{
        window.scrollTo(0,0)
    }
  return (
    <div className='Footer'>
        <a onClick={HandleClick}>
        <div className="Footer_BackToTop">
            <ExpandLessIcon className='Footer_BackToTopText'/>
         </div>   
        </a>    
        <div className="FooterVerticalRow">
            <div className="FooterVerticalCol">
                <div className="FooterVerticalColHead">
                    Get to Know us
                </div>
                <ul>
                    <li>About</li>
                    <li>Career</li>
                    <li>Services</li>
                    <li>Amazon Cares</li>
                    <li>Gift Products</li>
                </ul>
            </div>
            <div className="FooterVerticalCol">
                <div className="FooterVerticalColHead">
                    Connect With Us
                </div>
                <ul>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Twitch</li>
                </ul>
            </div>
            <div className="FooterVerticalCol">
                <div className="FooterVerticalColHead">
                   Make Money
                </div>
                <ul>
                    <li>Amazon Pay</li>
                    <li>Become an Affiliate</li>
                    <li>Sell On Amazon</li>
                    <li>Fulfilment byAmazon</li>
                   
                </ul>
            </div>
        </div>
        <hr />
        <div className="FooterLine">
            <span className='FooterMessage'>
                Amazon Clone &copy; 
            </span>
        </div>
    </div>
  )
}

export default Footer