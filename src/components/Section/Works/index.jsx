import React, { Component } from 'react'
import styled from 'styled-components'

export default class Works extends Component {
    works = [{
        src : `${process.env.PUBLIC_URL}/asset/work_1.png`,
        content : ""
    },{
        src : `${process.env.PUBLIC_URL}/asset/work_2.png`,
        content : ""
    },{
        src : `${process.env.PUBLIC_URL}/asset/work_3.png`,
        content : ""
    },{
        src : `${process.env.PUBLIC_URL}/asset/work_4.png`,
        content : ""
    },{
        src : `${process.env.PUBLIC_URL}/asset/work_5.png`,
        content : ""
    },{
        src : `${process.env.PUBLIC_URL}/asset/work_6.png`,
        content : ""
    }]
    render() {
        return (
            <Main>
                <h1>Works</h1>
                <WorksWrapper>
                    {this.works.map(info => {
                        return (<ImageContainer>
                                    <img src={info.src} />
                                </ImageContainer>)
                    })}
                </WorksWrapper>
            </Main>
        )
    }
}

const Main = styled.div`

    z-index : 10;
    position:relative;
    height : 100%;

    h1{
        text-align :center;
        color : ${({theme}) => theme.colors.main};
        padding: 1rem 0;
        margin : 0;
        

        &::after{
            content : "";
            width : 30px;
            height : 5px;
            display : block;
            background-color : ${({theme}) => theme.colors.main};
            margin : auto;
            margin-top : .5rem;
        }
    }
`
const WorksWrapper = styled.div`
    display : flex;
    flex-wrap : wrap;
`

const ImageContainer = styled.div`
    flex :  0 0 25%;
    text-align : center;
    margin-bottom : 2rem;
    position : relative;

    img{
        width : 70%;
    }

    &::before{
        content : "";
        width : 70%;
        height : 100%;
        display : block;
        background-color : #1E1E1E;
        position : absolute;
        opacity : 0.2;
        margin : 0 15%;
    }
`
