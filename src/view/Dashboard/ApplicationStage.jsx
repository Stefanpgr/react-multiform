import React, { useState, useEffect } from "react";

import { Container, Card } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import ProcessAppl from "./pages/ProcessAppl";
import Contract from "./pages/Contract";
import Congrats from "./pages/Congrats";
import Offer from "./pages/Offer";
import AppBar from "./AppProgressBar";
import CongratsPay from "./pages/CongratsPay";
import SetupPay from "./pages/SetupPay";
import RemitaDoc from "./pages/Remita";
import UserTopNav from "../UserTopNav";
import FooterCommon from "../Partials/FooterCommon";

const { Footer, Header } = Layout;
const ApplicationStage = () => {
  const [current, setCurrent] = useState(0);
  // const [progress, setProgress]

  const getAppl = async () => {
    dispatch({
      type: "CLEAR_APPL",
    });
    const url = "https://rentcrowdyapi.herokuapp.com";
    // const url = "https://kwaba.com.ng";
    // const url = "http://localhost:8888";
    try {
      const { data, status } = await axios.get(`${url}/api/renter/rnpl/get`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      console.log(data, "DATA");
      if (status === 200) {
        dispatch({
          type: "GET_APPL",
          data,
        });
        if (data.status == 2) {
          next(1);
        }
        console.log(data);
      } else {
        throw new Error();
      }
    } catch (e) {
      if (e.response) {
        console.log(e.response);
      } else {
        console.log(e, "error");
      }
    }
  };

  useEffect(() => {
    getAppl();
  }, []);

  const dispatch = useDispatch();
  const next = (set) => {
    const curr = current + 1;
    setCurrent(curr);
    if (set >= 0) {
      setCurrent(set);
    }
    dispatch({
      type: "DASHPAGE_CHANGE",
      data: set || curr,
    });
    console.log(current, "next");
  };

  const goto = (set) => {
    setCurrent(set);
    dispatch({
      type: "DASHPAGE_CHANGE",
      data: set,
    });
  };

  const prev = () => {
    const curr = current - 1;
    setCurrent(curr);
    console.log(current, "prev");
    dispatch({
      type: "DASHPAGE_CHANGE",
      data: curr,
    });
  };
  const steps = [
    {
      title: "Processing Application",
      content: <ProcessAppl next={next} current={current} />,
    },
    {
      title: "Employment Details",
      content: <Congrats next={next} prev={prev} current={current} />,
    },
    {
      title: "Financial Information",
      content: <Offer next={next} prev={prev} current={current} />,
      sub: "Give us information about your finance",
    },
    {
      title: "Financial Information",
      content: <Contract next={next} prev={prev} current={current} />,
      sub: "Give us information about your finance",
    },
    {
      title: "Financial Information",
      content: <CongratsPay next={next} prev={prev} current={current} />,
      sub: "Give us information about your finance",
    },
    {
      title: "Financial Information",
      content: <SetupPay next={next} prev={prev} current={current} />,
      sub: "Give us information about your finance",
    },
    {
      title: "Financial Information",
      content: <RemitaDoc next={next} prev={prev} current={current} />,
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
    <div style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <UserTopNav />
      <div style={{ width: "100%", margin: "auto" }}>
        <Container
          className="mt-2 mb-3"
          style={{ backgroundColor: "#ffff", margin: "auto" }}
        >
          <AppBar className="mb-5" />
        </Container>
        <div className="container">
          <Card
            style={{
              minHeight: "410px",
              backgroundColor: "#ffff",
              margin: "auto",
              // width: "550px",
              // marginRight: "300px",
              // marginLeft: "300px",
              border: "none",
              // overflow: "scroll",
            }}
            className="m-view-app-process"
          >
            <Card.Body>
              {/* <Container fluid> */}
              <div className="steps-action">{steps[current].content}</div>
              {/* </Container> */}
            </Card.Body>
          </Card>
        </div>
      </div>
      <FooterCommon />
    </div>
  );
};

export default ApplicationStage;
