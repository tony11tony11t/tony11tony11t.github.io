import React, { Component } from 'react'
import styled from 'styled-components'
import data from '../../../data.json'

export default class Works extends Component {

    render() {
        return (
            <Main>
                <h1>WORKS</h1>
                <WorksWrapper>
                    {data.works.map(info => {
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
        padding: 2rem 0;
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
