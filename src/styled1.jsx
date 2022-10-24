import styled,{css} from 'styled-components'

const button=css`
   
   display:flex;
   justify-content:center;
   align-items:center;
`

export const Container = styled.div`
  ${button}  

`




export const H4=styled.div`
   ${button}
color: black;
cursor: pointer;
`



export const H2=styled.h2`
  color:${({bg})=>bg};
   /* cursor: pointer; */
   
`

export const Container1 = styled.div`
   display:flex;
   /* justify-content:center; */
   align-items:center;
   flex-direction:column;
   width:400px;
   height:${(props)=> props.cont ? '600px':'600px'};
   background-color:whitesmoke;
   border-radius:10px;
   

`;
export const Tag=styled.div`
${button}
margin-top:30px;
`


export const Input=styled.input`
display:flex ;
justify-content:center;
/* align-items:center; */
flex-direction:column;
width:290px;
height:30px;
padding-left:15px;
/* margin-top:10px; */
border-style:none;
margin-bottom:20px;
border-radius:7px;

`;

export const Button=styled.div`
${button}
width:300px;
height:40px;
background-color:green;
color:white;
opacity:0.9;
border-radius:4px;
font-size:20px;
cursor: pointer;
transition: all .3s ease-in-out;
:active{
   transform: scale(0.97);
}


`

export const H3=styled.h3`

${button}
   font-size:16px;
      opacity:0.85;
   padding-top:20px;
  
`

export const Button2=styled.div`
${button}
width:300px;
height:30px;
background-color:white;
padding-top:10px;
border:1px solid #eaeaea;
margin-bottom:0.9rem;
cursor: pointer;
`