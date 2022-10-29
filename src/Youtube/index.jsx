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
    const onFilter=(e)=>{
        console.log(e.target.value);
        let res=data.filter((value)=>value.title.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({data:res});
        }
const onDelete=(id)=>{
    console.log(id);
    let res=data.filter(value=>value.id!==id)
    this.setState({data:res})
}

    return(
<Container>
    <Wrapper>

        <Category><Icons.Burger/>  <Icons.Logo src={logo} alt='Logo img'/>
        </Category>
        <Category><Input placeholder='serach' onChange={onFilter} />
        <Icons.Search/></Category>
        <Category end><Icons.Video/><Icons.Menu/><Icons.Bell/><User src={user} alt='user'/></Category>

       
        </Wrapper>
    <Container flex>
<Sidebar/>
    <Body onDelete={onDelete} data={this.state.data}/>
     </Container>
    </Container>
 
    )
}

}