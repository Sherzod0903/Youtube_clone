import styled from 'styled-components';

export const Container=styled.div`
width:350px;
height:300px;
margin-right:20px;
margin-bottom:20px;
`

export const Video =styled.img`
width:100%;
height:200px;
margin-left:24px;
margin-bottom:12px;
margin-top:24px;
cursor: pointer;
`
export const Wrapper=styled.div`
display:flex;
`
export const User=styled.img`
width:40px;
height:40px;
border-radius:50%;
margin-right:20px;
margin-left:24px;
cursor: pointer;


`
export const Title=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color:${({des})=>des? 'rgba(255, 255, 255, 0.6)' : '#FFFFFF'};
`
