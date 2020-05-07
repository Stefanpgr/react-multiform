import React from 'react'
import {Col} from 'react-bootstrap'
import styled from 'styled-components'

const Btn = styled.button`
width: 146px;
height: 44px;
background: #51A4FB 0% 0% no-repeat padding-box;
border:none;
color: white;
border-radius: 5px;
margin-top: 4px;
opacity: 1;
`


const CongratsPay = ({next}) =>{
    return(
       
            <div className='text-center mt-4'>
            <h6 style={{color: '#51A4FB', fontWeight: 'bold', fontSize: '25px'}}>Congratulations</h6>
            <h6  style={{color: '#00204F',  fontSize: '12px'}}><strong>Your offer letter and contract has been approved.</strong></h6>
            <h6  style={{color: '#00204F',  fontSize: '12px'}}>Set-up your payment plan</h6>
          
         <Col md='12'>
         <img src={require('../../../assets/img/dashboard/congrats-offer.svg')} width='180' className='mt-2' />
         </Col>
         <Col md='12'>
            <Btn onClick={()=>next()}>Continue</Btn>
            </Col>
            </div>
    
    )
}


export default CongratsPay;