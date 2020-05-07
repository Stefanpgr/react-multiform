import React from 'react'
import styled from 'styled-components'

const NavWrapper = styled.div `
width: 567px;
height: 35px;
margin: auto !important;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;

`

const AppBar = () => {
return(
    <div>
        <NavWrapper/>
    </div>
)
}

export default AppBar;