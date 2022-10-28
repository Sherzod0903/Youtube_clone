import React ,{Component} from "react";
import { Container, Video, Wrapper,User, Title } from "./style";



export default class Youtube extends Component{
render(){
    const {user,video ,name ,view,time,title,id}=this.props.value;
    return(

<Container>
    <Video src={video} alt='video content'/>
    <Wrapper>
<User src={user.img}/>



<div>

<Title >{title}</Title>
<Title des>{id} | {user.name} </Title>

<div style={{display:'flex'}}>
<Title des> {view} {time}</Title>
</div>

</div>

    </Wrapper>

    
     </Container>
 
    )
}

}