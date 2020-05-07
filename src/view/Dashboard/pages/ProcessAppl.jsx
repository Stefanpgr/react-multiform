import React from 'react'
import { Container} from 'react-bootstrap'


const ProcessAppl = ({next}) => {

return(
    
    <div className='text-center col-md-12 mt-2 pt-5'>
   <img src={require('../../../assets/img/dashboard/app-process.svg')} width='180' />
    <h6 style={{color: '#51A4FB', fontWeight: 'bold', fontSize: '25px'}}>Processing application</h6>
    <h6  style={{color: '#00204F',  fontSize: '12px'}}><strong>Your application is currently being processed.</strong> We will get back to you shortly. Check back here or look out for an email from us in your inbox or spam.</h6>
    <button onClick={()=>next()}>next</button>
    </div>

)

}


export default ProcessAppl;