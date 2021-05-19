import React, { Component } from 'react'
import styled from 'styled-components'

export default class Index extends Component {
    render() {
        return (
            <Main>
                <img src={`${process.env.PUBLIC_URL}/asset/main.jpg`}/>
                <TitleContainer>
                    <h1><span>I'm</span> Tony</h1>
                    <h2>Front-end Developer</h2>
                </TitleContainer>
            </Main>
        )
    }
}

const Main = styled.div`

    display : flex;
    height:100%;
    align-items:center;

    img{
      width:1px;
      z-index:10;
      position:relative;
      margin-left: 10%;
      box-shadow : rgba(0,0,0,0.16) -10px -10px 20px;
      flex : 1;
      height:fit-content;
      min-width: 500px;
    }

    &::before{
      content: "";
      width : 45%;
      height : ${_ => `${window.innerHeight - 100}px`};
      display:block;
      position:absolute;
      background-color:${props => props.theme.colors.main};
      z-index:1;
      top:0;
    }

`

const TitleContainer = styled.div`
    flex : 1;
    left: -10%;
    position: relative;
    z-index:11;
    align-self: center;

    h1{
      color : ${props => props.theme.colors.main};
      font-size : ${_ => `${window.innerWidth / 10}px`};
      margin : 0;
      text-align : right;
      span{
        color : ${props => props.theme.colors.white};
      }
    }

    h2{
      color : ${props => props.theme.colors.main};
      text-align : right;
      font-size : ${_ => `${window.innerWidth / 50}px`};
    }
`
