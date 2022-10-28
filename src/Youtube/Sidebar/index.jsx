import React from "react";
import { Container ,Title,Wrapper,ItemWrapper} from "./style";
import { sidebar } from "../../utils/sidebar";
// import {ReactComponent as ar} from '../Assets/image/Quran.png'



export default class Youtube extends React.Component{
render(){
    return(
<Container>
    {
        sidebar.map(({icon,id,title,data})=>(
            <Wrapper key={id} >
                {title && <Title tittle >{title}</Title>}
                {data.map(({icon:Icon,img,title:subTitle})=>(
                    <ItemWrapper>
                        
                        <Icon/>
                        
                        <Title>{subTitle}</Title>
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