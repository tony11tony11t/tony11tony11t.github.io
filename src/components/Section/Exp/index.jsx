import React, { Component } from 'react'
import styled from 'styled-components'

export default class Exp extends Component {

    exp = [[{
        title : "擔任大學系上隔宿露營營隊副召",
        content : "在大二期間擔任系上兩天一夜活動副召，負責與廠商接洽贊助事宜，活動統籌，場地規劃"
    },{
        title : "參加全國慈善/科技/人文網頁設計比賽暨行動APP創作比賽",
        content : "在暑假與系上伙伴(5人)共同開發Mochi App獲得銀獎，負責前端程式與後端程式撰寫"
    },{
        title : "參加教育部107年教育志工全國培訓研習營",
        content : "除了更深入了解資訊志工，更加學習到如何透過資訊的力量有效幫助需要幫助的人"
    },{
        title : "協助「蓽華補習班」維護官網",
        content : "蓽華補習班是利用WordPress架設的網站，目前正在幫此公司維護及更新網站內容"
    },{
        title : "擔任大學系上隔宿露營營隊副召",
        content : "在大二期間擔任系上兩天一夜活動副召，負責與廠商接洽贊助事宜，活動統籌，場地規劃"
    }],[{
        title : "參加第二屆元智大學創意APP競賽",
        content : "與系上伙伴(6人)共同開發「好課來相報」APP獲得第一名負責前端程式與後端程式撰寫"
    },{
        title : "參加ICSS2019國際研討會",
        content : "在大三期間發表一篇小論文，標題為「A 360 Degrees First Person Perspective Image Generating Method by Several Cameras around Target Person」"
    },{
        title : "參與「網絡行動科技」實習計畫",
        content : "在網絡科技股份有限公司擔任實習生，學習利用drupal開發網站以及網頁前端的知識"
    },{
        title : "參加由adobe舉辦的ADAA競賽",
        content : "與系上夥伴(6人)共同製作連動裝置並在影片類獲得Top Talent，是台灣唯二在影片類獲得優選的作品之一"
    },{
        title : "參加「藝次元互動科技」實習計畫",
        content : "在藝次元互動科技股份有限公司擔任暑期實習生，學習利用ASP.NET開發網頁互動遊戲"
    },{
        title : "擔任大學系上畢業展覽總召",
        content : "在大四期間擔任畢業展覽總召，負責處理行政事務，進度控管"
    }],[{
        title : "參加放視大賞競賽",
        content : "在大四期間與系上夥伴(共6人)製作一個霧幕投影互動體驗裝置，獲得放視大賞跨領域類的二階入圍"
    },{
        title : "榮獲校內群育優異獎",
        content : "經由系上推薦，獲得資傳系的群育優異獎。"
    },{
        title : "畢業",
        content : "於元智大學資訊傳播學系取得學士學位"
    },{
        title : "參加「Milliman」實習計畫",
        content : "在明德精算顧問有限公司擔任實習生，學習利用D3.js做出資料視覺化頁面"
    }]]


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
                {this.exp[0].map((info , i) => this.createSection(info.title , info.content , i))}
                <h1>2019</h1>
                {this.exp[1].map((info , i) => this.createSection(info.title , info.content , i))}
                <h1>2020</h1>
                {this.exp[2].map((info , i) => this.createSection(info.title , info.content , i))}
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
