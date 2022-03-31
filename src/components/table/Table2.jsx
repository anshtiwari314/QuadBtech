import {useEffect,useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './table2.scss'
import axios from 'axios';

export default function Table2() {

  const [state,setState] = useState()

  useEffect(()=>{

    async function getData(){
      let temp = await axios.get('https://quadbtech-back-end.herokuapp.com/data')
      console.log(temp.data);
      setState(temp.data);
    }
    getData();
  },[])

  
  // useEffect(()=>{

  //   state && axios.post('http://localhost:5000/data',state);
  //   state && console.log(state.length)

  // },[state])

  return (
    <div className='table'>
        <div className='table_head'>
            <span className='table_head_sno'>#</span>
            <span>platform</span>
            <span>last traded price</span>
            <span>buy / sell price</span>
            <span>type</span>
            <span>difference</span>
            <span>savings</span>
            <span>volume</span>
        </div>
        
        {state && state.map((ele,index)=>{

         return <div className='table_data'>
          <span className='table_data_sno'>{index+1}</span>
          <span><img/> <span>{ele.type}</span></span>
          <span>&#8377; {ele.open}</span>
          <span>&#8377; {ele.buy} /&#8377; {ele.sell}</span>
          <span>{ele.name}</span>
          <span className='table_data_diff'>{((ele.high-ele.low)/100).toFixed()} %</span>
          <span className='table_data_savings'><span>&#9650;</span> &#8377; 2,09,479</span>
          <span>{ele.volume}</span>
          </div>


        })}
        
    </div>
  )
}
