import React, { Component } from 'react'
import styled , {keyframes} from 'styled-components'
import theme from '../../../theme/theme'

export default class Skill extends Component {

    tempLeft = null;

    state = {
        offsetX : 0,
        offsetY : 0,
        percent : 0
    }

    skill = [{
        label : "React-native",
        level : 1,
        left : 45
    },{
        label : "photoshop",
        level : 2,
        left : 14
    },{
        label : "Sass",
        level : 1,
        left : 84
    },{
        label : "arduino",
        level : 3,
        left : 54
    },{
        label : "css",
        level : 1,
        left : 10
    },{
        label : "HTML",
        level : 1,
        left : 31
    },{
        label : "React",
        level : 1,
        left : 76
    },{
        label : "PHP",
        level : 2,
        left : 13
    },{
        label : "JavaScript",
        level : 1,
        left : 48
    },{
        label : "adobe xd",
        level : 2,
        left : 90
    },{
        label : "android",
        level : 3,
        left : 27
    },{
        label : "wordpress",
        level : 2,
        left : 62
    },{
        label : "mySQL",
        level : 3,
        left : 8
    }]


    createSkill = (info , index) => {
        let {offsetX , offsetY} = this.state;

        let top = (index + 1) / this.skill.length * 90 + (offsetY * (4 - info.level) * 0.3);
        let left = info.left + (offsetX * (4 - info.level) * 0.3)

        let changePercent = (level = 4) => {
            this.setState({percent : (4 - level) * 30});
        }

        return  <SkillItem  className       = {`level${info.level}`} 
                            style           = {{top : `${top}%` , left : `${left}%`}} 
                            onMouseEnter    = {changePercent.bind(this , info.level)}
                            onMouseLeave    = {changePercent.bind(this , 4)}
                            percent         = {(4 - info.level) * 30}>
                    {info.label}
                </SkillItem>
    }

    MouseMoveHandler = (e) => {
        const {offsetY , offsetX} = this.state;

        let newX = (e.movementX > 0 ? -1 : 1)  + offsetX;
        let newY = (e.movementY > 0 ? -1 : 1)  + offsetY;

        this.setState({
            offsetX : newX > 3 ? 3 : (newX < -3 ? -3 : newX),
            offsetY : newY > 3 ? 3 : (newY < -3 ? -3 : newY)
        })
    }

    render() {
        return (
            <Main>
                <BgTitle percent={this.state.percent}>
                    <h1>Skill</h1>
                    <p>大學開始接觸前端語言，從jQuery到原生js，學習了後端PHP+mySQL的基本知識，了解前後是如何串接。學習了android，了解app如何建立，並將此與網頁結合，利用cordova製作出hybrid app-mochi。學習了arduino，製作出實體互動裝置，並將前後端知識與此串聯，做出大學畢製作品-阿那納斯。</p>
                    <p>大學生涯除了學習，也有接到幾個利用wordpress來架設與維護網站的案子，藉此了解如何使用。實習路上也有接觸到同樣是CMS的Drupal，讓我對這些CMS有更深入的了解。</p>
                    <p>畢業後，繼續補足js技巧，並開始學習主流框架React和一些開發套件，例如Sass、pug、D3.js、p5.js等。除此之外，利用對於app的基本知識，開始學習React-native來開發原生app。</p>
                    <p>未來目標是繼續研讀更底層的演算法和資料結構和一些主流的開發模式等，加深自己的基本功。</p>
                </BgTitle>
                <SkillContainer onMouseMove = {this.MouseMoveHandler}>
                    {this.skill.map((info , i) => this.createSkill(info , i))}
                </SkillContainer>
            </Main>
        )
    }
}

const Main = styled.div`
    z-index : 10;
    position:relative;
    height : 100%;
    display : flex;
    margin : 0  10% 0 5%;
    align-items : center;
`

const BgTitle = styled.div`

    flex : 1;
    position :relative;
    
    h1{
        font-size : ${_ => `${20 + window.innerWidth *0.06}px`};
        margin : 0;
        opacity : 0.3;
        z-index: 10;
        position: relative;
        background-image: -webkit-linear-gradient(top, white 53% , #0692CE 53%, #0692CE 100%);
        background-repeat: no-repeat;
        background-position: 0 ${({percent}) => `${percent}%`};
        background-size: 100% 165%;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transition : all 1s;
    }
    h2{
        font-size : ${_ => `${window.innerWidth *0.02}px`};
        text-align:center;
        margin : 0;
        color : ${({theme}) => theme.colors.white};
        opacity : ${({percent}) => percent != 0 ? 1 : 0};
    }

    p{
        color : ${({theme}) => theme.colors.white};
        opacity : 0.7;
        font-size : 1rem;
        margin-top: 0;
        margin-bottom : 1.5rem;
        line-height : 1.8rem
    }
`



const SkillContainer = styled.div`
    height: 100%;
    margin: auto;
    position:relative;
    flex : 0 0 60%;
    
`

const SkillItem = styled.h3`
    color:${({theme}) => theme.colors.main};
    font-size: ${_ => `${20 + window.innerWidth *0.01}px`};
    margin:0;
    position:absolute;
    white-space : nowrap;
    transition : all 1s;
    cursor : default;

    &.level2{
        color:${({theme}) => theme.colors.main};
        opacity:0.7;
        font-size: ${_ => `${15 + window.innerWidth *0.01}px`};
    }

    &.level3{
        color:${({theme}) => theme.colors.main};
        opacity:0.4;
        font-size: ${_ => `${10 + window.innerWidth *0.01}px`};
    }

    &:hover{
        text-shadow: ${({theme}) => `${theme.colors.main} 0px 0px 20px`};

        &::before{
            content : ${({percent}) => `'${percent}%'`};
            display : block;
            text-align : center;
            font-size : 1rem;
            position :absolute;
            top : -1.2rem;
            left : 50%;
            transform : translateX(-50%)
        }
    }

    

    
`


