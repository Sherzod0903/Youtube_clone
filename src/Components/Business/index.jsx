import React from "react";
import { Container, } from "./style";
import Card from './Card';
import { business } from "../../mock";






export default class Business extends React.Component{
   
   
render(){


const {onDelete}=this.props

    return(
 
<Container>



  

    {
        (    business.map((value)=>(  
    <Card key={value.id} onDelete={onDelete}   value={value}  />  )))
   
}

        </Container>
 
    )
}

}

