import React, { Component } from 'react'
import styled from 'styled-components'
import {v4 as uuidv4} from 'uuid' 

export default class Navbar extends Component {

    item = ["about" , "skill" , "exp" , "works" , "blogs" , "msg"];
    render() {
        return (
            <NavbarWrapper>
                {this.item.map(name => 
                    <img src       = {`${process.env.PUBLIC_URL}/asset/${name}.svg`} 
                         className = {name}
                         key       = {uuidv4()}/>
                )}
            </NavbarWrapper>
        )
    }
}
const NavbarWrapper = styled.div`
    display : flex;
    flex-direction : column;
    width : 32px;
    position: fixed;
    right: 1rem;
    height : 100%;
    justify-content: center;
    z-index:999;

    img{
        width: 100%;
        margin : .5rem 0;

        &.msg{
            position:absolute;
            bottom : 1rem;
        }
    }

`
