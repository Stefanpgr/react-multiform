import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'


const Profile = () => {

return(
  <div style={{backgroundColor: 'grey', height: '100vh'}} >
    <h1>TEST</h1>
    <div style={{ width: '97%', margin: 'auto'}}>
    <Container fluid>
      <Row>
         {/* <div class="w-100 d-none d-md-block"></div> */}
      <Col md='8' >
        <div className='bg-white'>
          hello
        </div>

      </Col>

      <Col md='4' >
        <div className='bg-white'>hello left</div>
      </Col>

       <Col   className='align-self-end'>
         <div className='bg-white'>hello left down</div>
       </Col>
      </Row>
    </Container>
  </div>
  </div>
)


}



export default Profile;
