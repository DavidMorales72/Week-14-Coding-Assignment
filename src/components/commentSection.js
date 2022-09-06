import React from "react";

export default class CommentSection extends React.Component {
    render(){
        return(
            <>
            <form>
                <input type="text"></input>
                <button className="btn btn-danger">Comment</button>
            </form>
            
            </>
        )
    }
}