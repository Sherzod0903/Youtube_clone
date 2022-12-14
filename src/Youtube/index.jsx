import React from "react";
import { Category, Container, Icons, Wrapper ,Input,User, Side,Link} from "./style";
import Sidebar from './Sidebar'
import Body from './Body'
import logo from '../Assets/image/logo.png'
import user from '../Assets/image/yuo.jpg'
import  { data } from '../mock';
import { Root } from "../root/root";



export default class Youtube extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:data,
            // active:true,
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
    let ress=data.filter((value)=>value.id!==id)
    this.setState({data:ress})
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
        <Side>
        <Link activeStyle={{color:'coral'}} to={'/home'} >Technology</Link>
        <Link activeStyle={{color:'coral'}} to={'/sport'} >Sport</Link>
        <Link activeStyle={{color:'coral'}} to={'/Business'} >Business</Link>
        <Link activeStyle={{color:'coral'}} to={'/news'} >News</Link>
        <Link activeStyle={{color:'coral'}} to={'/Technology'} >Technology</Link>
        <Link activeStyle={{color:'coral'}} to={'/Action'} >Action</Link>
        <Link activeStyle={{color:'coral'}} to={'/Comedy'} >Comedy</Link>
        <Link activeStyle={{color:'coral'}} to={'/Languages'} >Languages</Link>
        <Link activeStyle={{color:'coral'}} to={'/Moments'} >Moments</Link>
              
        </Side>
       

    <Container flex>
<Sidebar/>  
    <Body onDelete={onDelete} data={this.state.data}/>  
  <Root/>
   
     </Container>
 

    </Container>
 
    )
}

}