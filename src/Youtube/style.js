import styled from 'styled-components';

import { ReactComponent as burger} from '../Assets/icon/burger.svg'
import { ReactComponent as search} from '../Assets/icon/search.svg'
import { ReactComponent as video} from '../Assets/icon/video.svg'
import { ReactComponent as bell} from '../Assets/icon/bell.svg'
import { ReactComponent as menu} from '../Assets/icon/menu.svg'




export const Container=styled.div`
display:flex;
flex-direction:${({flex})=>!flex&&'column'};
background-color: #212121;
/* height:100vh;  */
color:#FFFFFF;
padding:${({flex})=>!flex&&'0 30px'};
`

export const Wrapper=styled.div`

display:flex;
align-items:center;
height:60px;
justify-content:space-between;
position:sticky;
top:0%;
background-color: #212121;

`




export const Category=styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:${({end})=>end&&'flex-end'};

`



//ICONS starts from here

export const Icons=styled.div`

`
Icons.Video=styled(video)`
width:24px;
height:20px;
margin-left:20px;
cursor: pointer;
`
Icons.Menu=styled(menu)`
width:24px;
height:20px;
margin-left:20px;
cursor: pointer;

`
Icons.Bell=styled(bell)`
width:24px;
height:18px;
margin-left:20px;
cursor: pointer;

`



Icons.Burger=styled(burger)`
width:24px;
height:24px;
`

Icons.Logo=styled.img`
padding-left:20px;
`;

Icons.Search=styled(search)`
width:60px;
height:40px;
padding:10px 20px;
background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px;
cursor: pointer;
`

export const User=styled.img`
width:50px;
height:50px;
border-radius:50%;
margin-left:20px;
cursor: pointer;

`
//Icons end here





export const Input=styled.input`
height:40px;
background: #000000;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 2px 0px 0px 2px;
width:100%;
max-width:500px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(255, 255, 255, 0.5);
:focus{
    outline:none;
}
padding-left:10px;


`

export const Side=styled.div`
display:flex;
align-items:center;
justify-content:center;
/* width:1440px; */

`
export const Text=styled.div`

font-family:'Roboto';
padding: 5px 12px;
margin-top:10px;
margin-left:15px;
flex: none;
order: 0;
flex-grow: 0;
max-width:120px;

height: 30px;
border-radius:30px;

color:#ffff;
background: rgba(255, 255, 255, 0.2);
margin-bottom:20px;
:hover{
    font-size:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:whitesmoke;
    color:black;
    width:130px;
    height:40px;
}
cursor: pointer;
`

