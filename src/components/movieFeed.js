import React from "react";
import CardStructure from "./cardStructure";

export default class MovieFeed extends React.Component{
    render(){
        return(
            <>
                <CardStructure/>
                <CardStructure/>
                <CardStructure/>
            </>
            
        )
    }
}