import React from 'react'
import { Container} from 'react-bootstrap'
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


const AppSuccess = () =>{
    return(
        <Container className=' bg-white' style={{ height: '525px' }}>
            <div className='text-center mt-5'>
           <img src={require('../../../assets/img/dashboard/app-comp.svg')} width='300' />
            <h6 style={{color: '#51A4FB', fontWeight: 'bold', fontSize: '35px'}}>Application Complete</h6>
            <h6  style={{color: '#707070',  fontSize: '10px'}}>You have successfully completed your application</h6>
            <Btn>Ok</Btn>
            </div>
        </Container>
    )
}


export default AppSuccess;