import React, { useState, useEffect } from "react";
import { Divider, Button } from "antd";
import { useSelector } from "react-redux";
export const BottomNav = ({ prev, current, accm }) => {
  const [curr, setCurr] = useState(false);
  const [checkPage, setPage] = useState();
  const { currPage } = useSelector((state) => ({
    currPage: state.application.currPage,
  }));
  console.log(current, "curre");
  const getCurrent = () => {
    if (current === 0) setCurr(true);

    return 0;
  };

  useEffect(() => {
    getCurrent();
  });

  return (
    <div>
      <Divider />
      <div className="steps-action">
        <Button
          style={{ width: "24%" }}
          className="btn-form"
          size="large"
          onClick={() => prev()}
          disabled={curr}
        >
          Back
        </Button>{" "}
       { (accm === "I'm still searching" && currPage ===3) ? (<Button
          size="large"
          htmlType="button"
          type="primary"
          className="btn-form"
          
        >
          Save
        </Button>):(<Button
          size="large"
          htmlType="submit"
          type="primary"
          className="btn-form"
          
        >
          {currPage == 5 ? "Finish" : "Continue"}
        </Button>)}
      </div>
    </div>
  );
};
