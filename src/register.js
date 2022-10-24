import React from "react";


import {
  Container,
  Container1,
  Button,Tag,
  Input,H3,Button2,H2,H4} from './styled1.jsx'
  import facebook from './Assets/facebook.png'
  import google from './Assets/googleicon.jpg'
 


class Register extends React.Component{
  constructor(props){
    super(props);
      this.state={

        mode:'Login'
      }
    }
  
render(){

  const onClick=() => {
    this.setState({mode:!this.state.mode})
  }

 
    return(

        <Container>
            <Container1 type='cont'> 
                  {
                    this.state.mode ?(

                <div>
              <Tag onClick={onClick}><H2 bg='green'> Login </H2>  <H4>/ Register  </H4>
                  </Tag>
                  <p>Enten your email and password to login.</p>

                  <Input type="name" placeholder="Username" />
                  <Input type="email" placeholder="Enter your email address" />
            
                  <Button >Login</Button>
                  <H3 >
                  Or login with
                  </H3>
                </div>
                
              ):(  <div>
                <Tag onClick={onClick}><H4> Login / </H4> <H2 bg='green'>  Register </H2> </Tag>
              <p>Enten your email and password to register.</p>
                <Input type="name" placeholder="Username" />
              

              
              <Input type="email" placeholder="Enter your email address" />
            

            
            
              <Input className="hi" type="password" placeholder="Password" />
            
              

            
              <Input type="password" placeholder="Confirm password" />
              <Button >Register</Button>
              <H3 >
                  Or register with
                  </H3>
              </div>)

              }



















            {/* <h2> Login / </h2>  
            <H2> Register</H2> */}
            
         
{/*               
              <Input type="name" placeholder="Username" />
              

              
                <Input type="email" placeholder="Enter your email address" />
              

              
              
                <Input className="hi" type="password" placeholder="Password" />
              
                

              
                <Input type="password" placeholder="Confirm password" />
            

                <Button >Login</Button>
               */}
  




          
  
  


                <Button2> <img className="logo" src={google} alt='google'/> Continue with Google</Button2>
                <Button2 >  <img className="logo2"src={facebook}alt='facebook' />Contine with Facebook</Button2>

           

                
           
            </Container1>

        </Container>
    )
}

}


export default Register;