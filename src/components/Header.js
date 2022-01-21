import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />

            </a>
            <Menu>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model Y</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>

            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container=styled.div`
    min-height:60px;
    display:flex;
    position:fixed;
    align-items:center;
    padding:0 50px;
    top:8%;
    left:0;
    right:0;

`
const Menu=styled.div`
    display:flex;
    align-items:Center;
    justify-content:Center;
    flex:1;
    margin-left:90px;

    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }
`

const RightMenu=styled.div`
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
`