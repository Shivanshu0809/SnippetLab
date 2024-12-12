import React from 'react'
import {AppBar, styled, Toolbar} from '@mui/material';
// import App from '../App';

const Container = styled(AppBar)`
background:#060606;
height:9vh;
position: static;
font-weight:700;
text-shadow:0px 5px 5px
`

const Header = () => {
  return (
    <Container>
        <Toolbar>SnippetLab</Toolbar>
    </Container>
  )
}

export default Header;