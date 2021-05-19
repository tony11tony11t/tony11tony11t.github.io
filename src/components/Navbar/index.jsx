import React, { Component } from 'react'
import styled from 'styled-components'
import { ReactComponent as IconAbout } from '../../svg/about.svg'
import { ReactComponent as IconSkill } from '../../svg/skill.svg'
import { ReactComponent as IconExp } from '../../svg/exp.svg'
import { ReactComponent as IconWorks } from '../../svg/works.svg'
import { ReactComponent as IconBlogs } from '../../svg/blogs.svg'
import { ReactComponent as IconMsg } from '../../svg/msg.svg'
import {v4 as uuidv4} from 'uuid'

export default class Navbar extends Component {

    state = {
        aboutStroke : null,
        skillStroke : null,
        expStroke   : null,
        worksStroke : null,
        blogsStroke : null,
    }

    clear = () => {
        this.setState({
            aboutStroke : null,
            skillStroke : null,
            expStroke   : null,
            worksStroke : null,
            blogsStroke : null,
        })
    }

    componentDidMount = () => {
        
        window.addEventListener("scroll" , _ => {

            const {refArray} = this.props;
            
            let tops = refArray.map(ref => ref.current.getBoundingClientRect().top);

            
            this.clear();

            if(tops[4] == 0){
                this.setState({blogsStroke : "#0692CE"})
            }else if(tops[3] < 0){
                this.setState({worksStroke : "#0692CE"})
            }else if(tops[2] < 0){
                this.setState({expStroke   : "#0692CE"})
            }else if(tops[1] < 0){
                this.setState({skillStroke : "#0692CE"})
            }else if(tops[0] < 0){
                this.setState({aboutStroke : "#0692CE"})
            }
            
        })
    }

    render() {
        const {aboutStroke , skillStroke , expStroke , worksStroke , blogsStroke} = this.state;
        return (
            <NavbarWrapper>
                <IconAbout stroke={aboutStroke} className = {aboutStroke ? "select" : null}/>
                <IconSkill stroke={skillStroke} className = {skillStroke ? "select" : null}/>
                <IconExp   stroke={expStroke}   className = {expStroke   ? "select" : null}/>
                <IconWorks stroke={worksStroke} className = {worksStroke ? "select" : null}/>
                <IconBlogs stroke={blogsStroke} className = {blogsStroke ? "select" : null}/> 
                <IconMsg className = "msg"/> 
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

    svg{
        padding: .6rem 0;
        transition : all .5s;

        &.msg{
            position : absolute;
            bottom : 1rem;
        }
        
        &.select{
            transform : scale(1.4);
        }
    }

`
