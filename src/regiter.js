import React from "react";
import {Container,Container1,Button,Tag,Input} from './styled1'

class Login extends React.Component{
render(){
    return(
        <Container>
            <Container1>
                <Tag>
            <h2> Login / </h2>  
            <h2> Register</h2>

                </Tag>
         
                <p>Enten your email and password to regiter.</p>
              <Input>
              <input type="name" placeholder="username" />
              </Input>  

              <Input>
                <input type="email" placeholder="enter your email address" />
              </Input>  

               <Input>
                <input className="hi" type="password" placeholder="enter your password" />
              </Input>  

                <Input>
                <input type="password" placeholder="confirm your password" />
              </Input>  

                <Button >Register</Button>

                
           
            </Container1>

        </Container>
    )
}

}


export default Login;