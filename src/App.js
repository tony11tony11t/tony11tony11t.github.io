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

    constructor(props) {
        super(props);

        this.AboutRef = React.createRef();
        this.SkillRef = React.createRef();
        this.ExpRef   = React.createRef();
        this.WorksRef = React.createRef();
        this.BlogsRef = React.createRef();
    }

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
        <Navbar refArray = {[this.AboutRef , this.SkillRef , this.ExpRef , this.WorksRef , this.BlogsRef]}/>
        <SectionWrapper>
            <Index />
        </SectionWrapper>
        <SectionWrapper bg="about" mask={true}  ref = {this.AboutRef}>
            <About />
        </SectionWrapper>
        <SectionWrapper ref = {this.SkillRef}>
            <Skill />
        </SectionWrapper>
        <SectionWrapper bg="exp" scale = {"fit"} mask = {true} ref = {this.ExpRef}>
            <Exp />
        </SectionWrapper>
        <SectionWrapper ref = {this.WorksRef}>
            <Works />
        </SectionWrapper>
        <SectionWrapper mask = {true} ref = {this.BlogsRef}>
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


