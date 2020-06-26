import React from 'react'
import styled from "styled-components";
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import modal from './modal.scss'
import {ArrowRightOutlined} from '@ant-design/icons'

export default function FormModal({onClick}) {

   const SelectBtn = styled.button`
      width: 140px;
      height: 50px;
      background: #e7f7ff 0% 0% no-repeat padding-box;
      border: 1px solid #51a4fb;
      border-radius: 5px;
      opacity: 1;
      color: #51a4fb;
      margin: 10px 0px 10px 0px;
   `;


   const Button = styled.button`
      width: 45px;
      height: 50px;
      background: #51a4fb 0% 0% no-repeat padding-box;
      border: 0;
      border-radius: 5px;
      opacity: 1;
      color: #fff;
   `;

   const ContinueBtn = styled.button`
      width: 130px;
      height: 50px;
      background: #f5f5f5 0% 0% no-repeat padding-box;
      border: 0;
      border-radius: 5px;
      opacity: 1;
      color: #d3d3d3;
      text-transform: 'capitalize';
      font-size: 17px;
      outline: 'none';
      margin-top: 30px;
   `;

   

  return (
    <div style={{backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <div style={{paddingBottom: 50, paddingTop: 50}}>
         <h3 style={{fontWeight: 'bold', fontSize: 20, lineHeight: 1}}>Select a payment amount</h3>
         <p style={{lineHeight: 1, color: '#868786'}}>lorem lorem lorem lorem lorem lorem lorem</p>

         <div className=" row col-md-4 mx-auto" style={{ marginBottom: 16}}>
         <div className="col-md-10">
            <Input addonBefore="₦" type="number" defaultValue="" />
         </div>
         <div className="col-md-2">
            <Button>
               <ArrowRightOutlined style={{fontSize: '20px'}} />
            </Button>
         </div>
      </div>
      </div>

      <h3 style={{fontWeight: 'lighter', fontSize: 20, lineHeight: 1, color: '#868786', marginBottom: '50px'}}>Select a payment option</h3>
      
      <div className="row ml-3 mr-3">
         <div className="col-md-4 col-lg-4 ">
            <div style={{borderRadius: 10, borderColor: 'blue', background: '#fff'}}className="payment-card text-center">
               <div className="text-center justify-content-center" style={{paddingBottom: 20, backgroundColor: "#e7f7ff", justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                  <p className="optionone">Option 1</p>
               
               <p style={{fontSize: 14, lineHeight: 1, marginTop: '20px'}}>Pre-approved amount</p>
               <h1 style={{fontSize: 27, fontWeight: '800', lineHeight: 1, marginBottom: '40px'}}>₦600,00</h1>
               </div>
               <div style={{padding: 20}}>
               <div className="row pb-3">
               <div className="col-md-6 text-left">
                  <p style={{fontSize: 12}}>Pre-approved amount</p>
               </div>
               <div className="col-md-6 text-right">
                  <h5 style={{fontSize: 14, fontWeight: '700'}}>₦100,000</h5>
               </div>

               <div className="col-md-6 text-left">
                  <p style={{fontSize: 12}}>Pre-approved amount</p>
               </div>
               <div className="col-md-6 text-right">
                  <h5 style={{fontSize: 14, fontWeight: '700'}}>₦100,000</h5>
               </div>

               <div className="col-md-6 text-left">
                  <p style={{fontSize: 12}}>Pre-approved amount</p>
               </div>
               <div className="col-md-6 text-right">
                  <h5 style={{fontSize: 14, fontWeight: '700'}}>₦100,000</h5>
               </div>
               </div>
               <SelectBtn>Select</SelectBtn>
               </div>
            </div>
         </div>
      </div>

      <div className="text-right">
         <ContinueBtn onClick={() => onClick()}>Continue</ContinueBtn>
      </div>
    </div>
  )
}
