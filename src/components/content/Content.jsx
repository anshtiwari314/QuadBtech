import img1 from '../../assets/cryptonews.png'
import './content.scss'

export default function Content() {
  return (
    <div className='content'>

      <h3 className="content_h3">best price to trade</h3>

      <div className='content_div'>
          <div className='content_div_A'>
            <h4>0.92 %</h4>
            <p>1 Hour</p>
          </div>
          <div className='content_div_B'>
            <h4>1.02 %</h4>
            <p>1 Hour</p>
          </div>
          <div className='content_div_C'>
          &#8377; 36,69,838
            
          </div>
          <div className='content_div_D'>
            <h4>0.82 %</h4>
            <p>1 Day</p>
          </div>
          <div className='content_div_E'>
            <h4>0.82 %</h4>
            <p>7 Days</p>
          </div>
      </div>
      <p className='content_p'>Average BTC/INR net price including commision</p>
      <div className='content_img'>
        <img src={img1} />
      </div>
    </div>  
  )
}
