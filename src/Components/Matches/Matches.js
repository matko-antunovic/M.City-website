import React, { Component } from 'react'
import CircularProgress from "@material-ui/core/CircularProgress"

import {firebaseMatches} from "../../firebase"
import LeagueTable from "./LeagueTable"
import MatchesList from "./MatchesList"

class Matches extends Component {

    state={
        loading:true,
        matches:[],
        filterMatches:[],
        playedFilter:"All",
        resultFilter:"All"
    }

    componentDidMount(){
        firebaseMatches.once("value").then(snapshot=>{
            const matches=this.firebaseLoop(snapshot);
            
            this.setState({
                loading:false,
                matches:this.reverseArray(matches),
                filterMatches:this.reverseArray(matches)
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
        let data=[];
        snapshot.forEach((childSnapshot)=>{
            data.push({
                ...childSnapshot.val(),
                id:childSnapshot.key
            })
        });
       
        return data;
    }

    reverseArray=(matches)=>{
        let reversed=[];
        
        for(var i=matches.length-1;i>=0; i--){
            reversed.push(matches[i])
            
        }
        return reversed;
    }

    showPlayed=(played)=>{
        const list=this.state.matches.filter(m=>{
            return m.final === played
        })
        this.setState({
            filterMatches: played === "All" ? this.state.matches : list,
            playedFilter: played,
            resultFilter: "All"
        })
    }

    showResult=(res)=>{
        const list=this.state.matches.filter(m=>{
            return m.result === res
        })
        this.setState({
            filterMatches: res === "All" ? this.state.matches : list,
            playedFilter: "All",
            resultFilter: res
        })
    }

    render() {
        return (
            <div className="the_matches_container">
                <div className="the_matches_wrapper">
                <div className="left">
                <div className="match_filters">
            	  <div className="match_filters_box">
                    <div className="tag">
                        Show Match
                    </div>
                    <div className="cont">
                        <div className={`option ${this.state.playedFilter === "All" ? "active" : " "}`} onClick={()=>this.showPlayed("All")}>
                            All
                        </div>
                        <div className={`option ${this.state.playedFilter === "Yes" ? "active" : " "}`} onClick={()=>this.showPlayed("Yes")}>
                            Played
                        </div>
                        <div className={`option ${this.state.playedFilter === "No" ? "active" : " "}`} onClick={()=>this.showPlayed("No")}>
                            Not Played
                        </div>
                    </div>
                  </div>
                  <div className="match_filters_box">
                    <div className="tag">
                        Result game
                    </div>
                    <div className="cont">
                        <div className={`option ${this.state.resultFilter === "All" ? "active" : " "}`} onClick={()=>this.showResult("All")}>
                            All
                        </div>
                        <div className={`option ${this.state.resultFilter === "Yes" ? "active" : " "}`} onClick={()=>this.showResult("W")}>
                            Won
                        </div>
                        <div className={`option ${this.state.resultFilter === "No" ? "active" : " "}`} onClick={()=>this.showResult("L")}>
                            Lost
                        </div>
                        <div className={`option ${this.state.resultFilter === "No" ? "active" : " "}`} onClick={()=>this.showResult("D")}>
                            Draws
                        </div>
                    </div>
                  </div>
                </div>
                {
                  this.state.matches ?  <MatchesList matches={this.state.filterMatches}/> :null 
                }
                </div>
                <div className="right">
                    <LeagueTable/>
                </div>
                </div>
            </div>
        )
    }
}
export default Matches;