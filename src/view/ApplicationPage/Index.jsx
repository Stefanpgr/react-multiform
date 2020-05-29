import React, { useState, useEffect } from "react";
import AppSidebar from "./AppSidebar";
import { Row, Col, Container } from "react-bootstrap";
import { Heading } from "./forms/Header";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import UserTopNav from "../UserTopNav";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";
import Form4 from "./forms/Form4";
import Form5 from "./forms/Form5";
import Form6 from "./forms/Form6";

const { Content, Footer, Sider, Header } = Layout;
const Application = ({ application }) => {
  const [current, setCurrent] = useState(0);

  // const [progress, setProgress]
  const dispatch = useDispatch();
  const next = (set) => {
    const curr = current + 1;
    setCurrent(curr);
    if (set >= 0) {
      setCurrent(set);
    }
    dispatch({
      type: "PAGE_CHANGE",
      data: set || curr,
    });
    console.log(current, "next");
  };
  const goto = (set) => {
    setCurrent(set);
    dispatch({
      type: "PAGE_CHANGE",
      data: set,
    });
  };

  useEffect(() => {
    // goto(application.last_filled);
  });

  const prev = () => {
    const curr = current - 1;
    setCurrent(curr);
    console.log(current, "prev");
    dispatch({
      type: "PAGE_CHANGE",
      data: curr,
    });
  };
  const steps = [
    {
      title: "Payment Option",
      content: <Form1 next={next} current={current} />,
      sub: "Tell us a bit about what you do",
    },
    {
      title: "Employment Details",
      content: <Form2 next={next} prev={prev} current={current} />,
      sub: "Tell us a bit about what you do",
    },
    {
      title: "Financial Information",
      content: <Form3 next={next} prev={prev} current={current} />,
      sub: "Give us information about your finance",
    },
    {
      title: "Rent Information",
      content: <Form4 next={next} prev={prev} current={current} />,
      sub: "We will like to know about your rent",
    },
    {
      title: "Landlord details",
      content: <Form5 next={next} prev={prev} current={current} />,
      sub: "Give us details about your landord",
    },
    {
      title: "Referee details",
      content: <Form6 next={next} prev={prev} current={current} />,
      sub: "Give us information about your finance",
    },
  ];
  const getProgress = () => {
    const progress = Math.round(100 / 6) * (current + 1);
    if (progress > 100) {
      return 100;
    }
    return progress;
  };
  return (
    <div className="">
      <Layout>
        {/* <Layout className="site-layout"> */}
        <UserTopNav />
        <Row style={{ width: "100%", padding: "0px 0px 0px 15px" }}>
          <Col style={{ width: "100%", flex: 1 }} className="sider-nav hide">
            <div style={{ position: "sticky", top: "95px" }}>
              <AppSidebar
                goto={goto}
                current={current}
                progress={getProgress()}
              />
            </div>
          </Col>

          <Col
            className="site-layout-background form-wraper"
            style={{
              width: "100%",
              flex: 4,
              // margin: 0,
              // minHeight: 280,
            }}
          >
            <div className="form-wraper-content">
              <Heading
                step={current + 1}
                progress={getProgress()}
                title={steps[current].title}
                sub={steps[current].sub}
              />
              <div className="steps-action">{steps[current].content}</div>
            </div>
          </Col>
          {/* </Col>
			</Row> */}
        </Row>
        <Footer>Footer</Footer>
        {/* </Layout> */}
      </Layout>
    </div>
  );
};

export default Application;
