import React from "react";
import { Container, } from "./style";
import Card from './Card';
import { sportt } from "../../mock";






export default class Sport extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:sportt,
            // active:true,
        }
    }
render(){


const {onDelete}=this.props

    return(
 
<Container>



  

    {
        (    sportt.map((value)=>(  
    <Card key={value.id} onDelete={onDelete}   value={value}  />  )))
   
}

        </Container>
 
    )
}

}

