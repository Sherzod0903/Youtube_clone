import React from "react";
import { Container } from "./style";
import Card from './Card';
import  { data } from '../../mock';



export default class Youtube extends React.Component{
render(){
    return(
<Container>
    {data.map((value)=>(  
    <Card view={'1M'} time={'10 minutes before'} name={'THe best film all of time'} user={'https://www.cgi.com/sites/default/files/styles/hero_banner/public/space_astronaut.jpg?itok=k2oFRHrr'} video={'https://flixable.b-cdn.net/hbo-max/small/us/garfield-a-tail-of-two-kitties.jpg'}/>

    ))}
  
     </Container>
 
    )
}

}

