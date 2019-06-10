import React from 'react'
import Featured from "./featured/Featured"
import HomeMatches from "./matches/HomeMatches"
import Meet from "./meetPlayers/Meet"
import Promotion from "./promotion/Promotion"

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
           <HomeMatches/>
           <Meet/>
           <Promotion/>
        </div>
    )
}

export default Home
