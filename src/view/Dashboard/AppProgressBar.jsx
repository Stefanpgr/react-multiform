import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100%;
  height: 35px;
  margin: auto !important;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const AppBar = () => {
  return (
    <div>
      <NavWrapper />
    </div>
  );
};

export default AppBar;
