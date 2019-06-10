import React, { Component } from 'react'
import {firebaseMatches} from "../../../firebase"
import MatchesBlock from "../../UI/matchesBlock";

import Slide from "react-reveal/Slide"

class Blocks extends Component {

    state={
        matches:[]
    }

    componentDidMount(){
        firebaseMatches.limitToLast(6).once("value").then((snapshot)=>{
            const matches=this.firebaseLoop(snapshot);
            
            this.setState({
                matches:this.reverseArray(matches)
            })
        })
    }

    reverseArray=(matches)=>{
        let reversed=[];
        
        for(var i=matches.length-1;i>=0; i--){
            reversed.push(matches[i])
            
        }
        return reversed;
    }

    firebaseLoop=(snapshot)=>{
        const data=[];
        snapshot.forEach((childSnapshot)=>{
            data.push({
                ...childSnapshot.val(),
                id:childSnapshot.key
            })
        });
        return data;
    }

    showMatches=(matches)=>(
        matches ? matches.map((m)=>(
            <Slide bottom key={m.id}>
            <div  className="item">
                <div className="wrapper">
                <MatchesBlock  match={m}/>
                </div>
            </div>
            </Slide>
       )) : null
    )

    render() {

        return( 
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}
export default Blocks