import React from "react";
import cardStyle from './cardStructure.module.css';
import CommentSection from "./commentSection";
import LikeButton from "./likeButton";
import Movies from "./movieList";

export default class CardStructure extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        var movie1 = {
            name:"Spider-Man: No Way Home",
            year:'2021',
            poster:"https://pbs.twimg.com/media/Fav5_AcUsAAtaUL?format=jpg&name=900x900",
            synopsis:"With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
        };
        return(
            <>
            <div className="container">
                <div className="card">
                    <img className={cardStyle.cardimgtop} src={movie1.poster} alt='Spider-Man: No Way Home'></img>

                    <div className="card-body">
                        <h5 className="card-title">{movie1.name}</h5>
                        <p className="card-text">{movie1.synopsis}</p>
                    </div>
                    <div>
                        
                    </div>

                    <div className="card-footer">
                        <LikeButton/>
                        <CommentSection/>
                    </div>
                </div>
            </div><br/>
            </>
        )
    }
}