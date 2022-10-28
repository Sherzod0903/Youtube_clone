import styled from 'styled-components';
import {ReactComponent as home} from '../Assets/icon/home.svg'
import {ReactComponent as compus} from '../Assets/icon/compus.svg'
import {ReactComponent as subscribers} from '../Assets/icon/subscribers.svg'
import {ReactComponent as library} from '../Assets/icon/library.svg'
import {ReactComponent as history} from '../Assets/icon/history.svg'
import {ReactComponent as videos} from '../Assets/icon/videos.svg'
import {ReactComponent as watchlater} from '../Assets/icon/watchlater.svg'
import {ReactComponent as liked} from '../Assets/icon/liked.svg'
import {ReactComponent as arrow} from '../Assets/icon/arrowdown.svg'











// import { Category } from '../Youtube/style'

 const Icons=styled.div`
width:16px;
height:16px;
`
 Icons.Arr=styled.img`

`
Icons.Home=styled(home)`
`
Icons.Compus=styled(compus)`
`
Icons.Subscribers=styled(subscribers)`

`

Icons.Library=styled(library)`
`
Icons.Videos=styled(videos)`
`


Icons.History=styled(history)`
`


Icons.Watchlater=styled(watchlater)`

`


Icons.Arrow=styled(arrow)`
`

Icons.Liked=styled(liked)`
`

Icons.Liked=styled(liked)`
`

Icons.Liked=styled(liked)`
`


export const sidebar=[
{
    id:1,
    

    
    data:[
    {id:1,title:'Home' , icon: Icons.Home},
    {id:2,title:'Explore' , icon: Icons.Compus},
    {id:3,title:'Subscriptions' , icon: Icons.Subscribers},

]  ,  
},

{
    id:2,
   

   
    data:[
    {id:1,title:'Library' , icon: Icons.Library},
    {id:2,title:'History' , icon: Icons.History},
    {id:3,title:'Your videos' , icon: Icons.Videos},
    {id:4,title:'Watch later' , icon: Icons.Watchlater},
    {id:5,title:'Liked videos' , icon: Icons.Liked},
    {id:6,title:'Show more' , icon: Icons.Arrow},

]  ,  
},

{
    id:3,
  

    title:'Subscriptions',
    data:[
    {id:1,title:'Read Quran' , icon: Icons.Watchlater},
    {id:2,title:'Read Quran' , icon: Icons.Watchlater},
    {id:3,title:'Read Quran' , icon: Icons.Watchlater},
    {id:4,title:'Read Quran' , icon: Icons.Watchlater},
    {id:5,title:'Read Quran' , icon: Icons.Watchlater},
    {id:6,title:'Read Quran' , icon: Icons.Watchlater},
    {id:7,title:'Read Quran' , icon: Icons.Watchlater},
    {id:8,title:'Read Quran' , icon: Icons.Watchlater},


]  ,  
},

{
    id:4,
   

    title:'More from YouTube',
    data:[
    {id:1,title:'Youtube premium',icon: Icons.Videos},
    {id:2,title:'Settings',icon: Icons.Watchlater},
    {id:3,title:'Help',icon: Icons.Compus},
    {id:4,title:'Report Issue',icon: Icons.Arrow},
  


]  ,  
},

];