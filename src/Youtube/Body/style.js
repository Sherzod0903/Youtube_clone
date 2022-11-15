import styled from 'styled-components';

export const Container=styled.div`
display:flex;
flex:1;
flex-wrap:wrap;
/* border:3px solid red; */
width:100%;
height:100vh;
overflow-y:scroll;
background-color:#000000;
`

const Side=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:40px;
height:20px;
background-color:white;
color:black;
border-radius:30%;
`


export {Side}