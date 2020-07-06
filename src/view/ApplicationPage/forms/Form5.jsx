import React, { useState, useEffect } from "react";
import { Form, Input, Select } from "antd";
import { useDispatch, connect } from "react-redux";
// import CurrencyFormat from 'react-currency-format'
import { sendApplication } from "../../../actions/application";

import { BottomNav } from "../BottomNav";

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 16 },
};
const Form5 = (props) => {
  const [form] = Form.useForm();
  const { next, prev, landlord_details, rent_info, banks, sendApplication } = props;
  const dispatch = useDispatch();
 
  const validateMessages = {
    required: "This field is required!",
    types: {
      email: "Not a valid email!",
      number: "Not a valid number!",
    },
    number: {
      range: "Must be between ${min} and ${max}",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // const data = JSON.parse(localStorage.getItem('referee'));
    if (landlord_details) {
      form.setFieldsValue({
        landlord_full_name: landlord_details.landlord_full_name,
        landlord_acct_num: landlord_details.landlord_acct_num,
        landlord_bankname: landlord_details.landlord_bankname,
        landlord_phone_num: landlord_details.landlord_phone_num,
      });
    }
  }, [form]);

  const onFinish = (fielValues) => {
    console.log("Received values of form: ", fielValues);

    const values = {
      landlord_details: { ...fielValues },
      page: 4,
    };
    dispatch({
      type: "ADD_APPL",
      data: values,
    });
    sendApplication(values, "landlord-details");
    next();
  };

  return (
    <Form
      form={form}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
    >
      <Form.Item
        name={["landlord_full_name"]}
        label={`${rent_info.rent_collector}'s full name`}
        rules={[{ required: true }]}
      >
        <Input style={{ width: "58%" }} placeholder={`Enter ${rent_info.rent_collector}'s full name`} />
      </Form.Item>

      <Form.Item
        name={["landlord_acct_num"]}
        label="Bank account number"
        rules={[{ required: true }]}
      >
        <Input style={{ width: "58%" }} placeholder="Enter account number" />
      </Form.Item>

      <Form.Item
        name={["landlord_bankname"]}
        label="Bank name"
        rules={[{ required: true }]}
      >
        <Select size="large" style={{ width: "58%" }} placeholder="Bank Name">
          {banks.map((e, i) => (
            <Select.Option key={i} value={e.name}>
              {e.name}
            </Select.Option>
          ))}
        </Select>

        {/* <Select  style={{ width: '58%' }} placeholder='Bank Name' ><Select.Option  value='Access'>
							Access
						</Select.Option>
						
						</Select> */}
      </Form.Item>

      <Form.Item
        name={["landlord_phone_num"]}
        label={`${rent_info.rent_collector}'s phone number`}
        rules={[{ required: true }]}
      >
        <Input placeholder={`${rent_info.rent_collector}’s phone number`} />
      </Form.Item>
      <BottomNav prev={prev} />
    </Form>
  );
};

const mapStateToProps = (state) => ({
  landlord_details: state.application.landlord_details,
  rent_info: state.application.rent_info,
  banks: state.paystack.banks,
});

export default connect(mapStateToProps, { sendApplication })(Form5);
