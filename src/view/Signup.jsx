import React from 'react'
import {Col,Row,Container} from 'react-bootstrap'


const Signup = () =>{

    return(
        <div>
            <h1 className='mb-5'>HEAD</h1> 
            {/* , backgroundColor: '#E7F7FF' */}
            <Row>
                <Col md='6' style={{height: '77vh'}}>
                    {/* <img src={require('../assets/img/signupsvg.svg')} className='mt--9' style={{width: 400}}/> */}
                </Col>
                <Col md='6' style={{height: '77vh', backgroundColor: '#F8FCFF'}}>
                    <Container >
                        <div className='text-center mt-5'> 
                        <h3>Sign up</h3>
                        <h6>Let's get you started with an account</h6>
                        </div>
                        <Container className=' offset-md-1 mt-5'>
                        <Row >
                           <Col sm='4'>
                                <input type='text' />
                           </Col>
                           <Col sm='4'>
                                <input type='text' />
                           </Col>
                       </Row>
                        </Container>
                      
                    </Container>
                </Col>
            </Row>
        </div>
    )
}


export default Signup