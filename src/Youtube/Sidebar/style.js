import styled from 'styled-components';

export const Container=styled.div`
display:flex;
flex-direction:column;
width:300px;

height:100vh;
overflow-y:scroll;
`

export const Wrapper=styled.div`
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
margin:10px 0px;

`

export const Title=styled.div`
font-family: 'Roboto';
display:flex;
align-items:center;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
border-radius:5px;
width:100%;
height:40px;
margin-left:24px;
color:${({tittle})=>(tittle ? 'rgba(255, 255, 255, 0.6)':'#FFFFFF')};
:hover{
    background-color:#ffffff;
    color:#212121;
    margin-left:2px;
    font-size: 21px;
    padding-left:10px;

}
`

export const ItemWrapper=styled.div`
display:flex;
align-items:center;
cursor: pointer;
/*  */
`