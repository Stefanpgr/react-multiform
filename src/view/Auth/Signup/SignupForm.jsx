import React from 'react'
import {Col,Row,Container, Image} from 'react-bootstrap'
import { Form, Input, Select, Button, Checkbox, Radio } from 'antd';

const SignupForm = (props) => {


    return (
        <Row className="mx-0">
            <Col md='6' className="px-0 d-none d-md-block left-cont">
            </Col>
            <Col md='6' style={{ backgroundColor: '#F8FCFF'}}>
                <Container >
                    <div className='text-center mt-5'> 
                    <h3 className="h2 font-weight-bold">Sign up</h3>
                    <h6>Let's get you started with an account</h6>
                    </div>
                    <Container className='mt-5'>
                    <Form
                     onFinish={props.finish}
                    >
                        <Row >
                            <Col md='6' lg='5'  className='offset-lg-1 mb-0' >
                                
                                <label className="text-muted">First Name</label>
                                
                                <Form.Item 
                                    name="first_name" 
                                    rules={[{
                                                required: true,
                                                message: "Please enter your first name"
                                            }]} 
                                >
                                    <Input placeholder="Enter your first name" className='w-100' style={{padding:"1.3rem"}} />
                                </Form.Item>
                            </Col>
                            <Col md='6' lg='5' className="mb-0" >
                                <label className="text-muted">Last Name</label>
                                <Form.Item 
                                    name="last_name" 
                                    rules={[{
                                                required: true,
                                                message: "Please enter your last name"
                                            }]} 
                                >
                                    <Input placeholder="Enter your last name" className='w-100' style={{padding:"1.3rem"}} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row >
                            <Col  md='6' lg='5' className='offset-lg-1 mb-0' >
                                <label className="text-muted">Email Address</label>                                    
                                <Form.Item 
                                    name="email" 
                                    rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: "Please enter your email address"
                                            }]} 
                                >
                                    <Input placeholder="Enter your email address" type="email" className='w-100' style={{padding:"1.3rem"}} />
                                </Form.Item>
                            </Col>
                            <Col md='6' lg='5' className="mb-0" >
                                <label className="text-muted">Phone Number</label>
                                <Form.Item 
                                    name="phone" 
                                    rules={[{
                                                required: true,
                                                message: "Please enter your phone number"
                                            }]} 
                                >
                                    <Input placeholder="Enter your phone number" className='w-100' style={{padding:"1.3rem"}} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row >
                            <Col xl='5' className='offset-lg-1 mb-0' >
                                <label className="text-muted">Gender</label>
                                <Form.Item 
                                    name="gender" 
                                    rules={[{
                                                required: true,
                                                message: "Please select your gender"
                                            }]} 
                                >
                                     <div>                           
                                        <Radio.Group>
                                            <Radio.Button value="male">Male</Radio.Button>
                                            <Radio.Button value="female">Female</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </Form.Item>
                            </Col>
                            <Col xl='5' className="offset-lg-1 offset-xl-0 mb-0" >
                                <label className="text-muted">Marital status</label>
                                <Form.Item 
                                    name="marital_status" 
                                    rules={[{
                                                required: true,
                                                message: "Please select your marital status"
                                            }]} 
                                >
                                    
                                    <Select placeholder="Select your marital status">
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row >
                            <Col md='6' lg='5' className='offset-lg-1 mb-0' >
                                <label className="text-muted">Password</label>
                                <Form.Item 
                                    name="password" 
                                    rules={[{
                                                required: true,
                                                message: "Please enter your password"
                                            }]} 
                                >
                                    <Input placeholder="Enter your password" type="password" className='w-100' style={{padding:"1.3rem"}} />
                                </Form.Item>
                            </Col>
                            <Col md='6' lg='5' className="mb-0" >
                                <label className="text-muted">Confirm Password</label>
                                <Form.Item 
                                    name="confirm_password" 
                                    rules={[{
                                                required: true,
                                                message: "Please enter your confirm password"
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(rule, value) {
                                                  if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                  }
                                                  return Promise.reject('Confirm passowrd you entered does not match password field');
                                                },
                                              })
                                            ]} 
                                >
                                    <Input placeholder="Enter your confirm password" type="password" className='w-100' style={{padding:"1.3rem"}} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" className="text-center pt-3 mb-4">

                                <p>
                                    
                                    <Form.Item
                                        name="agreement"
                                        valuePropName="checked"
                                        rules={[
                                            { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Accept Terms of use') },
                                        ]}
                                    >
                                                                
                                        <Checkbox>
                                            I agree to Kwaba's <a href="" className="text-primary">T&Cs</a> and <a href="" className="text-primary">Privacy Policy</a>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="btn-lg px-4 my-2" style={{minHeight: "40px", backgroundColor:"#5B55FF"}}>
                                            Create Account
                                        </Button>
                                    </Form.Item>

                                    <p className="text-center text-muted mb-5 font-weight-bold">
                                        Already have an account? <a href="" className="text-primary">Sign in</a>

                                    </p>

                                </p>


                            </Col>
                        </Row>


                    </Form>

                  
                    </Container>
                  
                </Container>
            </Col>
        </Row>)
}

export default SignupForm;