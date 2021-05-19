import React, { Component } from 'react'
import styled from 'styled-components'

export default class About extends Component {
    render() {
        return (
            <Main>
                <Content>
                  <p>
                    您好，我是嘉駿，2020年畢業於元智大學資訊傳播學系。大學期間我不斷地探索自己喜歡的事物，接觸過許多程式語言，學習途中都蠻有成就感。然而，在大二時期接觸到前端程式設計，除了透過網頁呈現資料外，也喜歡利用程式產生一些有趣的視覺效果，大三期間擔任過RWD實習生，除此之外，目前也有自己接一些網頁的案子。目前除了努力為這方面的技能打好基礎，我也有學習互動科技的相關技術，期望能透過人與科技的互動，帶給使用者不一樣的體驗和想法 ，如同我的畢製專題-阿那納斯，透過互動裝置和霧幕投影表現出世人對宗教的盲從，也希望透過此方式，可以幫助到需要幫助的人。
                  </p>
                </Content>
                <ImgContainer>
                  <img src={`${process.env.PUBLIC_URL}/asset/about_me.png`}/>
                </ImgContainer>
            </Main>
        )
    }
}

const Main = styled.div`

    display : flex;
    z-index : 10;
    position:relative;
    height : 100%;
    
`

const ImgContainer = styled.div`
  flex : 1;
  position:relative;
  text-align: center;
    img{
        width:70%;
        max-width:20rem;
        z-index:10;
        position:relative;
        box-shadow : rgba(0,0,0,0.16) 10px -10px 20px;
        flex : 1;
        height:auto;
        top: 50%;
        transform: translateY(-50%);
    }

    &::before{
        content: "";
        width:70%;
        max-width:20rem;
        height:${_ => `${window.innerWidth / 2.5}px`};;
        max-height : 25rem;
        top: 50%;
        transform: translate(-35% , -60%);
        left: 50%;
        display:block;
        position:absolute;
        background-color:${props => props.theme.colors.main};
        z-index:1;
    }

`

const Content = styled.div`
  
  flex:1;
  align-self: center;

    p{
        color : ${({theme}) => theme.colors.white};
        font-size : .8rem;
        width : 70%;
        min-width:15rem;
        margin : auto;
        line-height: 1.8rem;
    }
`;
