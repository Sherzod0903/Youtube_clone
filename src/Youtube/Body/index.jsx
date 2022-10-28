import React from "react";
import { Container } from "./style";
import Card from './Card';
import  { data } from '../../mock';





export default class Youtube extends React.Component{



render(){
// console.log(this.props.data , 'data');
const {data}=this.props;
    return(
<Container>
    {data.map((value)=>(  
    <Card     value={value}  />  ))}
  
     </Container>
 
    )
}

}

