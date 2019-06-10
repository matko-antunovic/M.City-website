import React from 'react'
import Layout from "./Components/HOC/Layout"
import {Switch,Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Team from "./Components/Team/Team"
import Matches from "./Components/Matches/Matches"
import NotFound from "./Components/UI/NotFound"

const RouterApp = () => {
  return (
    <div>
      <Layout>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/the_matches" component={Matches}/>
        <Route exact path="/the_team" component={Team}/>
        <Route component={NotFound}/>
        </Switch>
      </Layout>
    </div>
  )
}

export default RouterApp;
