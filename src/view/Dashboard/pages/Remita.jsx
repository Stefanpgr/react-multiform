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


const RemitaDoc = ({next}) =>{
    return(
       
            <div className='text-center mt-4'>
            <h6 style={{color: '#51A4FB', fontWeight: 'bold', fontSize: '25px'}}>Payment set-up</h6>
            <h6  style={{color: '#00204F',  fontSize: '13px'}}><strong>Click the download button, print the direct debit</strong></h6>
            <h6  style={{color: '#00204F',  fontSize: '13px'}}><strong>mandate form and take to your nearest bank branch to set up your rent payment</strong></h6>
          
         <Col md='12'>
            <Btn onClick={()=>next()}>Download</Btn>
            </Col>
            </div>
    
    )
}


export default RemitaDoc;