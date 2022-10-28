import React from "react";
import { Category, Container, Icons, Wrapper ,Input,User} from "./style";
import Sidebar from './Sidebar'
import Body from './Body'
import logo from '../Assets/image/logo.png'

import user from '../Assets/image/logoimg.jpg'
import  { data } from '../mock';



export default class Youtube extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:data
        }
    }
render(){
    return(
<Container>
    <Wrapper>
        <Category><Icons.Burger/> <Icons.Logo src={logo} alt='Logo img'/>
        </Category>
        <Category><Input placeholder='serach'/>
        <Icons.Search/></Category>
        <Category end><Icons.Video/><Icons.Menu/><Icons.Bell/><User src={user} alt='user'/></Category>

       
        </Wrapper>
    <Container flex>
<Sidebar/>
    <Body data={this.state.data}/>
     </Container>
    </Container>
 
    )
}

}