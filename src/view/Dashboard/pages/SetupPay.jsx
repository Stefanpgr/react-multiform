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


const SetupPay = ({next}) =>{
    return(
       
            <div className='text-center mt-4'>
            <h6 style={{color: '#51A4FB', fontWeight: 'bold', fontSize: '25px'}}>Set-up your payment plan</h6>
            <h6  style={{color: '#00204F',  fontSize: '13px'}}><strong>You will be charged only {'(1.5% of principal)'} for your </strong></h6>
            <h6  style={{color: '#00204F',  fontSize: '13px'}}><strong>credit life insurance cover.</strong></h6>
          
         <Col md='12'>
         <img src={require('../../../assets/img/dashboard/setup-pay.svg')} width='280' className='mt-2 mb-4' />
         </Col>
         <Col md='12'>
            <Btn onClick={()=>next()}>Set-up payment</Btn>
            </Col>
            </div>
    
    )
}


export default SetupPay;