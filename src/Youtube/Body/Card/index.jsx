import React ,{Component} from "react";
import { Container, Video, Wrapper,User, Title } from "./style";



export default class Youtube extends Component{
render(){
    const {user,video ,name ,view,time}=this.props;
    return(

<Container>
    <Video src={video} alt='video content'/>
    <Wrapper>
<User src={user}/>

<div>

<Title >Lorem Ipsum is simply dummy text of the printing</Title>
<Title des>{name}</Title>

<div style={{display:'flex'}}>
<Title des>{view} {time}</Title>
</div>

</div>

    </Wrapper>

    
     </Container>
 
    )
}

}