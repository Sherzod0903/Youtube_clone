import React ,{Component} from "react";
import { Container, Video, Wrapper,User, Title } from "./style";



export default class Youtube extends Component{
render(){
    const {user,video ,view,time,title,id}=this.props.value;
    const{onDelete}=this.props;
    return(

<Container>
    <Video src={video} alt='video content'/>
    <Wrapper>
<User src={user.img}/>



<div>

<Title >{title}</Title>
<Title des>{id} | {user.name} </Title>

<div style={{display:'flex'}}>
<Title > {view} {time} <button onClick={()=>onDelete(id)} >delelte</button></Title>
</div>

</div>

    </Wrapper>

    
     </Container>
 
    )
}

}