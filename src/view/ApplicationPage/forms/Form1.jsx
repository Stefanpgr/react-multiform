import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { Container, Col, InputGroup, FormControl } from "react-bootstrap";
import { Radio, Form, InputNumber } from "antd";
import { getBanks } from "../../../actions/paystack";
import { BottomNav } from "../BottomNav";
import { sendApplication } from "../../../actions/application";
import styled from "styled-components";

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 24 },
};

const StyledSwitch = styled.button`
  width: 80px;
  height: 79px;
  background: #e7f7ff 0% 0% no-repeat padding-box;
  border: 1px solid #5b55ff;
  border-radius: 5px;
  opacity: 1;
`;

const StyledRadio = styled.button`
  background: ${(props) => (props.switch === props.stat ? "#e7f7ff" : 0)};

  border: ${(props) => (props.switch === props.stat ? "1px solid #5b55ff" : 0)};

  border-radius: 5px;
  font-family: Rubik, "sans-serif";
  color: #878787;
  opacity: 1;
  padding: 9px 0px 8px 15px;
`;

const Form1 = ({
  next,
  current,
  payment_option,
  getBanks,
  sendApplication,
  user,
}) => {
  const [accStat, setAcc] = useState("");
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const validateMessages = {
    required: "This field is required!",
    types: {
      email: "Not a validate email!",
      number: "Not a validate number!",
    },
    number: {
      range: "Must be between ${min} and ${max}",
    },
  };

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('payment'));

    window.scrollTo(0, 0);
    getBanks();
    if (payment_option) {
      // const {payment} = data
      setAcc(payment_option.acct_stat);
      form.setFieldsValue({
        acct_stat: payment_option.acct_stat,
        rent_request: payment_option.rent_request,
        salary: payment_option.salary,
      });
    }
  }, [form]);

  const onFinish = async (fielValues) => {
    console.log("Received values of form: ", fielValues);

    const values = {
      payment_option: { ...fielValues },
      page: 0,
    };
    // console.log('Received values of form: ', values);
    // if(payment){
    // 	if(payment.filled) return next()
    // }

    dispatch({
      type: "ADD_APPL",
      data: values,
    });
    await sendApplication(values, "payment-option");
    // const data = JSON.stringify(values);
    // localStorage.setItem("payment", data);
    next();
  };
  const format = (val) => {
    const result = `${val.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    return result;
  };
  return (
    <div style={{ maxWidth: "782px" }}>
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        layout="vertical"
      >
        {/* <small>Step 1</small>
				<Head className="mb-2">Payment Option</Head>

				<ProgressBar now={25} className="mb-2" /> */}
        <Form.Item
          name={["acct_stat"]}
          label="What’s your accommodation status?"
          rules={[{ required: true }]}
        >
          <Radio.Group
            onChange={(e) => {
              setAcc(e.target.value);
            }}
            name="radiogroup"
          >
            <StyledRadio
              type="button"
              className="mr-3 fg"
              switch="Looking to renew my rent"
              stat={accStat}
            >
              <Radio className="fg" value="Looking to renew my rent">
                Looking to renew my rent
              </Radio>
            </StyledRadio>

            <StyledRadio
              type="button"
              className="mr-3"
              switch="Want to pay for a new place"
              stat={accStat}
            >
              <Radio value="Want to pay for a new place">
                Want to pay for a new place
              </Radio>
            </StyledRadio>

            <StyledRadio
              type="button"
              switch="I'm still searching"
              stat={accStat}
            >
              <Radio value="I'm still searching">I'm still searching</Radio>
            </StyledRadio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name={["rent_request"]}
          label="How much is your rent request amount?"
          rules={[{ required: true }]}
        >
          {/* <InputGroup style={{ width: '50%' }}>
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon1">₦</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl type='number' placeholder="Enter amount" aria-label="Username" aria-describedby="basic-addon1" />
				</InputGroup> */}
          <InputNumber
            style={{ width: "50%" }}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            placeholder="Enter amount"
          />
        </Form.Item>

        <Form.Item
          name={["salary"]}
          label="How much do you earn monthly?"
          rules={[{ required: true }]}
        >
          <InputNumber
            style={{ width: "50%" }}
            formatter={(value) => format(value)}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            addonBefore="₦"
            placeholder="Enter amount"
          />
        </Form.Item>
        <p className="p-question mt-3">Choose a monthly plan</p>
        <StyledSwitch type="button" className="mr-4">
          <Col>
            <strong className="switch-text">1</strong>
          </Col>
          <Col>
            <p className="switch-text">Month</p>
          </Col>{" "}
        </StyledSwitch>
        <StyledSwitch type="button" className="mr-4">
          <Col>
            <strong className="switch-text">3</strong>
          </Col>
          <Col>
            <p className="switch-text">Months</p>
          </Col>{" "}
        </StyledSwitch>
        <StyledSwitch type="button">
          <Col>
            <strong className="switch-text">6</strong>
          </Col>
          <Col>
            <p className="switch-text">Months</p>
          </Col>{" "}
        </StyledSwitch>

        <p className="mt-3">See payment breakdown ></p>
        {/* <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
					<Form.Item>
						{' '}
						<Radio.Group onChange={(e) => setAcc(e.target.value)} name="radiogroup" defaultValue={1}>
							<StyledRadio className="mr-3">
								<Radio value={1}>Looking to renew my rent</Radio>
							</StyledRadio>

							<StyledRadio className="mr-3">
								<Radio value={2}>Want to pay for a new place</Radio>
							</StyledRadio>

							<StyledRadio>
								<Radio value={3}>I'm still searching</Radio>
							</StyledRadio>
						</Radio.Group>
					</Form.Item>

					<Form.Item className="p-question">How much is your rent request amount?</Form.Item>
					<br />
					<Form.Item
						name="salary"
						rules={[ { required: true, message: 'Please input your salary amount!' } ]}
					>
						<Input addonBefore="http://" placeholder="Enter Amount" />
					</Form.Item>
				</Form> */}
        <BottomNav current={current} />
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  payment_option: state.application.payment_option,
  user: state.user,
});

export default connect(mapStateToProps, { getBanks, sendApplication })(Form1);
