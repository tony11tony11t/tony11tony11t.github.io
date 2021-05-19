import React, { Component } from 'react'
import styled from 'styled-components'

export default class Blogs extends Component {
    works = [{
        src : `${process.env.PUBLIC_URL}/asset/work_1.png`,
        title : "標題1",
        content : "內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
    },{
        src : `${process.env.PUBLIC_URL}/asset/work_2.png`,
        title : "標題1",
        content : "內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
    },{
        src : `${process.env.PUBLIC_URL}/asset/work_3.png`,
        title : "標題1",
        content : "內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
    },{
        src : `${process.env.PUBLIC_URL}/asset/work_3.png`,
        title : "標題1",
        content : "內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容"
    }]
    render() {
        return (
            <Main>
                <h1>Blogs</h1>
                <WorksWrapper>
                    {this.works.map(info => {
                        return (<Container>
                                    <ImageWrapper src={info.src}/>
                                    <h2>{info.title}</h2>
                                    <p>{info.content}</p>
                                </Container>)
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

const Container = styled.div`
    flex :  0 0 25%;
    text-align : center;
    margin-bottom : 2rem;
    position : relative;

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

    h2{
        margin : 1rem 15%;
        text-align : left;
        font-size : 1.2rem;
        color : ${({theme}) => theme.colors.main};
    }

    p{
        margin : 1rem 15%;
        text-align : left;
        font-size : .8rem;
        color : ${({theme}) => theme.colors.white};
        line-height : 1.2rem;
    }
`

const ImageWrapper = styled.div`
    background-image : ${({src}) => `url(${src})`};
    background-size : 100% auto;
    background-position : center;
    height : 200px;
    width : 70%;
    margin : auto;
`
