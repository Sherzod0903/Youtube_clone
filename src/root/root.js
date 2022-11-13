import { Route } from "react-router-dom";
// import Sport from "../Components/Sport";
import Business from "../Components/Business";

export const Root =()=>{

    return(
        <div>

            <Route path={'/sport'}component={Business}/>
            <Route path={'/news'}component={Business}/>
            <Route path={'/Comedy'}component={Business}/>
            <Route path={'/Business'}component={Business}/>


        </div>
    )
}