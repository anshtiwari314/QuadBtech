import React from 'react'
import banner from '../../assets/banneriost.jpg' 
import './footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer_img'>
            <img src={banner}/>
        </div>
        <hr/>
        <div className='footer_content'>
            <div className='footer_content_A'>
                <p>Copyright &#169; 2019</p>
                <p>HodInfo.com</p>
                <p>Developed By <span>QuadBTech</span></p>
            </div>
            <div className='footer_content_B'>
                Support 
            </div>
        </div>
        <div className="footer_button">
        <button className="add-button btn btn-outline-info" >Add hodlinfo to home screen</button>
        </div>
    </div> 
  )
}
