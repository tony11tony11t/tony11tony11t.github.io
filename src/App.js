import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Index from './components/Section/Index'
import About from './components/Section/About'
import Skill from './components/Section/Skill'
import Exp from './components/Section/Exp'
import Works from './components/Section/Works'
import Blogs from './components/Section/Blogs'

export default class App extends Component {

  state = {
    width : window.innerWidth,
    height : window.innerHeight
  }

  reSize = () => {
    this.setState({
      width  : window.innerWidth,
      height : window.innerHeight
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.reSize);
  }
  
  render() {
    return (
      <>
        <Navbar />
        <SectionWrapper>
            <Index />
        </SectionWrapper>
        <SectionWrapper bg="about" mask={true}>
            <About />
        </SectionWrapper>
        <SectionWrapper scale = {1}>
            <Skill />
        </SectionWrapper>
        <SectionWrapper bg="exp" scale = {"fit"} mask={true}>
            <Exp />
        </SectionWrapper>
        <SectionWrapper scale = {"fit"}>
            <Works />
        </SectionWrapper>
        <SectionWrapper scale = {"fit"} mask={true}>
            <Blogs />
        </SectionWrapper>
      </> 
    )
  }
}
const SectionWrapper = styled.section`
  width:calc(100% - 3.5rem);
  height:${({scale}) => scale == "fit" ? "fit-content" : `${window.innerHeight * (scale ?? 1)}px`};
  background-image : ${({bg}) => `url(${process.env.PUBLIC_URL}/asset/bg_${bg}.png)`};
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding-right:3.5rem;

  &::before{
    content: "";
    display:${({mask}) => mask ? "block" : "none"};
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(38,38,38,0.8);
    width:100%;
    height:100%;
  }
`;


