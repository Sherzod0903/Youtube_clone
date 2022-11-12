import React from "react";
import { Container ,Title,Wrapper,ItemWrapper} from "./style";
import { chanels, sidebar} from "../../utils/sidebar";
// import {ReactComponent as ar} from '../Assets/image/Quran.png'




export default class Youtube extends React.Component{
render(){
    return(
<Container>
    {
        sidebar.map(({icon,id,title,data})=>(
            <Wrapper key={id} >
               
                {data.map(({icon:Icon,title})=>(
                    <ItemWrapper>
                        
                        <Icon/>
                        
                        <Title>{title}</Title>
                    </ItemWrapper>
                    ))
                }

            </Wrapper>
        ))
    }
     {
        chanels.map(({id,title,data})=>(
            <Wrapper key={id} >
                {title && <Title tittle >{title}</Title>}
                {data.map(({title,})=>(
                    <ItemWrapper>
                        
                    
           

                        
                        <Title>{title}</Title>
                    </ItemWrapper>
                    ))
                }

            </Wrapper>
        ))
    }
     </Container>
 
    )
}

}