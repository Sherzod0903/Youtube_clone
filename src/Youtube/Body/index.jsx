import React from "react";
import { Container, } from "./style";
import Card from './Card';






export default class Youtube extends React.Component{



render(){
// console.log(this.props.data , 'data');

const {data, onDelete}=this.props;
    return(
 
<Container>


 {/* <Card/> */}
  

    {
        data.length? (     data.map((value)=>(  
    <Card  onDelete={onDelete}   value={value}  />  )))
    :(
        <h1 style={{ textAlign:'center', width:'100%'}}> Not Found </h1>
        )
}

        </Container>
 
    )
}

}

