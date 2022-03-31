import React from 'react'
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import logo from '../../assets/logo.png'
import './header.scss'
import ToggleButton from '../toggle-button/ToggleButton'
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Header() {
  return (
    <div className='header'>
        <div className='header_divA'>
            <div><img src={logo} className='logo'/></div>
            <p>Powered By <span>Finstreet</span></p>
        </div>
        
        
       <div className='header_divB_wrap'>
       <div className='header_divB'>
            <div className="dropdown header_divB_select">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    INR
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">INR</a></li>
                    
                </ul>
            </div>
            <div className="dropdown header_divB_select">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    BTC
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">BTC</a></li>
                    <li><a className="dropdown-item" href="#">ETH</a></li>
                    <li><a className="dropdown-item" href="#">USDT</a></li>
                    <li><a className="dropdown-item" href="#">XRP</a></li>
                    <li><a className="dropdown-item" href="#">TRX</a></li>
                    <li><a className="dropdown-item" href="#">DASH</a></li>
                    <li><a className="dropdown-item" href="#">ZEC</a></li>
                    <li><a className="dropdown-item" href="#">XEM</a></li>
                    <li><a className="dropdown-item" href="#">IOST</a></li>
                    <li><a className="dropdown-item" href="#">WIN</a></li>
                    <li><a className="dropdown-item" href="#">BTT</a></li>
                    <li><a className="dropdown-item" href="#">WRX</a></li>
                </ul>
            </div>
                
            <button className='header_divB_button btn btn-secondary'>buy btc</button>
        </div>
       </div>
        
        <div className='header_divC'>
            <CircularProgressWithLabel value={20} />
            <div className='header_divC_telegram'>
                <TelegramIcon className='tele_icon'/>
                <span>Connect Telegram</span>
            </div>
            <ToggleButton/>
        </div>
    </div>
  )
}
