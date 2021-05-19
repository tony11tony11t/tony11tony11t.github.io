import React, { Component } from 'react'
import styled from 'styled-components'
import data from '../../../data.json'

export default class Exp extends Component {


    createSection = (title , content , index) => {

        return (
            <Section>
                <div className = "section_left section">
                    {index % 2 == 1 ? 
                    (<>
                        <h2>{title}</h2>
                        <h3>{content}</h3> 
                    </>) : 
                    null}
                </div>
                <div className = "section_right section">
                    {index % 2 == 0 ? 
                    (<>
                        <h2>{title}</h2>
                        <h3>{content}</h3> 
                    </>) : 
                    null}
                </div>
            </Section>
        )
    }

    render() {
        return (
            <Main>
                <h1>2018</h1>
                {data.exp[0].map((info , i) => this.createSection(info.title , info.content , i))}
                <h1>2019</h1>
                {data.exp[1].map((info , i) => this.createSection(info.title , info.content , i + 1))}
                <h1>2020</h1>
                {data.exp[2].map((info , i) => this.createSection(info.title , info.content , i + 1))}
            </Main>
        )
    }
}
const Section = styled.div`
    display : flex;
    width : 80%;
    height : fit-content;
    margin : auto;

    .section{
        flex : 1;
        background-color : transparent;

        h2{
            font-size : ${_ => `${15 + window.innerWidth *0.005}px`};
            color : ${({theme}) => theme.colors.white};
            position : relative;

            &::before{
                content : "";
                width : ${_ => `${15 + window.innerWidth *0.005}px`};
                height : ${_ => `${15 + window.innerWidth *0.005}px`};
                display : block;
                position : absolute;
                border-radius : 999px;
                top : 5px;
                background-color : ${({theme}) => theme.colors.white};
                opacity : 1;

            }
        }

        h3{
            font-size : ${_ => `${15 + window.innerWidth * 0.002}px`};
            color : ${({theme}) => theme.colors.white};
            opacity : 0.5;
            font-weight : 500;
            line-height : 1.5rem;
            
        }

        &.section_left{
            border-right : 1px solid #F7F6F380;

            h2{
                margin : 1rem 1rem 1rem 0;
                text-align : right;

                &::before{
                    right : ${_ => `-${20 + (15 + window.innerWidth *0.005) / 2}px`};
                }
            }

            h3{
                text-align : right;
                margin : 0 1rem 1rem 0;
            }
        }

        &.section_right{
            border-left : 1px solid #F7F6F380;

            h2{
                margin : 1rem 0 1rem 1rem;
                text-align : left;

                &::before{
                    left : ${_ => `-${20 + (15 + window.innerWidth *0.005) / 2}px`};
                }
            }

            h3{
                text-align : left;
                margin : 0 0 1rem 1rem;
            }
        }
    }
`

const Main = styled.div`

    z-index : 10;
    position:relative;
    top : 1rem;
    padding-bottom: 3rem;

    h1{
        margin : 0 0 1rem;
        text-align : center;
        font-size : ${_ => `${window.innerWidth *0.07}px`};
        color : ${({theme}) => theme.colors.white};
        opacity : 0.5;
    }
`
